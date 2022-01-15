
function date() {
     let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let date1 = date.getDate();
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;;
    document.getElementById("date").innerHTML = date1;
}
setInterval(date, 1000);
date();
// setInterval(date, 1000);