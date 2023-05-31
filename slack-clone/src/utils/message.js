export const editMessage = (
  messages,
  setMessages,
  client_msg_id,
  text,
  callback
) => {
  const TMP_message = [...messages];
  for (const message of TMP_message) {
    if (message.client_msg_id === client_msg_id) {
      message.text = text;
      setMessages(TMP_message);
      callback();
    }
  }
};
export const deleteMessage = (chatLog, log, setChatLog, channelId) => {
  let chatLogTmp = chatLog;

  for (let i = 0; i < chatLogTmp.length; i++) {
    if (
      chatLogTmp[i].channel_id === channelId &&
      chatLogTmp[i].client_msg_id === log.client_msg_id
    ) {
      chatLogTmp.splice(i, 1);
    }
  }
  setChatLog([...chatLogTmp]);
};
