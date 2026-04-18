import Menu from "@/app/menu/page";
import Link from "next/link";




const MenuSection = () => {



  

  return (
    <section id="menu" className="py-20 bg-gray-900 text-white text-center pt-0">
      <Menu cardNumber={3} showFilters={false} />
      <br />
       <button className="mt-12 bg-amber-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-amber-500 transition ">
        <Link href="/menu">All Menu</Link>
      </button>
    </section>
  );
};

export default  MenuSection;
