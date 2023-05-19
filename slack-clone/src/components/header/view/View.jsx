import style from "./App.module.scss";
import classnames from "classnames/bind";
const cn = classnames.bind(style);

export default function View({ header, body, footer }) {
  return (
    <div className={cn("view")}>
      <div className={cn("header")}>{header}</div>
      <div className={cn("body")}>{body}</div>
      <div className={cn("footer")}>{footer}</div>
    </div>
  );
}
