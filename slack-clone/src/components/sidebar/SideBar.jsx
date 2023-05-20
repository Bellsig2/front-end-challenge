import style from "./SideBar.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";
import { Link } from "react-router-dom";

const cn = classnames.bind(style);

export default function SideBar({ channels }) {
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
                <span className={cn("icon")}>#</span>
                <span className={cn("")}>{channel.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
