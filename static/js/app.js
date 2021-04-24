// import the data from data.js
const tableData = data

// Reference the html table using d3
var tbody = d3.select('tbody');


// Build a table from the provided UFO sighting data
function buildTable(data) {
// Clear out any existing data
    tbody.html("");
}

// Loop through each object in the array, 
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
    let row = tbody.append('tr');

    // Loop through each field in the dataRow,      
    // and add each value from the object into a cell
    Object.values(dataRow).forEach((val) => {
        let cell = row.append('td');
        cell.text(val);
    });
});




