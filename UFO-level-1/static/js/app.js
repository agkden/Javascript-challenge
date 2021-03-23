// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// append the  table to the web page 
tableData.forEach((ufoReport) => {
  var trow = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    trow.append('td').text(value);
  });
});




