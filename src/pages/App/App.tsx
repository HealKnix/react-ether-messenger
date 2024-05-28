import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Messenger from "../Messenger/Messenger";
import Search from "../Search/Search";
import Notifications from "../Notifications/Notifications";
import SavedPosts from "../SavedPosts/SavedPosts";
import "./App.css";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <SidebarMenu />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/saved-posts" element={<SavedPosts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
