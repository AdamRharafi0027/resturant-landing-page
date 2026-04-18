
import tacos from "../../../public/images/tacos/tacos.png";
import shawarma from "../../../public/images/tacos/shawarma.png";
import burgerclassic from "../../../public/images/burgers/classic burger.png";
import burger2 from "../../../public/images/burgers/burger.png"
import Cards from "../Cards/Cards";

const dishes = [
  {
    id: 1,
    category: "Burgers",
        name: "Chicken Burger",
        price: "38.00 DH",
        description: "Crispy fried chicken breast with mayo.",
        image: burger2,
  },
  {
    id: 2,
    category: "Tacos",
        name: "Shawarma",
        price: "35.00 DH",
        description: "Spiced meat wrapped in flatbread with tahini sauce.",
        image: shawarma,
  },
  {
    id: 3,
    category: "Burgers",
        name: " Classic Burger",
        price: "35.00 DH",
        description: "Grilled beef patty, cheddar cheese, lettuce, tomato.",
        image: burgerclassic,
  },
];

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
        {dishes.map((dish) => (
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