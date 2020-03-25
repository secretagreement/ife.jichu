
var input=document.getElementById('email-input');
var ul=document.getElementById('email-sug-wrapper');
var nowSelectTipIndex=0;

var HtmlUtil={
	htmlEncode:function(html){
		var temp=document.createElement('div');
		(temp.textContent!=undefined)?(temp.textContent=html):(temp.innerText=html);
		var output=temp.innerHTML;
		temp=null;
		return output;
	},
	htmlDecode:function(text){
		var temp=document.createElement('div');
		temp.innerHTMl=text;
		var output=temp.innerText||temp.textContent;
		temp=null;
		return output;
	}

};


window.onload=function(){
	input.focus();
}


// input.onkeydown=function(){
// 	console.log('didi');
// }

input.onkeyup=function(event){//如果用onkeydown,inputvalue取不到实时的内容；
	if(input.value==""){
		ul.innerHTML="";
		return;
	}
	if(event.keyCode=='27'){
		input.select();//全选输入内容
	}
	if(event.keyCode!=13&event.keyCode!=38&event.keyCode!=40){
		nowSelectTipIndex=0;
		getUl();
	}
	if(event.keyCode==13){
		input.value=ul.children[nowSelectTipIndex].innerHTML;
		ul.innerHTML="";
		// input.value=theLi.innerHTML;
		// ul.style.display='none';
	}
	
	// getInput();
	// getLi();
	// if(e.keyCode!==38&&e.keyCode!==40){
	// 	nowSelectTipIndex=0;
	// }
	
	if(event.keyCode==38){
		nowSelectTipIndex=nowSelectTipIndex==0?ul.children.length-1:nowSelectTipIndex-1;
		getUl();
		// theLi.style.backgroundColor="#fff";
		// theLi=(theLi==ul.children[0])?ul.children[ul.length-1]:ul.previousElementSibling;
		// theLi.style.backgroundColor='#ddd';
	}
	if(event.keyCode==40){
		nowSelectTipIndex=nowSelectTipIndex==ul.children.length-1?0:nowSelectTipIndex+1;
		getUl();
		// theLi.style.backgroundColor='#fff';
		// theLi=(theLi==ul.children[ul.length-1])?ul.children[0]:ul.nextElementSibling;
		// theLi.style.backgroundColor='#ddd';
	}
	

}



function getInput(){
	var input=document.getElementById('email-input');
	var input_result=input.value.trim();
	return input_result;
	
}


function getText(){
	var input_result=getInput();//局部变量就算return了，还是局部变量
	var first_email;	//@前面的内容
	var code;
	if(input_result==''){
		return false;
	}else if(input_result.indexOf('@')==-1){
		first_email=input_result;

	}else{
		first_email=input_result.substring(0,input_result.indexOf('@'));
		code=input_result.substring(input_result.indexOf('@')+1,input_result.length);
	}

	//@后面的内容
	var postfixList=['163.com','gmail.com','126.com','qq.com','263.net'];
	var second_email=[];
	
	for(var i=0;i<=postfixList.length-1;i++){
		if(postfixList[i].indexOf(code)==0){//如果@后面的内容满足，则push
			second_email.push(postfixList[i]);
		}
	}
	if(second_email.length==0){
		second_email=postfixList;//如果没有可以满足的,则每个后缀都要显示
	}
	
	//连接@前面和后面的内容
	var liText=new Array();
	for(var j=0;j<=second_email.length-1;j++){
		liText[j]=first_email.concat('@',second_email[j]);
	}
	return liText;
}


function getLi(){
	// var postfixList=['163.com','gmail.com','126.com','263.net'];
	var liText=getText();
	var li=new Array();
	// var email;
	for(var i=0;i<=liText.length-1;i++){
		li[i]=document.createElement('li');
		// email=first_email.concat('@',postfixList[i]);
		li[i].appendChild(document.createTextNode(liText[i]));
	}
	li[nowSelectTipIndex].style.backgroundColor='#ddd';
	return li;

}


function getUl(){
	var li=getLi();
	// var theLi;
	ul.innerHTML="";
	// li[nowSelectTipIndex].style.backgroundColor=""
	for(var i=0;i<=li.length-1;i++){
		ul.appendChild(li[i]);
		//ul.children[i]=li[i];
		//ul.children[i].innerHTML=li[i].innerHTML;
		//为啥上面的不行，下面的可以		

		//ul.appendChild(li[i]);
		//ul.elementChild[i]=li[i];
		// ul.children[i]=li[i];
	}
	// console.log(ul.children[nowSelectTipIndex]);
	// ul.children[nowSelectTipIndex].style.backgroundColor="#ddd";

	// theLi=ul.children[0];
	// theLi.style.backgroundColor="#ddd";
}


ul.onclick=chose;



function chose(e){
	var sourse=e.target||e.srcElement;
	if(sourse.nodeName.toLowerCase()=='li'){
		input.value=sourse.innerHTML;
		console.log(HtmlUtil.htmlDecode(sourse.innerHTML));
		ul.style.display='none';
	}
	input.focus();

}


function display(){
	if(getInput()==""){
		return;
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





// function(e){
// 	if(e.keyCode==13){
// 		input.value=ul.children[nowSelectTipIndex];
// 		ul.style.display="none";
// 		// input.value=theLi.innerHTML;
// 		// ul.style.display='none';
// 	}
// 	if(e.keyCode==38){
// 		nowSelectTipIndex=nowSelectTipIndex==0?ul.children.length-1:nowSelectTipIndex-1;
// 		// theLi.style.backgroundColor="#fff";
// 		// theLi=(theLi==ul.children[0])?ul.children[ul.length-1]:ul.previousElementSibling;
// 		// theLi.style.backgroundColor='#ddd';
// 	}
// 	if(e.keyCode==40){
// 		nowSelectTipIndex=nowSelectTipIndex==ul.children.length-1?0:nowSelectTipIndex+1;
// 		// theLi.style.backgroundColor='#fff';
// 		// theLi=(theLi==ul.children[ul.length-1])?ul.children[0]:ul.nextElementSibling;
// 		// theLi.style.backgroundColor='#ddd';
// 	}
// }