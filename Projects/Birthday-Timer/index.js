const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");


const second = 1000,
 minute = 60 * second,
 hour = 60 * minute,
 day = 24 * hour;

const timerFunction = () => {

    let now = new Date(),
    dd = String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth() + 1).padStart(2,"0");
    yyyy = now.getFullYear();

    const enteredDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");

    now = `${mm}/${dd}/${yyyy}`;
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
    if(now > targetDate) {
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`
    }

    setInterval(()=>{
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();
        const difference = timer - today;
        const leftDays = Math.floor(difference / day);
        const leftHours = Math.floor((difference % day) / hour);
        const leftMinuts = Math.floor((difference % hour) / minute);
        const leftSeconds = Math.floor((difference % minute) / second);
        daysElement.innerText = leftDays;
        hoursElement.innerText = leftHours;
        minutesElement.innerText = leftMinuts;
        secondsElement.innerText = leftSeconds;
        // console.log( leftDays, leftHours, leftMinuts, leftSeconds )
    }, 0)
    
}

timerFunction();