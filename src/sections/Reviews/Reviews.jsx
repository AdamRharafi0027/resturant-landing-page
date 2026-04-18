"use client"
import { motion } from "motion/react";
import reviewsData from "@/data/reviewsData";

const Reviews = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section className="py-24 bg-gray-900 text-white">
      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400">
          Customer Reviews
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
          See what our satisfied customers have to say about their dining experience.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reviewsData.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Avatar and Name */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-400 text-black rounded-full flex items-center justify-center font-bold text-lg mr-4">
                {getInitials(review.name)}
              </div>
              <div>
                <h3 className="font-semibold text-white">{review.name}</h3>
                <p className="text-gray-400 text-sm">{review.date}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex mb-3">
              {renderStars(review.rating)}
            </div>

            {/* Comment */}
            <p className="text-gray-300 leading-relaxed">
              "{review.comment}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;