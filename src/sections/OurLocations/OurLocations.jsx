"use client"
import { motion } from "motion/react";
import locationsData from "../../data/locationsData";

const OurLocations = () => {
  return (
    <section id="locations" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-amber-400 text-center mb-10">
          Our Locations
        </h2>
        <p className="text-center text-gray-300 mb-16">
          Find us at convenient spots near you!
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {locationsData.map((loc) => (
            <motion.div
            key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: loc.id * 0.1 }}
              className="cursor-pointer bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-amber-400 transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-amber-400">
                {loc.name}
              </h3>
              <p className="text-gray-300 mb-3">{loc.address}</p>
              <p className="font-semibold">📞 {loc.phone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLocations;
