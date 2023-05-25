export class ChatLog {
  constructor(channelId, clientMsgId, type, text, user, ts, userProfile) {
    this._channelId = channelId;
    this._clientMsgId = clientMsgId;
    this._type = type;
    this._text = text;
    this._user = user;
    this._ts = ts;
    this._userProfile = userProfile;
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
    this._clientMsgId = clientMsgId;
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

  get userProfile() {
    return this._userProfile;
  }

  set userProfile(userProfile) {
    this._userProfile = userProfile;
  }
}
