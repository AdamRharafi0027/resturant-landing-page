"use client";
import { useState } from "react";
import Link from "next/link";


import Cards from "@/components/Cards/Cards";

import menuItems from "@/data/menuData";

const categories = ["All", "Burgers", "Pizza", "Tacos", "Drinks"];

const Menu = ({ cardNumber, showFilters = true } = {}) => {
    
  const [activeCategory, setActiveCategory] = useState("All");


  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const displayItems = cardNumber ? filteredItems.slice(0, cardNumber) : filteredItems;

  return (
    <section id="menu" className="py-20 bg-gray-900 text-white text-center pt-40">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400">
          Our Menu
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          Choose from our delicious categories and order your favorite meal.
        </p>
      </div>

      {showFilters && (
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer py-2 px-5 rounded-full text-lg font-semibold transition ${
                activeCategory === cat
                  ? "bg-amber-400 text-black"
                  : "bg-gray-800 hover:bg-amber-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {displayItems.map((item) => (
          <Cards 
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
     
    </section>
  );
};

export default Menu;
