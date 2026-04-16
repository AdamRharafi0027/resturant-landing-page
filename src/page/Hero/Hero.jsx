import Image from "next/image";
import background from "../../../public/images/back.jpg";
import button from "../../../public/images/button.png";
import burger from "../../../public/images/pack1.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen text-white flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <Image
        src={background}
        alt="Background"
        fill
        priority
        className="object-cover -z-20"
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10">
        
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Taste the Real <span className="text-yellow-400">Burger</span> Experience
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
            Fresh ingredients, bold flavors, and fast delivery right to your door.
          </p>

          {/* CTA Button */}
          <Link href="#menu" className="inline-block mt-6 relative group">
            <Image
              src={button}
              alt="Order Button"
              className="w-40 sm:w-48 md:w-56 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold">
              Order Now
            </span>
          </Link>
        </div>

        {/* Image Content */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={burger}
            alt="Burger"
            width={500}
            height={500}
            className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;