document.querySelector('#push').onclick = function(){

if(document.querySelector('#newtasks input').value.length == 0){
    alert("Plase Enter a Task")
}

else {
    document.querySelector('#tasks').innerHTML
    += `
            <div class="tasks">
            <span id="taskname">

    ${document.querySelector('#newtasks input').value}

        </span>
        <button class="delete">
        <i class="uil uil-trash-alt"></i>
        </button>
    </div>
`;
    
    let current_tasks = document.querySelectorAll('.delete');
    for(let i = 0; i < current_tasks.length; i++){
        current_tasks[i].onclick = function (){
            this.parentNode.remove();
        }
    }

  
}

    let tasks = document.querySelectorAll(".tasks");
    for(let i = 0; i < tasks.length; i++){
        tasks[i].onclick = function (){
            this.classList.toggle('completed');
        }
    }

document.querySelector("#newtasks input").value = "";


}

