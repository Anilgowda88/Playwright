const XLSX = require('xlsx');

class ExcelReader {
  read(filePath, sheetName) {
    const workbook = XLSX.readFile(filePath);
    const targetSheet = sheetName || workbook.SheetNames[0];
    const worksheet = workbook.Sheets[targetSheet];
    return XLSX.utils.sheet_to_json(worksheet);
  }
}
module.exports = {ExcelReader};