import style from "./View.module.scss";
import classnames from "classnames/bind";
import ChatBox from "../chatbox/ChatBox";
import Message from "../message/Message";

const cn = classnames.bind(style);

export default function View({ channel }) {
  return (
    <div className={cn("view")}>
      <div className={cn("header")}>{channel.name}</div>
      <div className={cn("body")}>
        <ChatBox channel={channel} />
      </div>
      <div className={cn("footer")}>
        <Message />
      </div>
    </div>
  );
}
