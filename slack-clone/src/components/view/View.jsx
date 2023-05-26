import style from "./View.module.scss";
import classnames from "classnames/bind";
import ChatBox from "../chatbox/ChatBox";
import Message from "../message/Message";

const cn = classnames.bind(style);

export default function View({ channel, chatLog, setChatLog }) {
  const ChatList = chatLog
    .filter((chatLog) => channel.id === chatLog.channel_id)
    .map((chatLog) => {
      return <ChatBox key={chatLog.client_msg_id} chatLog={chatLog} />;
    });

  return (
    <div className={cn("view")}>
      <div className={cn("header")}>{channel.name}</div>
      <div className={cn("body")}>{ChatList}</div>
      <div className={cn("footer")}>
        <Message setChatLog={setChatLog} chatLog={chatLog} channel={channel} />
      </div>
    </div>
  );
}
