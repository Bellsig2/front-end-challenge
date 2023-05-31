import { randomString } from "./randomString";

export default class ChatLog {
  constructor() {
    this.channel_id = null;
    this.client_msg_id = null;
    this.type = null;
    this.text = null;
    this.user = null;
    this.ts = null;
    this.user_profile = null;
  }

  get _channel_id() {
    return this.channel_id; // 수정: 올바른 속성으로 접근
  }

  set _channel_id(value) {
    this.channel_id = value; // 수정: 올바른 속성에 값을 할당
  }

  get _client_msg_id() {
    return this.client_msg_id; // 수정: 올바른 속성으로 접근
  }

  set _client_msg_id({ min, max }) {
    this.client_msg_id = randomString(min, max); // 수정: 올바른 속성에 값을 할당
  }

  get _type() {
    return this.type;
  }

  set _type(type) {
    this.type = type;
  }

  get _text() {
    return this._text;
  }

  set _text(text) {
    this.text = text;
  }

  get _user() {
    return this.user;
  }

  set _user(user) {
    this.user = user;
  }

  get _ts() {
    return this.ts;
  }

  set _ts(ts) {
    this.ts = Math.floor(+new Date() / 1000);
  }

  get _user_profile() {
    return this.user_profile;
  }

  set _user_profile(userProfile) {
    this.user_profile = userProfile;
  }
}
