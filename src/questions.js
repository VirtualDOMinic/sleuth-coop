const queries = require("./database/queries/index");

exports.get = async (req, res) => {
  const url = req.headers.referer;
  const companyId = url.split("/")[4];

  const response = await queries.getAllQs(companyId);

  res.send(response);
};
