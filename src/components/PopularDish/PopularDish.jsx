

import Cards from "../Cards/Cards";

import popularDishesData from "@/data/popularDishesData";

const PopularDishes = () => {
  return (
    <section
      id="popular"
      className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400">
          Popular Dishes
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
          Our customers' all-time favorites – fresh, tasty, and irresistible.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {popularDishesData.map((dish) => (
          <Cards
          key={dish.id}
            id={dish.id}
            name={dish.name}
            image={dish.image}
            description={dish.description}
            price={dish.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;