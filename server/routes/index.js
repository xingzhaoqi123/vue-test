var express = require("express");
var router = express.Router();
let msg = [
  {
    username: "张三",
    password: "123"
  },
  {
    username: "李四",
    password: "234"
  }
];

router.get("/getJsonp", (req, res) => {
  res.jsonp({
    data: "一些信息",
    msg: "行兆奇",
    code: "200"
  });
});
router.get("/getMsg", (req, res) => {
  res.json({
    data: "一些信息222",
    msg: "行兆奇222",
    code: 200
  });
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "xzq" });
});
router.post("/login", function(req, res) {
  const { username, password } = req.body;
  let loginsuccess = false;
  msg.forEach(item => {
    if (item.username == username && item.password == password) {
      loginsuccess = true;
    }
    if (loginsuccess) {
      res.json({
        code: 200,
        msg: "登陆成功"
      });
    }
  });
});
module.exports = router;
