console.log("My first js from an external file")
function add_li(){
    var todoinput = document.getElementById("todoinput").value;
    var todolist = document.getElementById("todolist");
    var todotext = document.createTextNode(todoinput);
    var newli = document.createElement("li");
    newli.appendChild(todotext);
    todolist.appendChild(newli);
}

window.onload = function(){
 var btn = document.getElementById("todobtn")
 btn.onclick = add_li
}
// btn.onclick = function(){
//     console.log("Updated Result Here")
//     var input = document.getElementById("input")
//     console.log("Updated Result too Here")
//     var out=document.getElementById("output")
//     console.log("Updated Result Here tooo")
//     out.innerHTML=input.value
// //  