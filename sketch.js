var img;
var countrysData = {
  "France": { x: 429, y: 178, width: 80, height: 50 },
  "The United States": { x: 80, y: 125, width: 200, height: 120 },
  "Spain": { x: 397, y: 211, width: 100, height: 80 },
  "China": { x: 591, y: 193, width: 150, height: 100 },
  "Italy": { x: 454, y: 208, width: 70, height: 50 },
  "United Kingdom": { x: 408, y: 162, width: 80, height: 50 },
  "Germany": { x: 443, y: 175, width: 100, height: 70 },
  "Mexico": { x: 148, y: 231, width: 100, height: 60 },
  "Thailand": { x: 679, y: 286, width: 100, height: 80 },
  "Turkey": { x: 501, y: 210, width: 90, height: 60 }
};
var countryImages = {}; 

function preload() {
  img = loadImage('world_map_cartoon_style_by_jonmant_d562skv-fullview.jpg');
  // Load images for each country
  countryImages["France"] = loadImage('france.png');
    countryImages["The United States"] = loadImage('usa.png');
    countryImages["Spain"]= loadImage('spain.png');
    countryImages["China"]= loadImage('China.png');
    countryImages["Italy"]= loadImage('italy.png');
    countryImages["United Kingdom"]= loadImage('uk.png');
    countryImages["Germany"]= loadImage('germany.png');
    countryImages["Mexico"]= loadImage('mexico.png');
    countryImages["Thailand"]= loadImage('Thailand.png');
    countryImages["Turkey"]= loadImage('Turkey.png');

}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  logPositions();
}

function draw() {
  // Display the map image
  image(img, 0, 0);

  // Draw the image of each country/country
  for (let country in countrysData) {
    if (isMouseOverCountry(countrysData[country])) {
      displayCountryImage(country, countrysData[country]);
      break;
    }
  }
}

function isMouseOverCountry(countryData) {
  // Check if the mouse is within the bounding box of the country
  return mouseX > countryData.x && mouseX < countryData.x + countryData.width &&
         mouseY > countryData.y && mouseY < countryData.y + countryData.height;
}

function displayCountryImage(country, countryData) {
  image(countryImages[country], countryData.x, countryData.y, countryData.width, countryData.height);

  // You can also display the country/country name if you want.
  fill(0); 
  noStroke();
  textSize(14);
  textAlign(CENTER, CENTER);
  text(country, countryData.x + countryData.width / 2, countryData.y + countryData.height / 2);
}


function logPositions() {
  console.log("Current positions of the countries on the map:");
  for (let country in countrysData) {
    console.log(country + ": { x: " + countrysData[country].x + ", y: " + countrysData[country].y + ", width: " + countrysData[country].width + ", height: " + countrysData[country].height + " }");
  }
}

function mouseClicked() {
  // If the mouse is clicked, log the current mouse position
  console.log("Mouse Position: { x: " + mouseX + ", y: " + mouseY + " }");
}