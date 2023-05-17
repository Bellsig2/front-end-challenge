import style from "./App.module.scss";
import classnames from "classnames/bind";

const cn = classnames.bind(style);

function App() {
  return (
    <div className={cn("App")}>
      <Nav></Nav>
      <div className={cn("flex")}>
        <SideBar></SideBar>
        <View></View>
      </div>
    </div>
  );
}

function ChatBox() {
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
            이것은 나머지 모든 것을 위한 채널입니다. 팀원들이 농담하거나
            순간적인 아이디어나 재미있는 GIF를 공유하는 곳이죠! 마음껏 즐기세요!
          </span>
        </div>
      </div>
    </div>
  );
}

function View() {
  return (
    <div className={cn("view")}>
      <div className={cn("header")}>#랜덤</div>
      <ChatBox></ChatBox>
    </div>
  );
}

function Nav() {
  return (
    <div className={cn("nav")}>
      <div className={cn("side", "left")}>왼쪽</div>
      <div className={cn("search")}>
        <button className={cn("search-button")}>검색</button>
      </div>
      <div className={cn("side", "right")}>오른쪽</div>
    </div>
  );
}

function SideBar() {
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

export default App;
