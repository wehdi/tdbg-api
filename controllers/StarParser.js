var XLSX = require("xlsx");
fs = require("fs");
program = require("commander");
exports.readStarDBF = (req, res) => {
  console.log("caleld");
  program.option("-U, --dbf");
  var buf = fs.readFileSync("./ECHSTAR.DBF");
 /*- workbook = XLSX.readFileSync("./ECHSTAR.DBF");
  var first_sheet_name = workbook.SheetNames[0];
  var address_of_cell = 'A1';
  var worksheet = workbook.Sheets[first_sheet_name];*/

  console.log("****" + buf[256]);
  // var wb = XLSX.read(buf, { type: "buffer" });
  // console.log(wb.SheetNames);
  res.status(200).send({message : "ok"});
};
