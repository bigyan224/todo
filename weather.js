let input = document.querySelector("#task");
let listContainer = document.querySelector("#list-container");

function add() {
  if (input.value === "") {
    alert("The task cannot be empty.");
  } else {
    let li = document.createElement("li");
    let remove = document.createElement("div");
    let done=document.createElement("div")
    done.id="done"
    remove.id = "remove";
    remove.innerText = "+";
    li.innerHTML = input.value;
    li.appendChild(done);
    li.appendChild(remove);
    listContainer.appendChild(li);
    storedata();
    
    remove.addEventListener("click", function() {
      listContainer.removeChild(li);
      storedata();
    });
    
    done.addEventListener("click",function(){
      done.classList.add("check")
      console.log(done)
      done.style.cssText="background:orange; border:none"
      li.style.textDecoration="line-through"
      storedata();
      
    })
  }
  
  input.value = "";
}
function storedata(){
  localStorage
  .setItem("task",listContainer.innerHTML);
}

function showdata() {
  const storedTasks = localStorage.getItem("task");
  if (storedTasks) {
    listContainer.innerHTML = storedTasks;
    const taskItems = listContainer.querySelectorAll("li");
    taskItems.forEach((task) => {
      const remove = task.querySelector("#remove");
      const done = task.querySelector("#done");

      remove.addEventListener("click", function() {
        task.remove();
        storedata();
      });

      done.addEventListener("click", function() {
        done.classList.add("check");
        done.style.background = "orange";
        task.style.textDecoration = "line-through";
        storedata();
      });
    });
  }
}


showdata();



