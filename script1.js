let list_wrapper= document.getElementById('list_wrapper');
let addButton = document.getElementById('addButton');
var taskArr=[];
let taskArrs = [];

if(localStorage.getItem('taskArr')=== null){
    localStorage.setItem('taskArr', JSON.stringify(taskArrs));
}

let saved = localStorage.getItem('taskArr');

if(saved){
    taskArr = JSON.parse(localStorage.getItem('taskArr'));
    displayList(taskArr);
    console.log(saved);
}

function addNewTask(){
    let titleTask = document.getElementById('title').value;
    let assingneeTask = document.getElementById('assingnee').value;
    let dateTask = document.getElementById('date').value;
    let task = {
        'name': titleTask,
        'assingnee': assingneeTask,
        'date': dateTask
    };

    taskArr.push(task); 
    localStorage.setItem('taskArr',JSON.stringify(taskArr));
    displayList(taskArr);
}

function displayList(TaskArr){
    var index=0;
    let contentList = "";
    TaskArr.forEach(taskarr => {
        contentList += `
        <div class="row">
            <div class="col">
            ${taskarr.name}
            </div>
            <div class="col">
            ${taskarr.assingnee}
            </div>
            <div class="col">
            ${taskarr.date}
            </div>
            <div class="col">
            <button onclick="deleteButton(${index})">
                <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-39-512.png">
            </button>
            </div>
        </div>
        `;
        index++;
    });
    list_wrapper.innerHTML = contentList;
}
function deleteButton(index){
    taskArr.splice(index, 1);
    localStorage.setItem('taskArr', JSON.stringify(taskArr));
    displayList(taskArr);
}

