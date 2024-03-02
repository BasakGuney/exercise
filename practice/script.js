const fs = require("fs");
const express = require("express");
const yaml = require("js-yaml");
const ejs = require("ejs");
var path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// express app
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + "/uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const uploads = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const path = "./" + req.body.ref + ".yaml";

  const arr = req.body.itemArr;
  let obj1 = yaml.load(fs.readFileSync(path, "utf-8"));
  let obj2 = yaml.load(fs.readFileSync(path, "utf-8"));
  arr.map((item) => {
    if (Array.isArray(obj2)) {
      obj2 = obj2[item];
    } else if (typeof obj2 == "object") {
      obj2 = obj2[item];
    } else {
    }
  });
  res.send({ response: obj1, response2: obj2 });
});

app.listen(5000);
