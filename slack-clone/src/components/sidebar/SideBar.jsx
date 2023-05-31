import style from "./SideBar.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";
import { Link, useNavigate, Routes } from "react-router-dom";
import Modal from "../modal/Modal";
const cn = classnames.bind(style);

export default function SideBar({
  channels,
  setChannels,
  chatLog,
  setChatLog,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const deleteChannel = (channelId) => {
    let channelsTmp = [...channels];
    for (let i = 0; i < channels.length; i++) {
      if (channels[i].id === channelId) {
        channelsTmp.splice(i, 1);
      }
    }
    navigate("/");
    setChannels(channelsTmp);
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
              <Link
                to={`/channels/${channel.id}`}
                key={channel.id}
                className={cn("channelName", "item")}
              >
                <div className={cn("channelNameInner")}>
                  <div>
                    <span className={cn("icon")}>#</span>
                    <span className={cn("name")}>{channel.name}</span>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        deleteChannel(channel.id);
                      }}
                      className={cn("button")}
                    >
                      삭제
                    </button>
                  </div>
                </div>
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
          setChatLog={setChatLog}
        ></Modal>
      ) : (
        ""
      )}
    </div>
  );
}
