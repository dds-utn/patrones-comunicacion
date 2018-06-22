const Rx = require("rx")

module.exports = {
  infinite: Rx.Observable.interval(500).timeInterval().map(v => v.value),
  limited: Rx.Observable.range(0, 20)
}

