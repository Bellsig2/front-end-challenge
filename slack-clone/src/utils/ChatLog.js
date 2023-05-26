import { randomString } from "./randomString";
export default class ChatLog {
  constructor(channelId, clientMsgId, type, text, user, ts, userProfile) {
    this.channelId = channelId;
    this.clientMsgId = clientMsgId;
    this.type = type;
    this.text = text;
    this.user = user;
    this.ts = ts;
    this.user_profile = userProfile;
  }

  get channelId() {
    return this._channelId;
  }

  set channelId(channelId) {
    this._channelId = channelId;
  }

  get clientMsgId() {
    return this._clientMsgId;
  }

  set clientMsgId(clientMsgId) {
    this._clientMsgId = randomString(1, 11);
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }

  get user() {
    return this._user;
  }

  set user(user) {
    this._user = user;
  }

  get ts() {
    return this._ts;
  }

  set ts(ts) {
    this._ts = new Date().getTime();
  }

  get user_profile() {
    return this._user_profile;
  }

  set user_profile(userProfile) {
    this._user_profile = userProfile;
  }
}
