import style from "./View.module.scss";
import classnames from "classnames/bind";
import ChatBox from "../chatbox/ChatBox";
import Message from "../message/Message";

const cn = classnames.bind(style);

export default function View({ channel, chatLog }) {
  return (
    <div className={cn("view")}>
      <div className={cn("header")}>{channel.name}</div>
      <div className={cn("body")}>
        {chatLog.map((chatLog) => (
          <ChatBox chatLog={chatLog} />
        ))}
      </div>
      <div className={cn("footer")}>
        <Message />
      </div>
    </div>
  );
}
