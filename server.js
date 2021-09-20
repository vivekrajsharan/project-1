var express = require("express");
var app = express();

var port = 3001;
app.use(express.static(__dirname + "/"));
app.listen(port);
console.log("server started at :" + port);

app.post("/api/login", function (req, res) {
  var results = [
    {
      title: "javascipt",
      instructor: "vivekrajsharan",
      level: "beginer",
      total_videos: 10,
    },
    {
      title: "javat",
      instructor: "vivekrajsharan",
      level: "beginer",
      total_videos: 12,
    },
    {
      title: "jc++",
      instructor: "vivekrajsharan",
      level: "beginer",
      total_videos: 18,
    },
  ];
  res.json(results);
});
