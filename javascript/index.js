function updateTime() {
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
