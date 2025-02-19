import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "./components/pages/Menu";
import { SideBar } from "./components/pages/SideBar";
import { Pedidos } from "./components/pages/Pedidos";
import { Notes } from "./components/pages/Notes";
import { Boletos } from "./components/pages/Boletos";

export function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar fixada à esquerda */}
        <SideBar />
        <div className="border-slate-500 border-1"></div>
        <div className="flex-1 flex flex-col"> {/* Esta div vai ocupar o restante do espaço */}
          
          <div className="flex-shrink-0"> {/* O Menu ficará fixo no topo */}
            <Menu />
          </div>
          
          {/* Conteúdo das rotas */}
          <div className="flex-1 overflow-auto">
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
