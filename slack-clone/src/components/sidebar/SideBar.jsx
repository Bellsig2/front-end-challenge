import style from "./SideBar.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";
import { Link, useLocation, Routes } from "react-router-dom";
import Modal from "../modal/Modal";
const cn = classnames.bind(style);

export default function SideBar({ channels, setChannels, chatLog, setChatLog }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={cn("sidebar")}>
      <div className={cn("workSpace")}>
        <div className={cn("header")}>
          <div className={cn("teamName")}>clone-slack</div>
          <div className={cn("icon-message")}></div>
        </div>
        <div className={cn("list")}>
          <div className={cn("wrapper")}>
            {channels.map((channel) => (
              <Link to={`/channels/${channel.id}`} key={channel.id} className={cn("channelName", "item")}>
                <span className={cn("icon")}>#</span>
                <span className={cn("")}>{channel.name}</span>
              </Link>
            ))}
          </div>
          <div className={cn("wrapper")}>
            <div onClick={handleModalOpen} className={cn("addChannel", "item")}>
              채널 추가하기
            </div>
          </div>
        </div>
      </div>
      {isModalOpen === true ? (
        <Modal
          handleModalClose={handleModalClose}
          setChannels={setChannels}
          channels={channels}
          chatLog={chatLog}
          setChatLog={setChatLog}></Modal>
      ) : (
        ""
      )}
    </div>
  );
}
