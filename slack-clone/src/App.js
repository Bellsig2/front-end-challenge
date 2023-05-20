import { useEffect, useState } from "react";
import style from "./App.module.scss";
import classnames from "classnames/bind";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter as Route, Routes, Link } from "react-router-dom";
import ChannelView from "./components/channelView/ChannelView";

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
        <SideBar channels={channels}></SideBar>
        <Routes>
          <Route
            path="/channels/:channelID"
            element={<ChannelView channels={channels} />}
          />
        </Routes>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className={cn("nav")}>
      <div className={cn("side", "left")}>왼쪽</div>
      <div className={cn("search")}>
        <button className={cn("search-button")}>검색</button>
      </div>
      <div className={cn("side", "right")}>오른쪽</div>
    </div>
  );
}

export default App;
