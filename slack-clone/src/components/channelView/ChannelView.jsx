import { useParams } from "react-router";
import View from "../view/View";
import { useEffect, useState } from "react";

export default function ChannelView({ channels, chatLog, setChatLog }) {
  const { channelID } = useParams();
  const channel = channels.find((channel) => channel.id === channelID);

  useEffect(() => {
    fetch(`/chatLog2.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const chatLogs = data.filter(
          (chatLog) => channelID === chatLog.channel_id
        );

        setChatLog(chatLogs);
      });
  }, [channelID]);
  return (
    <>
      <View channel={channel} chatLog={chatLog} />
    </>
  );
}
