function add(){
    let item = document.createElement("li");
    item.innerHTML = document.getElementById("chat").value;
    document.getElementById("list").appendChild(item);
    document.getElementById("chat").value = " ";
    document.getElementById("chat").style.backgroundColor="yellow"
}
let chat = document.getElementById("chat");
function input1(){
    chat.style.backgroundColor = "white";
}