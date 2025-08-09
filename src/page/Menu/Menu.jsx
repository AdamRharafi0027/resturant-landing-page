"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import burger1Rm from "../../../public/images/burger1-rm.png"
import pizza1 from "../../../public/images/pizza1.png"
import tacos from "../../../public/images/tacos.png"
import cola from "../../../public/images/cola.png"
import pizza from "../../../public/images/pizza.png"
import burger from "../../../public/images/burger.png"

const menuItems = [
  {
    id: 1,
    category: "Burgers",
    name: "Cheese Burger",
    price: "20.99 DH",
    description: "Grilled beef patty, cheddar cheese, lettuce, tomato.",
    image: burger1Rm,
  },
  {
    id: 2,
    category: "Pizza",
    name: "Margherita Pizza",
    price: "90.99 DH",
    description: "Classic pizza with mozzarella and fresh basil.",
    image: pizza1,
  },
  {
    id: 3,
    category: "Tacos",
    name: "Beef Tacos",
    price: "60.99 DH",
    description: "Soft tortillas filled with seasoned beef and salsa.",
    image: tacos,
  },
  {
    id: 4,
    category: "Drinks",
    name: "Fresh Lemonade",
    price: "39.50 DH",
    description: "Refreshing lemonade with mint.",
    image: cola,
  },
  {
    id: 5,
    category: "Pizza",
    name: "Pepperoni Pizza",
    price: "120.50 DH",
    description: "Loaded with pepperoni and mozzarella cheese.",
    image: pizza,
  },
  {
    id: 6,
    category: "Burgers",
    name: "Chicken Burger",
    price: "79.49 DH",
    description: "Crispy fried chicken breast with mayo.",
    image: burger,
  },
];

const categories = ["All", "Burgers", "Pizza", "Tacos", "Drinks"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");


  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400">
          Our Menu
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          Choose from our delicious categories and order your favorite meal.
        </p>
      </div>

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

      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="w-full h-60 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-amber-400">
                {item.name}
              </h3>
              <p className="text-gray-300 mt-2">{item.description}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-xl font-bold">{item.price}</span>
                <Link href="#orders">
                  <button className="cursor-pointer bg-amber-400 hover:bg-amber-500 text-black py-2 px-4 rounded-lg font-semibold transition">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
