const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadlineH4s = document.querySelectorAll('.deadline-format h4');
const giveAwayDiv = document.querySelector('.giveaway')
//giveaway ends on Sunday, 24 April 2020, 8:00pm

let futureDate = new Date(2020,11,31,23,59,59)
console.log(futureDate);

giveAwayDiv.innerHTML = `giveaway ends on ${weekdays[futureDate.getDay()]}, ${futureDate.getDate()} ${months[futureDate.getMonth()]} 
${futureDate.getFullYear()}, ${futureDate.getHours()}:${futureDate.getMinutes()}pm`;

let futureTime = futureDate.getTime();
let curTime = new Date().getTime();
let diffTime = futureTime - curTime;

//1s = 1000ms
//1m = 60s
//1h = 60m
//1d = 24h
let oneDay = 24 * 60 * 60 * 1000;
let oneHr = 60*60*1000;
let oneMin = 60*1000;
let oneSec = 1000;

function getRemainingTime(){
  let curTime = new Date().getTime();
  let diffTime = futureTime - curTime;
  
  let days = Math.floor(diffTime/oneDay)
  let hours = Math.floor((diffTime%oneDay)/oneHr)
  let mins = Math.floor(((diffTime%oneDay)%oneHr)/oneMin)
  let secs = Math.floor((((diffTime%oneDay)%oneHr)%oneMin)/oneSec)

  deadlineH4s.forEach(h4=>{
    if(h4.classList.contains('days')){
      h4.textContent = days
    } else if(h4.classList.contains('hours')){
      h4.textContent = hours
    } else if(h4.classList.contains('mins')){
      h4.textContent = mins
    } else if(h4.classList.contains('secs')){
      h4.textContent = secs
    }
  })
}

// setInterval(()=>{
//   getRemainingTime()
// },1000);