import style from "./ChatBox.module.scss";
import classnames from "classnames/bind";

const cn = classnames.bind(style);

export default function ChatBox({ chatLog, channel, setChatLog }) {
  const deleteChannel = (channelId) => {
    let chatLogTmp = chatLog;
    for (let i = 0; i < chatLogTmp.length; i++) {
      if (
        chatLogTmp[i].channel_id === channelId &&
        chatLogTmp[i].client_msg_id === chatLogTmp.client_msg_id
      ) {
        chatLogTmp.splice(i, 1);
      }
    }
    setChatLog(chatLogTmp);
  };
  return (
    <div>
      <div className={cn("chatboxWrapper")}>
        <div className={cn("chatbox")}>
          <div className={cn("avatar")}>
            <img src={chatLog.user_profile.image_72}></img>
          </div>
          {chatLog.text !== undefined ? (
            <div className={cn("")}>
              <div className={cn("userWrapper")}>
                <div className={cn("userName")}>
                  {chatLog.user_profile.real_name}
                </div>
                <span className={cn("timeStamp")}>오후 3:39</span>
                <button className={cn("button")}>수정</button>
                <button
                  className={cn("button")}
                  onClick={() => {
                    deleteChannel(channel.id);
                  }}
                >
                  삭제
                </button>
              </div>
              <span className={cn("contents")}>{chatLog.text}</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
