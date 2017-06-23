infiniteStream = require("./infinite-stream")

infiniteStream
  .map (v => v.value)
  .subscribe(console.log)

console.log("Next");
