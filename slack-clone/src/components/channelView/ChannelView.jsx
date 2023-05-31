import { useNavigate, useParams } from "react-router-dom";
import View from "../view/View";
import { useEffect } from "react";

export default function ChannelView({ channels, chatLog, setChatLog, key }) {
  const { channelID } = useParams();
  const channel = channels.find((channel) => channel.id === channelID);
  const navigation = useNavigate();
  useEffect(() => {
    if (!channel) {
    }
    return () => {};
  }, [channels]);

  return (
    <>
      <View channel={channel} chatLog={chatLog} setChatLog={setChatLog} />
    </>
  );
}
