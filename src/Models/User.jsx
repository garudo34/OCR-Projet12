export default class UserModel {
  constructor(data) {
    this._id = data.id
    this._userInfos = data.userInfos
    this._score = data.todayScore ?? data.score
    this._keyData = data.keyData
  }

  get id() {
    return this._id
  }

  get userInfos() {
    return this._userInfos
  }

  get score() {
    return this._score
  }

  get keyData() {
    return this._keyData
  }
}
