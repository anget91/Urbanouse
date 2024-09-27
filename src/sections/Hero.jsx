import { ChevronDown, Search } from "lucide-react";
import HouseImg from "../assets/house-hero.jpg";


export function Hero() {
  return (
    <section className="px-10">
      <div className="w-full text-white relative"> {/* Añadido 'relative' aquí */}
        <img
          src={HouseImg}
          alt=""
          className="rounded-tl-[50px] md:rounded-tl-[100px] md:rounded-br-[100px] h-[600px] w-full brightness-50"
        />

        <div className="absolute inset-0 px-[10%] md:px-[20%] flex flex-col items-center md:justify-center mt-20 md:mt-0  gap-4"> 
          <h1 className="drop-shadow-2xl font-medium text-2xl md:text-5xl text-center">
            Find Your Dream Home <br /> With Urbanouse
          </h1>
          <span className="drop-shadow-2xl text-center">
            Experience luxury and comfort with our exclusive real estate
            listings. Whether you're searching for a modern apartment, a
            spacious villa, or a commercial space, Urbanouse has the perfect
            property for you.
          </span>
        </div>
        <div className="relative grid grid-cols-2 md:flex gap-10 bg-white py-4 px-9 w-full md:w-fit left-0 right-0 mx-auto md:rounded-full -top-4 shadow-xl flex-wrap rounded-br-[50px]">
          <div className="flex flex-col">
            <span className="text-black/60">Buy/Rent</span>
            <div className="flex gap-2 items-center text-primary">
              <span className=" font-medium">Buy</span>
              <ChevronDown  size={20} strokeWidth={2} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-black/60">Location</span>
            <div className="flex gap-2 items-center">
              <span className="text-black font-medium">London</span>
              <ChevronDown color="black" size={20} strokeWidth={2} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-black/60">Property Type</span>
            <div className="flex gap-2 items-center">
              <span className="text-black font-medium">Family House</span>
              <ChevronDown color="black" size={20} strokeWidth={2} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-black/60">Bedrooms</span>
            <div className="flex gap-2 items-center">
              <span className="text-black font-medium">3 bedrooms</span>
              <ChevronDown color="black" size={20} strokeWidth={2} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-black/60">Budget</span>
            <div className="flex gap-2 items-center">
              <span className="text-black font-medium">$500,000</span>
              <ChevronDown color="black" size={20} strokeWidth={2} />
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-black p-2 rounded-full">
              <Search color="white" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
