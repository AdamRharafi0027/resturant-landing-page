
import Image from "next/image";
import Link from "next/link";
const Cards = ({id, name, image, description, price}) => {
  return (
    <>
        <div
            key={id}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 hover:border-amber-400/40 transition duration-300"
          >
            {/* Image */}
            <div className="flex justify-center mb-4">
              <Image
                src={image}
                alt={name}
                className="  w-50 h-40 object-contain"
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400">
                {name}
              </h3>

              <p className="text-gray-300 mt-3 text-sm sm:text-base">
                {description}
              </p>

              {/* Price + Button */}
              <div className="mt-6 flex justify-around items-center gap-3">
                <span className="text-lg sm:text-xl font-bold">
                  {price}
                </span>

                <Link href="#orders">
                  <button className="cursor-pointer bg-amber-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-500 transition">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
    </>
  )
}

export default Cards