import style from "./Message.module.scss";
import classnames from "classnames/bind";

const cn = classnames.bind(style);
export default function Message() {
  return (
    <div className={cn("message")}>
      <textarea className={cn("messageInput")}></textarea>
    </div>
  );
}
