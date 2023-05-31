import { useEffect, useState } from "react";
import style from "./App.module.scss";
import classnames from "classnames/bind";
import SideBar from "./components/sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import ChannelView from "./components/channelView/ChannelView";
import Nav from "./components/nav/Nav";
const cn = classnames.bind(style);

const fetchChannels = async () => {
  const response = await fetch("/channels.json");
  const data = await response.json();
  return data;
};

const fetchChatLog = async () => {
  const response = await fetch("/chatLog2.json");
  const data = await response.json();
  return data;
};

function App() {
  const [channels, setChannels] = useState([]);
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    if (channels.length === 0 && chatLog.length === 0) {
      const fetchData = async () => {
        const channelsData = await fetchChannels();
        const chatLogData = await fetchChatLog();
        setChannels(channelsData);
        setChatLog(chatLogData);
      };
      fetchData();
    }
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
          <Route path="/" element="" />
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
