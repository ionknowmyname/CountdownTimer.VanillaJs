const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('mins');
const Seconds = document.getElementById('seconds');

const newYears="1 Jan 2021";

function Countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds =  (newYearsDate - currentDate) / 1000;

    const days =  Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;  // which means after you divide by 24 hours for a day, the left over is the hours remaining thats why we do modulus divide
    const minutes = Math.floor(totalSeconds / 60) % 60;  // (totalSeconds / 60) give total number of minutes, the % 60 is to get the remnant in minutes after dividing multiple times by 60
    const seconds = Math.floor(totalSeconds) % 60 ; // same for seconds, divide total seconds multiple times, what is left is the seconds 

    // console.log(days, hours, minutes, seconds);

    Days.innerHTML = days;
    Hours.innerHTML = formatTime(hours);
    Minutes.innerHTML = formatTime(minutes);
    Seconds.innerHTML = formatTime(seconds);
}

function formatTime(time){    // adds zero in front if its only 1 digit
    return time < 10 ? `0${time}` : time;
}

Countdown();

setInterval(Countdown, 1000);