import style from "./App.module.scss";
import classnames from "classnames/bind";

const cn = classnames.bind(style);

export default function SideBar() {
  return (
    <div className={cn("sidebar")}>
      <div className={cn("workSpace")}>
        <div className={cn("header")}>
          <div className={cn("teamName")}>clone-slack</div>
          <div className={cn("icon-message")}></div>
        </div>
        <div className={cn("list")}>
          <div className={cn("wrapper")}>
            <div className={cn("channelName", "item")}>
              <span className={cn("icon")}>#</span>
              <span className={cn("")}>랜덤</span>
            </div>
            <div className={cn("channelName", "item")}>
              <span className={cn("icon")}>#</span>
              <span className={cn("")}>랜덤</span>
            </div>
            <div className={cn("channelName", "item")}>
              <span className={cn("icon")}>#</span>
              <span className={cn("")}>랜덤</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
