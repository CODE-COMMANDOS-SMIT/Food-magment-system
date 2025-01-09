"use client"

import { motion } from "framer-motion"
import { Header } from "../components/header"
import { MapPin, Search, Edit, Trash2 } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const locations = [
  {
    id: 1,
    name: "Karachi Central",
    address: "123 Main St, Karachi",
    manager: "John Doe"
  },
  {
    id: 2,
    name: "Lahore North",
    address: "456 Oak Rd, Lahore",
    manager: "Jane Smith"
  },
  {
    id: 3,
    name: "Islamabad East",
    address: "789 Pine Ave, Islamabad",
    manager: "Bob Johnson"
  },
  {
    id: 4,
    name: "Peshawar South",
    address: "101 Elm Blvd, Peshawar",
    manager: "Alice Brown"
  },
  {
    id: 5,
    name: "Quetta West",
    address: "202 Cedar Ln, Quetta",
    manager: "Charlie Davis"
  }
]

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.div
        className="container flex-1 py-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center mb-6"
        >
          <h1 className="text-3xl font-bold">Stall Locations</h1>
          <button className="btn btn-primary">
            <MapPin className="inline-block w-4 h-4 mr-2" /> Add Location
          </button>
        </motion.div>
        <motion.div variants={itemVariants} className="card">
          <div className="flex mb-4">
            <input className="input mr-2" placeholder="Search locations..." />
            <button className="btn btn-secondary">
              <Search className="inline-block w-4 h-4 mr-2" /> Search
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Manager</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {locations.map(location => (
                <tr key={location.id}>
                  <td>{location.name}</td>
                  <td>{location.address}</td>
                  <td>{location.manager}</td>
                  <td>
                    <button className="btn btn-secondary mr-2">
                      <Edit className="inline-block w-4 h-4" />
                    </button>
                    <button className="btn btn-secondary">
                      <Trash2 className="inline-block w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </div>
  )
}
