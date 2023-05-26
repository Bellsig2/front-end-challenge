import { useParams } from "react-router";
import View from "../view/View";
import { useEffect, useState } from "react";

export default function ChannelView({ channels, chatLog, setChatLog, key }) {
  const { channelID } = useParams();
  const channel = channels.find((channel) => channel.id === channelID);

  useEffect(() => {
    if (chatLog.length === 0) {
      console.log(chatLog.length);
      fetch(`/chatLog2.json`)
        .then((response) => response.json())
        .then((data) => {
          const chatLogs = data.filter((chatLog) => channelID === chatLog.channel_id);
          setChatLog([...data, chatLogs]);
        });
    }
  }, [channelID]);
  return (
    <>
      <View channel={channel} chatLog={chatLog} setChatLog={setChatLog} />
    </>
  );
}
