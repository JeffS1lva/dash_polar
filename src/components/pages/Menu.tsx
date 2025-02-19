import { IoSearchOutline } from "react-icons/io5";
import { ProfileUser } from "../ProfileUsers";

export function Menu() {
  return (
    <section className="w-full">
      <header className="p-6 bg-blue-950 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-auto">
          <IoSearchOutline
            className="absolute top-1/2 left-3 transform -translate-y-1/2"
            size={20}
            color="#4F4F4F"
            aria-label="Search Icon"
          />
          <input
            className="border-0 p-1 pl-9 pr-18 bg-slate-300 rounded-sm outline-0 text-lg w-full md:w-64"
            type="text"
            placeholder="Buscar.."
            aria-label="Search Input"
          />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <ProfileUser />
        </div>
      </header>
    </section>
  );
}
