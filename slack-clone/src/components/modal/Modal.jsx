import classNames from "classnames/bind";
import style from "./Modal.module.scss";
import { useState } from "react";

const cn = classNames.bind(style);

export default function Modal({ onButton }) {
  const [channelName, setChannelName] = useState();
  const onKey = (e) => {
    let value = e.target.value;
    setChannelName(value);
  };

  return (
    <div className={cn("modalOverlay")}>
      <div className={cn("modalPosition")}>
        <div className={cn("modal")}>
          <div className={cn("title")}>Create a channel</div>
          <div className={cn("section")}>
            <div className={cn("content")}>
              <div className={cn("text")}>이름</div>
              <div className={cn("children")}>
                <input
                  placeholder="플랜 예산"
                  onKeyUp={(e) => {
                    onKey(e);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className={cn("footer")}>
            <button>다음</button>
          </div>
        </div>
        <span className={cn("modalClose")}>닫기</span>
      </div>
    </div>
  );
}
