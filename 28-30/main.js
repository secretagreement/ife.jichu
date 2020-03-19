
var input=document.getElementById('email-input');
var ul=document.getElementById('email-sug-wrapper');

input.oninput=function(){
	// getInput();
	// getLi();
	getUl();
	display();

}

function getInput(){
	var input=document.getElementById('email-input');
	console.log(input.value);  console.log(input.value=="");
	var first_email=input.value.trim();
	return first_email;
}


function getLi(){
	var postfixList=['163.com','gmail.com','126.com','263.net'];
	var first_email=getInput();
	var li=new Array();
	var email;
	for(var i=0;i<=postfixList.length-1;i++){
		li[i]=document.createElement('li');
		email=first_email.concat('@',postfixList[i]);
		li[i].appendChild(document.createTextNode(email));
	}
	return li;

}


function getUl(){
	var li=getLi();
	for(var i=0;i<=li.length-1;i++){
		//ul.appendChild(li[i]);
		ul.elementChild[i]=li[i];
		// ul.children[i]=li[i];
	}
}

function display(){
	if(getInput()==""){
		none();
	}else {
		block();
	}
}

function none(){
	console.log('didi');
	ul.style.display="none";
}

function block(){
	ul.style.display="block";
}
