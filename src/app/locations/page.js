"use client";

import { motion } from "framer-motion";
import { Header } from "../components/header";
import { MapPin, Navigation } from "lucide-react";
import { useTheme } from "next-themes";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const LocationsPage = () => {
  const { theme } = useTheme();

  // Placeholder function for the "Current Location" button
  const handleCurrentLocation = () => {
    alert("Fetching current location...");
    // Implement geolocation logic here
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
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
          <h1
            className={`text-3xl font-bold ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Stall Locations
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={handleCurrentLocation}
              className={`btn btn-secondary ${
                theme === "light" ? "bg-gray-200 text-black" : "bg-gray-700 text-white"
              }`}
            >
              <Navigation className="inline-block w-4 h-4 mr-2" />
              Current Location
            </button>
            <button
              className={`btn btn-primary ${
                theme === "light" ? "bg-blue-500" : "bg-blue-700"
              }`}
            >
              <MapPin className="inline-block w-4 h-4 mr-2" /> Add Location
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="card w-full flex-1 flex items-center justify-center"
        >
          {/* Embedded Google Map */}
          <div className="mapbox w-full h-[75vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4304.340316704703!2d67.03967569242374!3d24.880772875423332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5be8b50e7f%3A0x50067d506017de1d!2sGurumandir%20Chowrangi%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1723920331486!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LocationsPage;
