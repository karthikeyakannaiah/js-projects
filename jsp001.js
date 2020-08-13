/*function dicemath(){
	return Math.floor(Math.random()*6)+1;
}
function diceroll(){
	document.getElementById("dice").innerHTML = dicemath();
}
function todolist(){
	var item = document.getElementById("todo").value;
	var text = document.createTextNode(item);
	var item2 = "remove";
	var text2 = document.createTextNode(item2);
	var newitem = document.createElement("li");
	var newitem2 = document.createElement("button");

	newitem.appendChild(text);
	newitem2.appendChild(text2);
	document.getElementById("todolist").appendChild(newitem);
	document.getElementById("todolist").appendChild(newitem2);
	var list = document.getElementsByTagName("ul li");
	var blist = document.getElementsByTagName("ul button");
	var len = list.length;
	$("ul button").click(function(){
		
		document.getElementById("todolist").remove();
		//document.getElementById("todolist").remove();
		
	});

}
/*var txt = "";
var numbers = [45, 5, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML=txt;

function myFunction(value, index, array) {
  txt = txt + value + "<br>"; 
}*/
/*
var todo= {1:"duifh",2:"dfs",3:"jajskdfuiu"}
console.log(todo[1]);
for(var i in todo){
	console.log(todo[i])

}
function todolist2(){
	var item = document.getElementById("todo").value;
	var text = document.createTextNode(item);
	var item2 = "remove";
	var text2 = document.createTextNode(item2);
	var newitem = document.createElement("li");
	var newitem2 = document.createElement("button");

	newitem.appendChild(text);
	newitem2.appendChild(text2);
	document.getElementById("todolist").appendChild(newitem);
	document.getElementById("todolist").appendChild(newitem2);
	var list = document.getElementsByTagName("ul li");
	var blist = document.getElementsByTagName("ul button");
	var len = list.length;
	$("ul button").click(function(){
		
		document.getElementById("todolist").remove();
		//document.getElementById("todolist").remove();
		
	});

}*/