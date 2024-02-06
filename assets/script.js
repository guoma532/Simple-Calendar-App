const currentDate = document.querySelector(".current-date");

let date = new Date(),
currMonth = date.getMonth(),
currYear = date.getFullYear();

const months =["jan", "feb", "March", "May", "June", "July", "August", "September","October","November", "December"]

const renderCalendar = () => {
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();  //last month date not working(bug fix needed)
    let litag="";

    for(let i = 1; i <= lastDateofMonth; i++) {
        litag = '<li>1</li>';


    }
currentDate,innerText = '${moths[currMonth]} ${currYear}';
daysTag.innderHTML = litag;

    currentDate.innerText = '${months[currMonth]} ${currYear}';
}
renderCalendar();

prevNextIcon.(icon => {icon.addEventListener("click", () => {
console.log(icon)
});
    
});