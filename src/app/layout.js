"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { AppSidebar } from "./components/app-sidebar"
import { ThemeProvider } from "./components/theme-provider.tsx"
import { useTheme } from "next-themes"

const inter = Inter({ subsets: ["latin"] })


export default function RootLayout({ children }) {
  const { theme } = useTheme()

  // Define dynamic background color and text color based on the theme
  const bgColor = theme === "light" ? "bg-white" : "bg-black-900"
  const textColor = theme === "light" ? "text-black" : "text-white"

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${textColor}`}>
        <ThemeProvider attribute="class" defaultTheme="" enableSystem>
          <div className={`flex min-h-screen  ransition-all duration-500`}>
            <AppSidebar />
            <main className="flex-1 md:ml-64 transition-all duration-500">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
