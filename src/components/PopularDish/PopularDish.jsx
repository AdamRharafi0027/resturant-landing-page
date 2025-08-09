import Image from "next/image";
import tacos from "../../../public/images/tacos.png";
import shawarma from "../../../public/images/shawarma.png";
import burger1 from "../../../public/images/burger1-rm.png";
import Link from "next/link";

const dishes = [
  {
    id: 1,
    name: "Classic Beef Burger",
    description: "Juicy grilled beef patty with fresh lettuce, tomato, and cheese.",
    price: "80.99 DH",
    image: tacos,
  },
  {
    id: 2,
    name: "Crispy Chicken Burger",
    description: "Golden fried chicken breast with creamy mayo and pickles.",
    price: "70.49 DH",
    image: shawarma,
  },
  {
    id: 3,
    name: "Veggie Delight",
    description: "Grilled veggie patty with avocado and special sauce.",
    price: "60.99 DH",
    image: burger1,
  },
];

const PopularDishes = () => {
  return (
    <section id="popular" className="-mt-23 md:-mt-13 py-20 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400">Popular Dishes</h2>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          Our customers' all-time favorites – fresh, tasty, and irresistible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src={dish.image}
              alt={dish.name}
              className="w-full h-60 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-amber-400">{dish.name}</h3>
              <p className="text-gray-300 mt-2">{dish.description}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-xl font-bold">{dish.price}</span>
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

export default PopularDishes;
