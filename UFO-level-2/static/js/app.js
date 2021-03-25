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
      row.append("td").text(value);
    });
  });
}

// -- To Perform Search through the Table -- 
// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", filterMultiSearch);

// Create the Filter function to run for click event
function filterMultiSearch() {

  // Clear table before rendering again
  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  var filteredData = tableData

  // Select the input element and get the value property
  // --> Date
  var inputDate = d3.select("#datetime").property("value");
  if (inputDate) {
    filteredData = filteredData.filter(date => date.datetime === inputDate);
  };

    // --> City
  var inputCity = d3.select("#city").property("value");
  if (inputCity) {
    filteredData = filteredData.filter(xcity => xcity.city === inputCity);
  };

    // --> State
  var inputState = d3.select("#state").property("value");
  if (inputState) {
    filteredData = filteredData.filter(xstate => xstate.state === inputState);
  };

    // --> Country
  var inputCountry = d3.select("#country").property("value");
  if (inputCountry) {
    filteredData = filteredData.filter(xcountry => xcountry.country === inputCountry);
  };

    // --> Shape
  var inputShape = d3.select("#shape").property("value");
  if (inputShape) {
    filteredData = filteredData.filter(xshape => xshape.shape === inputShape);
  }; 

  // render table with filtered data
  buildTable(filteredData);

}

