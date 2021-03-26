// Assign the data from data.js to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// render table to the web page
buildTable(tableData);

// Create a function to render table
function buildTable(prdata) {
  // append the  table to the web page 
  prdata.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      row.append("td").text(value);
    });
  });
}

// -- To Perform Search through the Table -- 
// Select the `Apply Filter` button and create event handler
d3.select("#filter-btn").on("click", filterMultiSearch);

// Select the country dropdown menu and create event handler
d3.select("#country-group").on("change", filterMultiSearch);


// Create the Filter function to run for both events
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
    filteredData = filteredData.filter(xcity => xcity.city === inputCity.toLowerCase());
  };

  // --> State
  var inputState = d3.select("#state").property("value");
  if (inputState) {
    filteredData = filteredData.filter(xstate => xstate.state === inputState.toLowerCase());
  };

  // --> Country
  var inputCountry = d3.select("#country-group").property("value");
  if (inputCountry === 'us' || inputCountry === 'ca') {
    filteredData = filteredData.filter(xcountry => xcountry.country === inputCountry);
  };

  // --> Shape
  var inputShape = d3.select("#shape").property("value");
  if (inputShape) {
    filteredData = filteredData.filter(xshape => xshape.shape === inputShape.toLowerCase());
  }; 

  // render table with filtered data
  buildTable(filteredData);

}

