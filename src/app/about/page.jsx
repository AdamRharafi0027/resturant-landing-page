"use client"
import Link from "next/link";
import { motion } from "motion/react";
import featuresData from "@/data/featuresData";
const About = () => {
  

  return (
    <section className="pt-30 py-20 px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
        initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6}}
        className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
            About Our Restaurant
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Welcome to our culinary haven where taste meets tradition. For years, we've been serving delicious food with passion and dedication.
          </p>
        </motion.div>

        {/* Main Story Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center ">
          <motion.div
          initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}>
            <h3 className="text-3xl font-bold text-amber-400 mb-4">Our Story</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded with a vision to revolutionize the fast-food experience, our restaurant combines speed, quality, and taste. What started as a small dream has grown into a beloved dining destination in the community.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We believe that great food should be accessible, affordable, and always delicious. Our commitment to excellence is reflected in every dish we serve and every customer interaction.
            </p>
            <Link 
              href="#menu"
              className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Menu
            </Link>
          </motion.div>

          
          <motion.div
          initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
          className="relative">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg p-1">
              <div className="bg-gray-900 rounded-lg p-8 text-center">
                <p className="text-5xl mb-4">🍽️</p>
                <p className="text-gray-300 text-lg">
                  "Every meal tells a story. We're honored to be part of your dining moments."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-400 text-center mb-12">Why Choose Us</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature) => (
              <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.id * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <p className="text-5xl mb-4">{feature.icon}</p>
                <h4 className="text-xl font-bold text-amber-400 mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-400/30 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">Our Mission</h3>
          <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto">
            To deliver exceptional food experience by combining traditional recipes with modern techniques, ensuring every customer leaves with a smile and a satisfied appetite. We're committed to sustainability, quality, and building lasting relationships with our community.
          </p>
        </div>

        {/* CTA Section */}
        <motion.div
      
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
        className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-amber-400 mb-6">Ready to Experience Our Flavors?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu"
              className="px-8 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
            >
              View Full Menu
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-3 border-2 border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
  
export default About;
