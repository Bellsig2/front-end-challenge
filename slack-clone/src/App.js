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

function View() {
  return (
    <div className={cn("view")}>
      <div className={cn("header")}>#랜덤</div>
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
          <ul>
            <li># 랜덤</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
