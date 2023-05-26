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

  get _id() {
    return this.id;
  }

  set _id({ min, max }) {
    this.id = randomString(min, max);
  }

  get _name() {
    return this.name;
  }

  set _name(name) {
    this.name = name;
  }

  get _created() {
    return this.created;
  }
  set _created(created) {
    this.created = new Date().getTime();
  }

  get _members() {
    return this.members;
  }

  set _members(members) {
    this.members = members;
  }

  get _purpose() {
    return this.purpose;
  }

  set _purpose(purpose) {
    this.purpose = purpose;
  }
}
