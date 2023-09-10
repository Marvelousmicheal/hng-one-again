// const todaysDay = document.querySelector(".days-of-week")
// const currentDate = new Date()



// document.addEventListener("DOMContentLoaded", function () {
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const Day = daysOfWeek[currentDate.getDay()]
    
//     todaysDay.textContent = Day;
    
//     console.log("today is " + Day)
// })

document.addEventListener("DOMContentLoaded", function () {
    const todaysDay = document.querySelector(".days-of-week");
    const timeDiv = document.querySelector(".time-of-the-day")
    const currentDate = new Date();
const currentTime = new Date()



    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Day = daysOfWeek[currentDate.getDay()];
    todaysDay.textContent = `Today is ${Day}` ;

    /////////////////////////////////
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const milliseconds = currentTime.getMilliseconds();
    
    const time = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    
    timeDiv.textContent = `The Time is ${time}`


   
});
