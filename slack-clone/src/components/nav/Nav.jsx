import style from "./Nav.module.scss";
import classnames from "classnames/bind";

const cn = classnames.bind(style);

export default function Nav() {
  return <div className={cn("nav")}></div>;
}
