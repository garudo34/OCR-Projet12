export default class PerformanceModel {
  constructor(data) {
    this._userId = data.userId
    this._data = data.data
    this._kind = data.kind
  }

  get userId() {
    return this._userId
  }

  get data() {
    const category = [
      'Cardio',
      'Energie',
      'Endurance',
      'Force',
      'Vitesse',
      'Intensité',
    ]
    if (!this._data) return null
    this._data.forEach((item, index) => {
      item.kind = category[parseInt(item.kind) - 1]
    })

    return this._data
  }

  get kind() {
    return this._kind
  }
}
