
//SELECT LIST ITEM
document.querySelector("#todoList").addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
//TOGGLE CSS CLASS
    ev.target.classList.toggle('checked');
  }
}, false);


//DELETE SINGLE LISTING
function deleteLi() {
  var list = document.getElementById("todoList");
  var li = document.getElementsByClassName("checked");
  for(var i = 0; i < li.length; i++) {
      li[i].style.display = "none";

  }
}

//CLEAR TODU LIST
function clearAll() {
  var warning;
  if(confirm("Are you sure you want to clear todo list?")) {
    document.getElementById("todoList").innerHTML = "";
  }
}


//CREATE NEW LIST ITEM
function createLi() {
  var li = document.createElement("li");
  var userInput = document.getElementById("userInput").value;
  var input = document.createTextNode(userInput);

  //APPEND INPUT TO LI
  li.appendChild(input);

  //CHECK FOR USER INPUT
  if (userInput == '' || userInput.length < 3) {
    alert('Input too short!');
    document.getElementById("userInput").style.borderColor = "red";
  }else{
  //APPEND LI TO UL
    document.getElementById("todoList").appendChild(li);
    document.getElementById("userInput").style.borderColor = "black";
  }
  document.getElementById("userInput").value="";
}
