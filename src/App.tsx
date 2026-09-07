import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { ALL_NAV_ITEMS } from "./constants";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const currentItem = ALL_NAV_ITEMS.find((item) => item.path === pathname);

  return (
    <div className="flex h-dvh bg-page">
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          title={currentItem?.label ?? ""}
          onOpenMenu={() => setIsMenuOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 pb-8 lg:p-6 lg:pb-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />

            {ALL_NAV_ITEMS.filter((item) => item.path !== "/").map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={<Placeholder title={item.label} />}
              />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
