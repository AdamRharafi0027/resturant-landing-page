import Image from "next/image";
import background from "../../../public/images/back.jpg";
import button from "../../../public/images/button.png";
import hero from "../../../public/images/hero-rm.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-white">
      <Image
        src={background}
        alt="Background"
        className="w-full h-screen object-cover absolute top-0 left-0 -z-10"
        priority
      />

      <main className="w-full h-screen flex flex-col md:flex-row items-center justify-center md:justify-around px-6 text-center md:text-left md:-mt-30">
        
        <aside className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Taste the Real Burger Experience
          </h1>
          <h4 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl my-6 md:my-12">
            Fresh ingredients, bold flavors, and fast delivery right to your door
          </h4>
          

          <Link href={"#menu"} className="relative inline-block">
            <Image
              src={button}
              alt="Order Button"
              className="w-40 sm:w-52 md:w-94"
            />
            <span className="cursor-pointer absolute inset-0 flex items-center justify-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              Order Now
            </span>
          </Link>
        </aside>

        <aside className="mt-8 md:mt-0">
          <Image 
            src={hero}
            alt="Burger"
            width={350}
            height={350}
            className="w-60 sm:w-72 md:w-[450px] lg:w-[500px]"
          />
        </aside>
      </main>
    </section>
  );
};

export default Hero;
