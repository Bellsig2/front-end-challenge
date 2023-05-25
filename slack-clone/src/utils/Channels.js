import { randomString } from "./randomString";

export default class Channel {
  constructor(id, name, created, creator, members, purpose) {
    this.id = id;
    this.name = name;
    this.created = created;
    this.creator = creator;
    this.members = members;
    this.purpose = purpose;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = randomString(1, 11);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get created() {
    return this._created;
  }
  set created(created) {
    this._created = new Date().getTime();
  }

  get members() {
    return this._members;
  }

  set members(members) {
    this._members = members;
  }

  get purpose() {
    return this._purpose;
  }

  set purpose(purpose) {
    this._purpose = purpose;
  }
}
