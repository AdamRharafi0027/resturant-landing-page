"use client"
import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";
import specialDealsData from "@/data/specialDealsData";

const SpecialDeals = () => {
  return (
    <section className="py-20 bg-gray-800 text-white" id="special-deals">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400">
          🔥 Special Deals
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Grab our best offers and enjoy more for less!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {specialDealsData.map((deal) => (
          <motion.div
          key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: deal.id * 0.1 }}
            
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <div className="flex justify-center mb-4">
              <Image
              src={deal.image}
              alt={deal.title}
              className="w-50 h-60 object-contain"
            />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-amber-400">
                {deal.title}
              </h3>
              <p className="text-gray-300 mt-2">{deal.description}</p>
              <div className="flex justify-between items-center mt-6">
                <div>
                  <span className="line-through text-gray-400 text-lg mr-2">
                    {deal.oldPrice}
                  </span>
                  <span className="text-2xl font-bold text-green-400">
                    {deal.newPrice}
                  </span>
                </div>
                <Link href="#orders">
                  <button className="cursor-pointer bg-amber-400 hover:bg-amber-500 text-black py-2 px-4 rounded-lg font-semibold transition">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialDeals;
