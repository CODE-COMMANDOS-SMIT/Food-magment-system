"use client"

import { motion } from "framer-motion"
import { Header } from "../components/header"
import { MapPin, Search, Edit, Trash2 } from "lucide-react"
import { useTheme } from "next-themes"
import Map from "../components/map"

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
const entries = [
  { id: 1, deviceName: "Device A", longitude: -74.0060, latitude: 40.7128 },
  { id: 2, deviceName: "Device B", longitude: -118.2437, latitude: 34.0522 },
  { id: 3, deviceName: "Device C", longitude: -87.6298, latitude: 41.8781 },
  { id: 4, deviceName: "Device D", longitude: -95.3698, latitude: 29.7604 },
  { id: 5, deviceName: "Device E", longitude: -112.0740, latitude: 33.4484 }
];


export default function LocationsPage() {
  const { theme } = useTheme()
  
  return (
    <div className={`flex flex-col min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
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
          <h1 className={`text-3xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Stall Locations</h1>
          <button className={`btn btn-primary ${theme === 'light' ? 'bg-blue-500' : 'bg-blue-700'}`}>
            <MapPin className="inline-block w-4 h-4 mr-2" /> Add Location
          </button>
        </motion.div>
        <motion.div variants={itemVariants} className="card h-[50vh] w-[50vw]">
        <Map entry={entries} />
       
        </motion.div>
      </motion.div>
    </div>
  )
}
