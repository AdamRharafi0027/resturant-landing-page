import Image from "next/image";
import Link from "next/link";
import pack1 from "../../../public/images/pack1.png"
import SpicyWings from "../../../public/images/SpicyWings.png"
import pizza from "../../../public/images/pizza.png"
const deals = [
  {
    id: 1,
    title: "Double Cheese Burger Combo",
    description: "Get 2 juicy cheese burgers + fries + drink at an amazing price.",
    oldPrice: "15.99 DH",
    newPrice: "10.99 DH",
    image: pack1,
  },
  {
    id: 2,
    title: "Family Pizza Feast",
    description: "2 Large pizzas + 2 drinks + garlic bread for the whole family.",
    oldPrice: "29.99 DH",
    newPrice: "22.50 DH",
    image: pizza,
  },
  {
    id: 3,
    title: "Family Burger Combo",
    description: "2 Burgers + 2 Fries + 2 Drinks",
    oldPrice: "12.00 DH",
    newPrice: "8.50 DH",
    image: SpicyWings,
  },
];

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
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src={deal.image}
              alt={deal.title}
              width={400}
              height={300}
              className="w-full h-60 object-contain"
            />
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialDeals;
