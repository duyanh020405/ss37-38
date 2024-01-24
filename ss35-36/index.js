let todoListDB = [ 
    {
    id:1,
    content :"di hoc",
    status : false,
},
{
    id:2,
    content :"tan gai",
    status : true,
},
{
    id:3,
    content :"di choiii",
    status : false
}, 
]
// const ul = document.getElementsByClassName("list")[0];
// // cach 1
// // ul.innerHTML 
// for(let index in todoListDB){
//         //id,content,statust -> <li> {id, content, statust} </li>
//         let li = `<li class = "list_item" id="${todoListDB[index].id}"`
//         ${todoListDB[index].content}
//         <button>DELETE</button>
//         <button>EDIT</button>
// }
//ul.innerHTML +=li;
// cach 2
// tao ra the li
for(let index in todoListDB){
    let li = document.createElement("li");
    li.classList.add("List_item");
    li.id=todoListDB[index].id
    li.innerText=todoListDB[index].content;

    let deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete";
    let editBtn =  document.createElement("button")
    editBtn.innerText = "Edit";

    li.appendChild("deleteBtn")
    li.appendChild("editBtn")

}
//ul.appendChild(li):
