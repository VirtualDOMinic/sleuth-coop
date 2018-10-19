const { getSMEs } = require('./database/queries/index');

exports.get = (req, res) => {
  getSMEs()
    .then(result => {
      res.send(JSON.stringify(result));
    })
    .catch(err => console.log(err))

};