import { useParams } from "react-router";
import View from "../view/View";
import { useEffect, useState } from "react";

export default function ChannelView({ channels }) {
  const { channelID } = useParams();
  const [chatLog, setChatLog] = useState([]);
  const channel = channels.find((channel) => channel.id === channelID);

  useEffect(() => {
    fetch(`/${channelID}.json`)
      .then((response) => response.json())
      .then((data) => {
        setChatLog(data);
      });
  }, [channelID]);
  return (
    <>
      <View channel={channel} chatLog={chatLog} />
    </>
  );
}
