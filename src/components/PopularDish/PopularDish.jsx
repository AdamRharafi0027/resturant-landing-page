
import tacos from "../../../public/images/tacos.png";
import shawarma from "../../../public/images/shawarma.png";
import burger1 from "../../../public/images/burger1-rm.png";
import burger2 from "../../../public/images/burger.png"
import Cards from "../Cards/Cards";

const dishes = [
  {
    id: 1,
    name: "Classic Beef Burger",
    description:
      "Juicy grilled beef patty with fresh lettuce, tomato, and cheese.",
    price: "80.99 DH",
    image: burger2,
  },
  {
    id: 2,
    name: "Crispy Chicken Burger",
    description:
      "Golden fried chicken breast with creamy mayo and pickles.",
    price: "70.49 DH",
    image: shawarma,
  },
  {
    id: 3,
    name: "Veggie Delight",
    description:
      "Grilled veggie patty with avocado and special sauce.",
    price: "60.99 DH",
    image: burger1,
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