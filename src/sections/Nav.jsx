import UrbanouseIcon  from "../assets/urbanouse.svg";

export function Nav() {
  return (
    <header className=" flex justify-between px-10 py-7 items-center">
      <a href="" className="flex items-center gap-2">
      <img src={UrbanouseIcon} alt="Urbanouse logo"width={30} height={30} />
      <strong className="text-2xl flex" >  Urbanouse  </strong>
      </a>
     
      <nav className=" hidden lg:flex gap-6 text-black/50 font-medium ">
        <a href="" className="text-black">
          Home
        </a>
        <a href="" className="hover:text-black">
          About Us
        </a>
        <a href="" className="hover:text-black">
          Agents
        </a>
        <a href="" className="hover:text-black">
          Collection
        </a>
        <a href="" className="hover:text-black">
          Building
        </a>
        <a href="" className="hover:text-black">
          Services
        </a>
      </nav>
      <button className="px-5 py-3 bg-primary text-white rounded-full">
        Contact Us
      </button>
    </header>
  );
}
