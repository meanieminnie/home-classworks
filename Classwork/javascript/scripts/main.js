let popData = [
    ["Brazil","213,445,417"],
    ["China","1,439,323,776"],
    ["India","1,380,004,385"],
    ["Indonesia","273,523,615"],
    ["Pakistan","220,892,340"],
    ["United States","331,449,281"]
  ]


  
  let energyData = [
    // 2019 data
    // value is consumption in million tonnes oil equivalent
    ["Coal",3863.3],
    ["Hydroelectric",3106.7],
    ["Natural Gas",3776.1],
    ["Nuclear",2556],
    ["Oil",4836.2],
    ["Renewables",2961.6]
  ]
  
  let langData = [
    // 2021 data from ethnologue
    // value is number of speakers in millions
    ["Chinese (Mandarin)",1111],
    ["Spanish",536],
    ["English",1191],
    ["Hindi",615],
    ["Bengali",265],
    ["Portuguese",258],
    ["Russian",258],
    ["Japanese",128],
    ["Punjabi",119],
    ["German",132],
    ["Javanese",98.1],
    ["Wu",80],
    ["Korean",77.2],
    ["French",300],
    ["Telugu",92.7],
    ["Marathi",83.1],
    ["Turkish",83.2],
    ["Tamil",78.5],
    ["Vietnamese",95.4],
    ["Yue (Cantonese)",71.5],
    ["Urdu",68.6],
    ["Min Nan",49],
    ["Jin",45],
    ["Gujarati",56.5],
    ["Polish",45],
    ["Pashto",43],
    ["Kannada",44.9],
    ["Xiang",36],
    ["Malayalam",38.8],
    ["Sundanese",36.6],
    ["Hausa",38.8],
    ["Oriya (Odia)",33.2],
    ["Burmese",33.2],
    ["Hakka",34.3],
    ["Ukrainian",33.7],
    ["Bhojpuri",33.1],
    ["Tagalog",29.7],
    ["Yoruba",28.9],
    ["Maithili",33.7],
    ["Swahili",16.7]
  ];

// array.foreach - the forEach() method executes a provided function once for each element
// sort popData by population
// below official method
 // popData.forEach(function(country){
//console.log(country);
  //})
  /// alt method

  let numbers = [8,10,7,88,9089];

// numbers.forEach(function(num) 

// function double(num) {
//  console.log(num *2);
// }
//popData.forEach(logCountry);

  //function logCountry(country) {
    //console.log(country[0]);
  //}

// Array.sort

//numbers.sort(function(a , b) {
    // sort descending
  //  return b - a;

    // sort ascending
    //return a - b;
//})

// console.log(numbers)

popData.forEach(convertPopToNumber)

function convertPopToNumber(country) {
let population = country[1]
population = population.replaceAll(",", "")
 let populationInt = parseInt(population)
   country[1] = populationInt
}

popData.sort(function(countryA, countryB){
    // sorting population in descending order
    return countryB[1] - countryA[1];
});

// Array.filter
// filter langauge data by > 50 mil
let smallerLanguages = langData.filter(function(language) {
    let numSpeaker = language[1];
    return numSpeaker <= 50;
})

// work w HTML elements in javascript

let container = document.querySelector(".container");

popData.forEach(function(country) {
    let p = document.createElement("p")
    p.textContent = country[0] + "," + country[1];
    container.appendChild(p);

})

let table = document.createElement("table");

// create a header row
let headerRow = document.createElement("tr");

// Create header cells and add text
let headerCell1 = document.createElement("th");
headerCell1.textContent = "Source of energy"


[
   {source: "Coal", value: 3863.3},
   {source: "Hydroelectric", value: 3106.7},
   {source: "Natural Gas", value: 3776.1},
   {source: "Nuclear", value: 2556},
   {source: "Oil", value: 4836.2},
   {source: "Renewables", value: 2961.6 } 
]








