import { useState } from "react";
import style from "./ChatBox.module.scss";
import classnames from "classnames/bind";
import Message from "../message/Message";
import UseInput from "../../hook/UseInput";
import { timestampToDate } from "../../utils/date";

import { editMessage, deleteMessage } from "../../utils/message";
const cn = classnames.bind(style);

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
              <span className={cn("timeStamp")}>{timestampToDate(log.ts)}</span>
              <button
                className={cn("button")}
                onClick={() => setEditMode(true)}
              >
                수정
              </button>
              <button
                className={cn("button")}
                onClick={() => {
                  deleteMessage(chatLog, log, setChatLog, channel.id);
                }}
              >
                삭제
              </button>
            </div>
            <span className={cn("contents")}>{message}</span>
          </div>
        ) : (
          <Message
            onSubmit={(e) => {
              editMessage(
                chatLog,
                setChatLog,
                log.client_msg_id,
                message,
                () => {
                  setEditMode(false);
                }
              );
            }}
            onInput={setMessage}
            message={message}
          ></Message>
        )}
      </div>
    </div>
  );
}
