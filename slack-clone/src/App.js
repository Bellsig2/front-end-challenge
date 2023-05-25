import { useEffect, useState } from "react";
import style from "./App.module.scss";
import classnames from "classnames/bind";
import SideBar from "./components/sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import ChannelView from "./components/channelView/ChannelView";
import Nav from "./components/nav/Nav";

const cn = classnames.bind(style);

function App() {
  const [channels, setChannels] = useState([]);
  const [chatLog, setChatLog] = useState([]);

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
        <SideBar
          channels={channels}
          setChannels={setChannels}
          chatLog={chatLog}
          setChatLog={setChatLog}
        ></SideBar>
        <Routes>
          <Route
            path="/channels/:channelID"
            element={
              <ChannelView
                channels={channels}
                chatLog={chatLog}
                setChatLog={setChatLog}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
