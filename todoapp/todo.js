var addButton = document.getElementById("add");
addButton.addEventListener("click",addItem);
var removeButton = document.getElementById("remove");
removeButton.addEventListener("click",deleteItem);
var ul = document.getElementById("mylist");
var li;
function addItem(){
    console.log("todo has been recorded")
    var item = document.getElementById("item").value;
    var ul = document.getElementById("mylist");
    var textNode = document.createTextNode(item);
    if(item==""){
        alert("please enter a todo")
    }
    else{
        //checkbox creating
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check')
        var label = document.createElement('label');
        ul.appendChild(li);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        li.className='listitem';
    }
}
function deleteItem(){
    li = ul.children;
    for(let index =0;index<li.length;index++){
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }
    }
    
}
