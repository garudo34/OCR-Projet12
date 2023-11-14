export default class ActivityModel {
  constructor(data) {
    this._userId = data.userId
    this._sessions = data.sessions
  }

  get userId() {
    return this._userId
  }

  get sessions() {
    if (!this._sessions) return null
    this._sessions.forEach((item, index) => {
      item.day = new Date()
      item.day.setDate(item.day.getDate() - index)

      const options = {
        month: '2-digit',
        day: '2-digit',
      }

      item.day = new Intl.DateTimeFormat('fr', options).format(item.day)
    })

    return this._sessions.reverse()
  }
}
