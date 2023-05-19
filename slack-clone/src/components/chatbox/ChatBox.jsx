import style from "./App.module.scss";
import classnames from "classnames/bind";

const cn = classnames.bind(style);

export default function ChatBox() {
  return (
    <div className={cn("chatboxWrapper")}>
      <div className={cn("chatbox")}>
        <div className={cn("avatar")}>
          <img src="https://ca.slack-edge.com/T05783L0872-U056FE737U5-2683da3d60f6-48"></img>
        </div>
        <div className={cn("")}>
          <div className={cn("userWrapper")}>
            <div className={cn("userName")}>강동욱욱자</div>
            <span className={cn("timeStamp")}>오후 3:39</span>
          </div>
          <span className={cn("contents")}>
            이것은 나머지 모든 것을 위한 채널입니다. 팀원들이 농담하거나 순간적인 아이디어나 재미있는 GIF를 공유하는
            곳이죠! 마음껏 즐기세요!
          </span>
        </div>
      </div>
    </div>
  );
}
