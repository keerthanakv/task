const days = document.querySelector(".days"),
currentdate = document.querySelector(".date"),
prevnext = document.querySelectorAll(".icon i");
let date = new Date(),
currentyear = date.getFullYear(),
currentmonth = date.getMonth();


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
     "December"];
document.querySelector(".footer p").innerHTML=date.toDateString();
const renderCalendar = () => {
    let firstdayofmonth = new Date(currentyear, currentmonth, 1).getDay(), 
    lastdateofmonth = new Date(currentyear, currentmonth + 1, 0).getDate(), 
    lastdayofmonth = new Date(currentyear, currentmonth, lastdateofmonth).getDay(),
    lastdateoflastmonth = new Date(currentyear, currentmonth, 0).getDate(); 
    let li = "";

    for (let i = firstdayofmonth; i > 0; i--) { 
        li += `<li class="inactive">${lastdateoflastmonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastdateofmonth; i++) { 
        let isToday = i === date.getDate() && currentmonth === new Date().getMonth() 
                     && currentyear === new Date().getFullYear() ? "active" : "";
                   
                    var d=currentyear+'/'+parseInt(currentmonth+1)+'/'+i+' GMT';
                    let date2 = new Date(d);
                    let date3=date2.toDateString()

        li += `<li class="${isToday}" id="${date3}"onclick="fun(this.id)">${i}</li>`;
    }

    for (let i = lastdayofmonth; i < 6; i++) { 
        li += `<li class="inactive" >${i - lastdayofmonth + 1}</li>`
    }
    currentdate.innerText = `${months[currentmonth]} ${currentyear}`; 
    days.innerHTML = li;
   
    
}

renderCalendar();

prevnext.forEach(icon => { 
    icon.addEventListener("click", () => {
        currentmonth = icon.id === "arrow1" ? currentmonth - 1 : currentmonth + 1;

        if(currentmonth < 0 || currentmonth > 11) { 
            date = new Date(currentyear, currentmonth);
            currentyear = date.getFullYear();
            currentmonth = date.getMonth(); 
        } else {
            date = new Date(); 
        }
      
        renderCalendar(); 
    });
});
function fun(date2)
{
    document.getElementById('footercontent').innerHTML=date2;
    
  
}
function fun(date3)
{
    document.getElementById('footercontent1').innerHTML=date3;
    
  
}
