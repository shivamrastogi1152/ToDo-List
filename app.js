const task = document.getElementById('taskInput')
const addbtn = document.getElementById('btn');
const todolist = document.getElementById('mylist')




addbtn.addEventListener('click', addTask)

task.addEventListener('click',()=>{

    if(task.value === "Add a task!") { task.value = ""; }
    
    task.style.cursor = "text";
    task.style.color = "black";

    task.style.font = " 'Poppins', sans-serif " //Not working? 

})




function addTask(event) 
{    
    ///Prevent the form from submitting
    event.preventDefault();
    console.log("Add Task called!");


    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    ///New LI element
    const newtodo = document.createElement('li');
    newtodo.classList.add('todo-item')
    newtodo.innerText = 'hello';

    ///New check button for current todo item
    const complete_btn = document.createElement('button');
    complete_btn.classList.add('complete-btn');
    complete_btn.innerHTML = '<i class = "fas fa-check"></i>'; 

    ///New delete button for current todo item
    const delete_btn = document.createElement('button');
    delete_btn.classList.add('delete-btn');
    delete_btn.innerHTML = '<i class = "fas fa-trash"></i>'; 

    ///Add 3 elements to todoDiv
    todoDiv.appendChild(newtodo); ///List element
    todoDiv.appendChild(complete_btn); ///Check button
    todoDiv.appendChild(delete_btn); ///Delete button

    ///Add the todoDiv to the unordered list 
    todolist.appendChild(todoDiv);

}