function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment();

  losAngelesDateElement.innerHTML = losAngelesTime
    .tz("America/Los_Angeles")
    .format("MMMM Do yyyy");
  losAngelesTimeElement.innerHTML = losAngelesTime
    .tz("America/Los_Angeles")
    .format("h:mm:ss:SSS [<small>] A [</small>]");

  //Vienna
  let viennaElement = document.querySelector("#vienna");
  let viennaDateElement = viennaElement.querySelector(".date");
  let viennaTimeElement = viennaElement.querySelector(".time");
  let viennaTime = moment();

  viennaDateElement.innerHTML = viennaTime
    .tz("Europe / Vienna")
    .format("MMMM Do yyyy");
  viennaTimeElement.innerHTML = viennaTime
    .tz("Europe / Vienna")
    .format("h:mm:ss:SSS [<small>] A [</small>]");

  //Nairobi
  let nairobiElement = document.querySelector("#nairobi");
  let nairobiDateElement = nairobiElement.querySelector(".date");
  let nairobiTimeElement = nairobiElement.querySelector(".time");
  let nairobiTime = moment();

  nairobiDateElement.innerHTML = nairobiTime
    .tz("Africa/Nairobi")
    .format("MMMM Do yyyy");
  nairobiTimeElement.innerHTML = nairobiTime
    .tz("Africa/Nairobi")
    .format("h:mm:ss:SSS [<small>] A [</small>]");
}

updateTime();
setInterval(updateTime, 1);

function updateCurrentTime() {
  //My Location
  let myLocationElement = document.querySelector("#my-location");
  let myLocationDateElement = myLocationElement.querySelector(".date");
  let myLocationTimeElement = myLocationElement.querySelector(".time");
  let myLocationName = myLocationElement.querySelector("h2");
  myLocationName.innerHTML = moment.tz.guess().replace("/", ", ") + "📍";

  myLocationDateElement.innerHTML = moment().format("MMMM Do yyyy");
  myLocationTimeElement.innerHTML = moment().format(
    "h:mm:ss:SSS [<small>] A [</small>]"
  );
}

updateCurrentTime();
let intervalId = setInterval(updateCurrentTime, 1);

function changeLocation(event) {
  clearInterval(intervalId);
  function updateLocationTime() {
    let selectedLocation = event.target.value;
    let locationTimeElement = moment().tz(selectedLocation);
    let locationName = locationTimeElement._z.name
      .replace("/", ", ")
      .replace("_", " ");
    let locationDate = locationTimeElement.format("MMMM Do yyyy");
    let locationTime = locationTimeElement.format("h:mm:ss:SSS ");
    console.log(locationName);
    console.log(locationDate);
    console.log(locationTime);

    let locationElement = document.querySelector("#cities");
    locationElement.innerHTML = `<div class="city" id="my-location">
      <div>
      <h2>${locationName}</h2>
      <div class="date">${locationDate}</div>
      </div>
      <div class="time">${locationTime}<small>${locationTimeElement.format(
      "A"
    )}</small></div>
          </div>`;
  }
  updateLocationTime;
  setInterval(updateLocationTime, 1);
}
let selectCity = document.querySelector("#select");
selectCity.addEventListener("change", changeLocation);
