const DataUriParser = require("datauri/parser.js");
const path = require("path");

const getDataUri = (file) => {
  if (!file || !file.originalname) {
    throw new Error("Please full fill the required fields");
  }

  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

module.exports = getDataUri;
