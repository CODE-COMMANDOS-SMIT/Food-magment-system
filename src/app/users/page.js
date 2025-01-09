  "use client"

  import { motion } from "framer-motion"
  import { Header } from "../components/header"
  import { UserPlus, Search, Edit, Trash2 } from "lucide-react"

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

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Manager" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Staff" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Manager" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "Staff" }
  ]

  export default function UsersPage() {
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
            <h1 className="text-3xl font-bold">User Management</h1>
            <button className="btn btn-primary">
              <UserPlus className="inline-block w-4 h-4 mr-2" /> Add User
            </button>
          </motion.div>
          <motion.div variants={itemVariants} className="card">
            <div className="flex mb-4">
              <input className="input mr-2" placeholder="Search users..." />
              <button className="btn btn-secondary">
                <Search className="inline-block w-4 h-4 mr-2" /> Search
              </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
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
