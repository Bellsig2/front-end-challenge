import { useNavigate, useParams } from "react-router-dom";
import View from "../view/View";
import { useEffect, useRef, useLayoutEffect, useState } from "react";

export default function ChannelView({ channels, chatLog, setChatLog, key }) {
  const { channelID } = useParams();
  const navigate = useNavigate();
  const viewRef = useRef();
  const [isLoad, setIsLoad] = useState(false);
  let [channel, setChannel] = useState(null);
  const loading = () => {
    if (channel === null || !isLoad) {
      const channelTmp = channels.find((channel) => channel.id === channelID);
      setChannel(channelTmp);
      if (!channelTmp) {
        navigate("/");
      }
      setIsLoad(true);
    } else if (channel !== null && isLoad) {
      return null;
    }
  };

  useEffect(() => {
    loading();
  }, [channel]);

  return (
    <>{isLoad === true ? <View ref={viewRef} channel={channel} chatLog={chatLog} setChatLog={setChatLog} /> : ""}</>
  );
}
