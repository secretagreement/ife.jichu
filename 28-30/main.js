
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
	if(input.value.indexOf('@')==-1){
		var first_email=input.value.trim();
	}else{
		first_email=input.value.substring(0,input.value.indexOf('@')).trim();
		var second_email=
	}

	
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
<<<<<<< HEAD
		if(ul.children[i]){
			//ul.children[i]=li[i];
			ul.children[i].innerHTML=li[i].innerHTML;
			//为啥上面的不行，下面的可以
		}else{
			ul.appendChild(li[i]);
		}
=======
		//ul.appendChild(li[i]);
		ul.elementChild[i]=li[i];
		// ul.children[i]=li[i];
>>>>>>> 603cc493c0fab4af0e15bc5544d1d454e8d69dd5
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
	ul.style.display="none";
}

function block(){
	ul.style.display="block";
}
