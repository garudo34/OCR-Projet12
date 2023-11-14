export default class SessionModel {
  constructor(data) {
    this._userId = data.userId
    this._sessions = data.sessions
  }

  get userId() {
    return this._userId
  }

  get sessions() {
    return this._sessions
  }
}
