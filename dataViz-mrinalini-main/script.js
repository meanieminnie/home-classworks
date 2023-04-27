// set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

//Read the data
d3.csv("https://raw.githubusercontent.com/meanieminnie/dataViz-mrinalini/main/data-viz-sa-homeprices.csv").then( function(data) {

// Convert month-year to date format
var parseTime = d3.timeParse("%b-%y");
data.forEach(function(d) {
  d.date = parseTime(d["Month/Year"]);
  d.price = +d["National-US"];
});

console.log(data)


  // group the data: I want to draw one line per group
  const sumstat = d3.group(data, d => d.name); // nest function allows to group the calculation per level of a factor

  // Add X axis --> it is a date format
  // Add X axis --> it is a date format
  var x = d3.scaleTime()
    .domain(d3.extent(data, function(d) { return d.date; }))
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(d3.timeMonth.every(3)).tickFormat(d3.timeFormat("%b-%y")));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 450 ])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // color palette
  const color = d3.scaleOrdinal()
    .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])

  // Draw the line
  svg.selectAll(".line")
      .data(sumstat)
      .join("path")
        .attr("fill", "none")
        .attr("stroke", function(d){ return color(d[0]) })
        .attr("stroke-width", 1.5)
        .attr("d", function(d){
          return d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(+d.price); })
            (d[1])
        })

});

