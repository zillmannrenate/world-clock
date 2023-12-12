//Los Angeles
function updateTime() {
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
}

updateTime();
setInterval(updateTime, 1);
