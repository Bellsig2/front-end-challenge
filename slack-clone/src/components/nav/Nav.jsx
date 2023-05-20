import style from "./Nav.module.scss";
import classnames from "classnames/bind";

const cn = classnames.bind(style);

export default function Nav() {
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
