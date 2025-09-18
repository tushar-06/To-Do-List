const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputbox.value;

        
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";

        
        delBtn.onclick = function () {
            li.remove();
            saveData();
        };

        
        li.onclick = function (e) {
            if (e.target.tagName !== "BUTTON") {
                li.classList.toggle("checked");
                saveData();
            }
        };

        li.appendChild(delBtn);
        listcontainer.appendChild(li);
        saveData();
    }
    inputbox.value = "";
}


function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}


function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data") || "";
    
    document.querySelectorAll("li").forEach(li => {
        let btn = li.querySelector("button");
        btn.onclick = function () {
            li.remove();
            saveData();
        };
        li.onclick = function (e) {
            if (e.target.tagName !== "BUTTON") {
                li.classList.toggle("checked");
                saveData();
            }
        };
    });
}
showTask();
