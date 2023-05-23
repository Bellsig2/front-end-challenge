import { useEffect, useState } from "react";
import style from "./App.module.scss";
import classnames from "classnames/bind";
import SideBar from "./components/sidebar/SideBar";
import { Route, Routes, Link } from "react-router-dom";
import ChannelView from "./components/channelView/ChannelView";
import Nav from "./components/nav/Nav";
import View from "./components/view/View";
import Modal from "./components/modal/Modal";

const cn = classnames.bind(style);

function App() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetch("./channels.json")
      .then((response) => response.json())
      .then((data) => {
        setChannels(data);
      });
  }, []);

  return (
    <div className={cn("App")}>
      <div className={cn("workSpaceLayout")}>
        <Nav></Nav>
        <SideBar channels={channels} setChannels={setChannels}></SideBar>
        <Routes>
          <Route
            path="/channels/:channelID"
            element={<ChannelView channels={channels} />}
          />
        </Routes>
      </div>
      <Modal></Modal>
    </div>
  );
}

export default App;
