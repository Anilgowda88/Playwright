const XLSX = require('xlsx');

class ExcelWriter {
  write(filePath, sheetName, dataArray) {
    const worksheet = XLSX.utils.json_to_sheet(dataArray);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, filePath);
  }
}
module.exports = {ExcelWriter};
