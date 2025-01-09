"use client"

import { motion } from "framer-motion"
import { Bell, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"

export function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Set background and text color based on the theme
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-800"
  const textColor = theme === "light" ? "text-black" : "text-white"
  const hoverColor = theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700"
  
  // Button styles based on the theme
  const buttonBgColor = theme === "light" ? "bg-blue-500" : "bg-gray-700"
  const buttonTextColor = "text-white"
  const buttonHoverColor = theme === "light" ? "hover:bg-blue-400" : "hover:bg-gray-600"

  return (
    <motion.header
      className={`${bgColor} ${textColor} py-4 transition-all duration-300`} // Added transition-all
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.h2
          className={`text-2xl font-bold`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Dashboard
        </motion.h2>
        <div className="flex items-center space-x-4">
          <button
            className={`btn ${buttonBgColor} ${buttonTextColor} ${buttonHoverColor} p-2 rounded transition-colors duration-300`}
          >
            <Bell className="w-5 h-5" />
          </button>
          <div className="relative">
            <button
              className={`btn ${buttonBgColor} ${buttonTextColor} ${buttonHoverColor} p-2 rounded transition-colors duration-300`}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <User className="w-5 h-5" />
            </button>
            {isProfileOpen && (
              <div className={`absolute right-0 mt-2 w-48 ${theme === "light" ? "bg-gray-100" : "bg-gray-700"} rounded-md shadow-lg`}>
                <Link
                  href="/profile"
                  className={`block px-4 py-2 text-sm ${hoverColor}`}
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className={`block px-4 py-2 text-sm ${hoverColor}`}
                >
                  Settings
                </Link>
                <Link
                  href="/logout"
                  className={`block px-4 py-2 text-sm ${hoverColor}`}
                >
                  Log out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  )
}
