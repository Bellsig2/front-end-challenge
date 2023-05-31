import { useState } from "react";
import style from "./ChatBox.module.scss";
import classnames from "classnames/bind";
import Message from "../message/Message";
import UseInput from "../hook/UseInput";

const cn = classnames.bind(style);

const editMessage = (messages, setMessages, client_msg_id, text, callback) => {
  const TMP_message = [...messages];
  for (const message of TMP_message) {
    if (message.client_msg_id === client_msg_id) {
      message.text = text;
      setMessages(TMP_message);
      callback();
    }
  }
};
const deleteChannel = (chatLog, log, setChatLog, channelId) => {
  let chatLogTmp = chatLog;

  for (let i = 0; i < chatLogTmp.length; i++) {
    if (chatLogTmp[i].channel_id === channelId && chatLogTmp[i].client_msg_id === log.client_msg_id) {
      chatLogTmp.splice(i, 1);
    }
  }
  setChatLog([...chatLogTmp]);
};

export default function ChatBox({ log, chatLog, channel, setChatLog }) {
  const [editMode, setEditMode] = useState(false);

  const [message, setMessage] = UseInput(log.text);
  return (
    <div className={cn("chatboxWrapper")}>
      <div className={cn("chatbox")}>
        <div className={cn("avatar")}>
          <img src={log.user_profile.image_72}></img>
        </div>
        {editMode === false ? (
          <div className={cn("")}>
            <div className={cn("userWrapper")}>
              <div className={cn("userName")}>{log.user_profile.real_name}</div>
              <span className={cn("timeStamp")}>오후 3:39</span>
              <button className={cn("button")} onClick={() => setEditMode(true)}>
                수정
              </button>
              <button
                className={cn("button")}
                onClick={() => {
                  deleteChannel(chatLog, log, setChatLog, channel.id);
                }}>
                삭제
              </button>
            </div>
            <span className={cn("contents")}>{message}</span>
          </div>
        ) : (
          <Message
            onSubmit={(e) => {
              editMessage(chatLog, setChatLog, log.client_msg_id, message, () => {
                setEditMode(false);
              });
            }}
            onInput={setMessage}
            message={message}></Message>
        )}
      </div>
    </div>
  );
}
