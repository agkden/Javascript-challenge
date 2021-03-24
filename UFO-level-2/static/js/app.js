// Assign the data from data.js to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// render table to the web page
buildTable(tableData);

// Create a function to render table
function buildTable(data) {
  // append the  table to the web page 
  data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      row.append('td').text(value);
    });
  });
}

// -- To Perform Search through the Table -- 
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", filterSearch);
form.on("submit", filterSearch);





