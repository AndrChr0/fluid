let today = new Date();
insertToday = today.toDateString();

let windowInfo =
  "<h2>Browser Window</h2><p>Width: " + window.innerWidth + "px</p>";
windowInfo +=
  "<h2>Browser Height</h2><p>Height: " + window.innerHeight + "px</p>";
windowInfo +=
  "<h2>Location</h2><p>Current location: " + window.location + "</p>";
windowInfo += "<h2>Last Modified</h2><p> " + document.lastModified + "</p>";
windowInfo += "<h2>Random Number:</h2><p> " + Math.floor((Math.random() * 100) + 1) + "</p>";
windowInfo += "<h2>Todays Date:</h2><p> " + insertToday + "</p>";
let display = document.getElementById("info");

display.innerHTML = windowInfo;
