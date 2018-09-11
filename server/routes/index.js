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
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
  next();
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
  return  res.end();
});
module.exports = router;
