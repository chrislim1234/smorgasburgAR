const XLSX = require('xlsx');
const fs = require('fs');

// Load the Excel file
const workbook = XLSX.readFile('SmorgLocations.xlsx');

// Get the first worksheet
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert the worksheet to an array of objects
const data = XLSX.utils.sheet_to_json(worksheet);

// Save the data to a JSON file
fs.writeFile('table.json', JSON.stringify(data), err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data saved to table.json');
});
