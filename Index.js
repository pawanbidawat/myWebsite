const inputBox=document.getElementById("input-box");
const list_Cont = document.getElementById("list-task");


function addTask()
{
    if(inputBox.value === '')
    {
        alert("You must enter someting");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; 
        list_Cont.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

list_Cont.addEventListener("click" , function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("data", list_Cont.innerHTML);
}

function showTask(){
    list_Cont.innerHTML = localStorage.getItem("data");
}

showTask();