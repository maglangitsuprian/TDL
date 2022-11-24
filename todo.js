const button = document.querySelector("button")
const taskContainer = document.querySelector(".task-container")
const completedContainer = document.querySelector(".completed-task-container")
function counter() {
    const taskCounter = document.querySelector(".task-counter")
    const completedCounter = document.querySelector(".completed-counter")
    const count = taskContainer.childElementCount
    taskCounter.innerHTML =`Tasks - ${count}`
    const completeCount = completedContainer.childElementCount
    completedCounter.innerHTML = `Completed - ${completeCount}`
}
function addTask() {
    const inputValue = document.querySelector("input").value
    const divRow = document.createElement("div")
    divRow.setAttribute("class", "row mb-1 bg-dark rounded-pill task-row")
    taskContainer.appendChild(divRow)
    const divCol = document.createElement("div")
    divCol.setAttribute("class", "col-10")
    divRow.appendChild(divCol)
    const label = document.createElement("label")
    label.setAttribute("class", "list-group-item bg-transparent text-white border-0")
    label.innerHTML = `<input class="form-check-input me-1" type="checkbox" value="" required/>
    ${inputValue}
    </label>`
    divCol.appendChild(label)
    const deleteButton = document.createElement("div")
    deleteButton.setAttribute("class", "col-2 deleteButton text-center")
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    divRow.appendChild(deleteButton)
    
    document.querySelector("input").value = ""
    label.addEventListener("click", function() {
        label.setAttribute("class", "list-group-item bg-transparent text-white border-0 text-decoration-line-through disabled")
        divRow.remove()
        completedContainer.appendChild(divRow)
        counter();
    })
    deleteButton.addEventListener("click", function() {
        divRow.remove()
        counter();
    })
}



button.addEventListener("click", function(){addTask(); counter();})

const myInput = document.querySelector("input")

myInput.addEventListener("keypress", function(event){
    if (event.key === "Enter") {addTask(); counter(); }
})



//// this is a comment
//// this a a comment too
//// this is a comment three
///// this is a comment four
