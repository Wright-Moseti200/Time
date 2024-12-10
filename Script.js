
function Time()
{

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".minutes");
    let amPM = document.querySelector(".pm");
    let seconds = document.querySelector(".seconds");
    seconds.innerHTML = second;
    hours.innerHTML = hour;
    minutes.innerHTML = minute;
    if (second < 10)
    {
seconds.innerHTML="0" + second;
    }
    
    if (minute < 10)
    {
        minutes.innerHTML = "0" + minute;
     }

    if (hour>=12)
    {
        amPM.innerHTML = "PM";
    }
       
    else if(hour>=0)
    {
        amPM.innerHTML = "AM";
    }
    
}

setInterval(Time);