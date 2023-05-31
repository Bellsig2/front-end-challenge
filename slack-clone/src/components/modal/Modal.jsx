import classNames from "classnames/bind";
import style from "./Modal.module.scss";
import { useEffect, useState } from "react";
import Channel from "../../utils/Channels";
import ChatLog from "../../utils/ChatLog";
import UseInput from "../../hook/UseInput";

const cn = classNames.bind(style);
function extractProperties(instance) {
  const properties = {};
  for (let key in instance) {
    if (instance.hasOwnProperty(key)) {
      properties[key] = instance[key];
    }
  }

  return properties;
}

export default function Modal({
  handleModalClose,
  setChannels,
  channels,
  chatLog,
  setChatLog,
}) {
  const [channelName, setChannelName] = useState();
  const onKey = (e) => {
    let value = e.target.value;
    setChannelName(value);
  };

  // 채널 추가하는 부분 리엑트 훅으로 수정 해볼 것
  const addChannel = (channelName) => {
    // 채널 클래스  생성
    let newChannel = new Channel();
    // 채팅 로그 클래스 생성
    let newChatLog = new ChatLog();
    // 채널 데이터 세팅
    newChannel._id = { min: 1, max: 11 };
    newChannel.name = channelName;
    newChannel.created = "";
    newChannel.member = ["강동욱동강"];
    newChannel.purpose = {
      value: "이것은 나머지 모든 것을 위한 채널입니다.",
      creator: "강동욱동강",
    };
    const extractedProperties = extractProperties(newChannel);
    setChannels([...channels, extractedProperties]);
    handleModalClose();
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
            <button
              onClick={() => {
                addChannel(channelName);
              }}
            >
              다음
            </button>
          </div>
        </div>
        <span className={cn("modalClose")} onClick={handleModalClose}>
          닫기
        </span>
      </div>
    </div>
  );
}
