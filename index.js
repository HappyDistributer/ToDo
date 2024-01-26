const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("todo-list")

function addTask() {
    if (inputBox.value === '') {
        alert("You should write something to add")
    }
    else{
        const li = document.createElement("li")
        li.innerText = inputBox.value
        listContainer.appendChild(li)
        inputBox.value = ''
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        span.addEventListener("click", () => {
            li.remove()
        })
    }

    inputBox.value = ""
    saveData() 
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

// save data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()