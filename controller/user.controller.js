var User = require("../models/user.model");

module.exports.index = async function (req, res) {
  var users = await User.find();
  res.render("users/index", {
    users: users,
  });
};

module.exports.search = function (req, res) {
  var q = req.query.q;
  var matchUser = User.find().filter(function (item) {
    return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render("users/index", {
    users: matchUser,
  });
};

module.exports.create = function (req, res) {
  console.log(req.cookies);
  res.render("users/create");
};

module.exports.view = async function (req, res) {
  var id = req.params.id;
  var user = await User.find({ _id: id });
  res.render("users/view", {
    user: user,
  });
};

module.exports.postCreate = function (req, res) {
  User.insert(req.body);
  res.redirect("/users");
};

module.exports.testCookie = function (req, res) {
  res.cookie("user-id", 12345);
  res.send("Hello");
};
