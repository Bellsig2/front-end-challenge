import style from "./Message.module.scss";
import classnames from "classnames/bind";
import ChatLog from "../../utils/ChatLog";
import UseInput from "../hook/UseInput";
const cn = classnames.bind(style);

function extractProperties(instance) {
  const properties = {};
  for (let key in instance) {
    if (instance.hasOwnProperty(key)) {
      properties[key] = instance[key];
    }
  }

  return properties;
}

export default function Message({ setChatLog, chatLog, channel }) {
  const [message, setMessage] = UseInput();
  const submitMessage = () => {
    let newMessage = new ChatLog();
    newMessage.channel_id = channel.id;
    newMessage.ts = "";
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
  return (
    <div className={cn("message")}>
      <div>
        <textarea
          onChange={(e) => {
            setMessage(e);
          }}
          className={cn("messageInput")}
        ></textarea>
        <button onClick={submitMessage} className={cn("submit")}>
          전송
        </button>
      </div>
    </div>
  );
}
