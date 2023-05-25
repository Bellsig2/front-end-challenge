import style from "./Message.module.scss";
import classnames from "classnames/bind";

const cn = classnames.bind(style);
export default function Message() {
  return (
    <div className={cn("message")}>
      <div>
        <textarea className={cn("messageInput")}></textarea>
        <button className={cn("submit")}>전송</button>
      </div>
    </div>
  );
}
