import style from "./Message.module.scss";
import classnames from "classnames/bind";
import ChatLog from "../../utils/ChatLog";
import UseInput from "../hook/UseInput";
const cn = classnames.bind(style);

export default function Message({ onSubmit, onInput, message }) {
  return (
    <div className={cn("message")}>
      <div>
        <textarea
          value={message}
          onChange={(e) => {
            if (onInput) {
              onInput(e);
            }
          }}
          className={cn("messageInput")}></textarea>
        <button
          onClick={(e) => {
            onSubmit(e);
          }}
          className={cn("submit")}>
          전송
        </button>
      </div>
    </div>
  );
}
