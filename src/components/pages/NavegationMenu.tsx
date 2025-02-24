import { CiBarcode } from "react-icons/ci";
import { GrNotes } from "react-icons/gr";
import { PiSuitcase } from "react-icons/pi";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.png";

interface NavLinkPros {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

export function NavegationMenu() {
  function NavLink({ to, icon, label, active }: NavLinkPros) {
    return (
      <div
        className={`hover:bg-zinc-700 hover:rounded-md p-3 pl-6 ${
          active
            ? "bg-blue-800 text-amber-500"
            : "text-zinc-300 hover:text-amber-500"
        }`}
      >
        <Link to={to} className="flex items-center gap-2 text-xl">
          {icon} {label}
        </Link>
      </div>
    );
  }
  return (
    <div className="flex p-2">
      <nav className="fixed top-0 left-0 w-[220px] h-full bg-blue-950 p-2">
        <div className="p-5 ">
          <img src={Logo} alt="Logo PolarFix" />
        </div>
        <div className="flex flex-col mt-12 text-lg gap-5 text-zinc-300 font-semibold">
          <NavLink
            to="/pedidos"
            icon={<PiSuitcase size={27} />}
            label="Pedidos"
            active={false}
          />
          <NavLink
            to="/notas-fiscais"
            icon={<GrNotes size={23} />}
            label="Notas Fiscais"
            active={false}
          />
          <NavLink
            to="/boletos"
            icon={<CiBarcode size={25} />}
            label="Boletos"
            active={false}
          />
        </div>
      </nav>
    </div>
  );
}
