"use client"

import { motion } from "framer-motion"
import { Header } from "../components/header"

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

export default function SettingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.div
        className="container flex-1 py-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-6">
          Settings
        </motion.h1>
        <motion.div variants={itemVariants} className="card">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input id="name" className="input" defaultValue="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="input"
                defaultValue="john@example.com"
              />
            </div>
            <div className="flex items-center">
              <input id="notifications" type="checkbox" className="mr-2" />
              <label htmlFor="notifications">Enable email notifications</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </motion.div>
        <motion.div variants={itemVariants} className="card mt-6">
          <h2 className="text-xl font-semibold mb-4">Security</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="current-password" className="block mb-1">
                Current Password
              </label>
              <input id="current-password" type="password" className="input" />
            </div>
            <div>
              <label htmlFor="new-password" className="block mb-1">
                New Password
              </label>
              <input id="new-password" type="password" className="input" />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block mb-1">
                Confirm New Password
              </label>
              <input id="confirm-password" type="password" className="input" />
            </div>
            <div className="flex items-center">
              <input id="two-factor" type="checkbox" className="mr-2" />
              <label htmlFor="two-factor">
                Enable two-factor authentication
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Update Password
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}
