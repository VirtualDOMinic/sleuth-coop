const { checkPassword } = require("./database/queries/index");

exports.post = (req, res) => {
  checkPassword(req.body)
    .then(resolve => {
      if (resolve) {
        req.session.loggedIn = true;
        req.session.profileId = resolve;
        res.send(JSON.stringify(resolve));
      } else {
        res.status(500).send(JSON.stringify("password error"));
      }
    })
    .catch(e => {
      if (e === "user not found") {
        res.status(500).send(JSON.stringify("Email not found"));
      } else if (e === "password doesn't match") {
        res.status(500).send(JSON.stringify("Password doesn't match"));
      }
    });
};
