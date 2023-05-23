import style from "./ChatBox.module.scss";
import classnames from "classnames/bind";

const cn = classnames.bind(style);

export default function ChatBox({ chatLog }) {
  console.log(chatLog);
  return (
    <div>
      <div className={cn("chatboxWrapper")}>
        <div className={cn("chatbox")}>
          <div className={cn("avatar")}>
            <img src="https://ca.slack-edge.com/T05783L0872-U056FE737U5-2683da3d60f6-48"></img>
          </div>
          <div className={cn("")}>
            <div className={cn("userWrapper")}>
              <div className={cn("userName")}>
                {chatLog.user_profile.real_name}
              </div>
              <span className={cn("timeStamp")}>오후 3:39</span>
            </div>
            <span className={cn("contents")}>{chatLog.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
