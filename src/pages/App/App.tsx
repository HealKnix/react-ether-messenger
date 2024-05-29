import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import "./App.css";
import { router } from "../../routes";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <SidebarMenu />
        <Routes>
          {router.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
