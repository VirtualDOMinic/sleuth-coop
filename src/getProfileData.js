const { getUserProfileData } = require("./database/queries/index");

exports.get = (req, res) => {
  const { id } = req.params;
  getUserProfileData(id)
    .then(result => {
      res.send(JSON.stringify(result));
    })
    .catch(err => console.log(err));
};