const xlsx = require("xlsx");
const fs = require("fs");

const saveDataToExcel = (
  filePath,
  firstName,
  lastName,
  email,
  phoneNumber,
  message
) => {
  let workbook;
  let sheet;

  if (fs.existsSync(filePath)) {
    // If file exists, read the existing workbook
    workbook = xlsx.readFile(filePath);
    sheet = workbook.Sheets["Sheet1"];
  } else {
    // Create a new workbook and worksheet
    workbook = xlsx.utils.book_new();
    sheet = xlsx.utils.aoa_to_sheet([
      [
        "First Name",
        "Last Name",
        "Email",
        "Phone Number",
        "Message",
        "Timestamp",
      ],
    ]); // Header row
    xlsx.utils.book_append_sheet(workbook, sheet, "Sheet1");
  }

  // Append new data
  const newRow = [
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
    new Date().toISOString(),
  ];
  const sheetData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  sheetData.push(newRow);
  const updatedSheet = xlsx.utils.aoa_to_sheet(sheetData);
  workbook.Sheets["Sheet1"] = updatedSheet;

  // Save the workbook
  xlsx.writeFile(workbook, filePath);
};

module.exports = {
  saveDataToExcel,
};
