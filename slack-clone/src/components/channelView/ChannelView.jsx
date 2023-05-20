import { useParams } from "react-router";
import View from "../view/View";

export default function ChannelView({ channels }) {
  const { channelID } = useParams(); // Get the channel ID from the URL

  const channel = channels.find((channel) => channel.id === channelID); // Find the channel object based on the ID

  <View channel={channel} />;
}
