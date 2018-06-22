streams = require("./streams");
  
streams.infinite
  .map (v => v * 2)
  .subscribe(console.log);

console.log("Next");
