import style from "./View.module.scss";
import classnames from "classnames/bind";
import ChatBox from "../chatbox/ChatBox";
import Message from "../message/Message";
import ChatLog from "../../utils/ChatLog";
import UseInput from "../../hook/UseInput";

const cn = classnames.bind(style);
const extractProperties = (instance) => {
  const properties = {};
  for (let key in instance) {
    if (instance.hasOwnProperty(key)) {
      properties[key] = instance[key];
    }
  }

  return properties;
};
const submitMessage = (chatLog, setChatLog, channel, message) => {
  let newMessage = new ChatLog();
  newMessage.channel_id = channel.id;
  newMessage._ts = "";
  newMessage._client_msg_id = { min: 1, max: 11 };
  newMessage.text = message;
  newMessage.user_profile = {
    image_72:
      "https://avatars.slack-edge.com/2023-05-05/5222435575746_2683da3d60f638b43873_72.png",
    real_name: "강동자욱자",
  };
  const extractedProperties = extractProperties(newMessage);
  setChatLog([...chatLog, extractedProperties]);
};

export default function View({ channel, chatLog, setChatLog }) {
  const [message, setMessage] = UseInput();

  return (
    <div className={cn("view")}>
      <div className={cn("header")}>{channel.name}</div>
      <div className={cn("wrapper")}>
        <div className={cn("body")}>
          {chatLog
            .filter((log) => channel.id === log.channel_id)
            .map((log) => (
              <ChatBox
                key={log.client_msg_id}
                chatLog={chatLog}
                log={log}
                setChatLog={setChatLog}
                channel={channel}
              />
            ))}
        </div>
      </div>
      <div className={cn("footer")}>
        <Message
          onSubmit={(e) => {
            submitMessage(chatLog, setChatLog, channel, message);
          }}
          setChatLog={setChatLog}
          onInput={setMessage}
          message={message}
          chatLog={chatLog}
          channel={channel}
        />
      </div>
    </div>
  );
}
