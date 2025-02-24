import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavegationMenu } from "./components/pages/NavegationMenu";
import { Pedidos } from "./components/pages/Pedidos";
import { Notes } from "./components/pages/Notes";
import { Boletos } from "./components/pages/Boletos";
import { ProfileUser } from "./components/ProfileUsers";
import Logo from "@/assets/logo.png";



export function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar fixa à esquerda - Será escondida em telas pequenas e aparecerá em telas maiores */}
        <div className="hidden md:block p-7 w-54">
          {/* Componente Sidebar do Shadcn */}
          <NavegationMenu />
        </div>

        {/* Área de conteúdo principal */}
        <div className="flex-1 flex flex-col">
          <header className="p-4 bg-blue-950 items-center">
            <div className="flex justify-between items-center gap-4">
              <img
                src={Logo}
                alt="Logo PolarFix"
                className="mobile:h-9 md:hidden"
              />
              <ProfileUser />
            </div>
            <div className="sm:mt-5 mobile:mt-5 sm:hidden">
              <hr />
            </div>
          </header>

          {/* Conteúdo das rotas */}
          <div className="flex-1 overflow-auto p-4">
            <Routes>
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/notas-fiscais" element={<Notes />} />
              <Route path="/boletos" element={<Boletos />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
