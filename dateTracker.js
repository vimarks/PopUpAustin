let datePicker = document.getElementById("datepicker");

let dateButton = document.getElementById("dateButton");
dateButton.addEventListener("click", setProgressBar);

let updateButton = document.getElementById("updateTimeButton");
updateButton.addEventListener("click", update);
let oneDay = 1000 * 60 * 60 * 24;

function setProgressBar() {
  let timeBar = document.getElementById("timeBar");
  console.log("set");
  // convert user input into a new Date instance
  let input = datePicker.value.split("/");
  let month = parseInt(input[0]);
  let day = parseInt(input[1]);
  let year = parseInt(input[2]);
  let endDate = new Date();
  endDate.setDate(day);
  endDate.setMonth(month - 1);
  endDate.setYear(year);

  // find amount of days between current date and end date
  let startDate = new Date();
  localStorage.setItem("startDate", startDate.getTime());
  let timeLeft = endDate.getTime() - startDate.getTime();
  let daySpan = Math.round(timeLeft / oneDay);
  localStorage.setItem("daySpan", daySpan);
}

function update() {
  let today = Date.now();
  let startDate = parseInt(localStorage.getItem("startDate"));
  let daySpan = parseInt(localStorage.getItem("daySpan"));
  let barSpan = 0;
  let daysPast = (today - startDate) / 3600000;

  timeBar.style.width = daysPast * (100 / daySpan) + "%";
  console.log(
    "daySpan",
    daySpan,
    "daysPast",
    daysPast,
    "today",
    today,
    "startDate",
    startDate
  );
  setTimeout(function() {
    update(), 10000;
  });
}
window.onload = update;
