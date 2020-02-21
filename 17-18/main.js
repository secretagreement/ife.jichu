

var add_btn=document.getElementById("add-btn");
var minus_btn=document.getElementById("minus-btn");
var times_btn=document.getElementById("times-btn");
var divide_btn=document.getElementById("divide-btn");

var result=document.getElementById("result");


// add_btn.addEventListener("click",function(){alert("1");})

// minus_btn.onclick=fun(){alert("1");}

minus_btn.onclick=function(){
	var first_number=document.getElementById("first-number").value;
	var second_number=document.getElementById("second-number").value;
	result.innerHTML=Number(first_number)-Number(second_number);
	alert(result.innerHTML);
}

add_btn.onclick=function(){
	var first_number=document.getElementById("first-number").value;
	alert(typeof first_number);
	var second_number=document.getElementById("second-number").value;
	result.innerHTML=first_number+second_number;
	alert(result.innerHTML);
}

times_btn.onclick=function(){
	var first_number=document.getElementById("first-number").value;
	var second_number=document.getElementById("second-number").value;
	result.innerHTML=Number(first_number*second_number);
	alert(result.innerHTML);
}

divide_btn.onclick=function(){
	var first_number=document.getElementById("first-number").value;
	var second_number=document.getElementById("second-number").value;
	// if(Numeber(second_number)==0){
	// 	alert()
	// }
	try{
		if(first_number=="" || second_number=="") throw "请输入数字";
		if(second_number==0) throw "除数不可为0，请重新输入";
	}catch(err){
		console.log(err);
		result.innerHTML=err;
		return;
	}
	result.innerHTML=Number(first_number/second_number);
}

/*第二个测试*/
var second_result=document.getElementById("second-result");
function second(){
	var dec_number=document.getElementById("dec-number").value;
	var bin_bit=document.getElementById("bin-bit").value;
	try{
		if(isNaN(dec_number)) throw "输入的不是数字";
		if(Number(dec_number)<=0) throw "请输入大于零的整数";
		if(Number(bin_bit)<0 || isNaN(bin_bit)) throw "字位数需要为非负整数";

	}catch(err){
		console.log(err);
		second_result.innerHTML=err;
		return;
	}

	beichushu=Number(dec_number);
	var bin_number=[];
	var i=0;
	do{
		shang=Math.trunc(beichushu/2); //parseInt()
		yushu=beichushu%2;
		bin_number[i]=yushu;
		i++;
		beichushu=shang;
	}
	while(shang!=0);  console.log(bin_number);//获取二进制数组 

	// if(Number(bin_bit)>bin_number.length){
	// 	for(i=Number(bin_bit)-bin_number.length;i>0;i--){
	// 		bin_number.push(0);
	// 	}
	// }
	// var a="";
	// for(j=bin_number.length-1;j>=0;j--){
	// 	console.log(bin_number[j]);
	// 	a+=String(bin_number[j]); //获取二进制字符串
	// }

	// second_result.innerHTML=a;
	
	try{
		if(Number(bin_bit)>bin_number.length){
			for(i=Number(bin_bit)-bin_number.length;i>0;i--){
				bin_number.push(0);
			}
			throw "字位数出错";
		}
	}
	catch(err){
		console.log(err);
	}
	finally{
		var a=""
		for(j=bin_number.length-1;j>=0;j--){
			console.log(bin_number[j]);
			a+=String(bin_number[j]); //获取二进制字符串
		}

		second_result.innerHTML=a;
	}
}

// 3的小游戏
document.getElementById("three-btn").onclick=function(){
	for(i=1;i<=100;i++){
		if(i%3==0||String(i).indexOf("3")==0){
			console.log("pa");
		}else{
			console.log(i);
		}
	}
};

//九九乘法表
var timesWord="";
var timesWord_btn=document.getElementById("timesWord-btn");
timesWord_btn.onclick=function(){
	for(i=1;i<10;i++){
		for(j=1;j<=i;j++){
			timesWord+=i+"*"+j+"="+j*i+" ";
			if(i===j){
				timesWord+="\n";
			}
		}
	}
	console.log(timesWord);
	var trList=[];
	var tdList=[];
	var timesTable=document.createElement("table");
	for(i=1;i<10;i++){
		trList[i-1]=document.createElement("tr");
		for(j=1;j<=i;j++){
			tdList[j-1]=document.createElement("td");
			var tdText=document.createTextNode(j+"*"+i+"="+j*i+" ");
			tdList[j-1].appendChild(tdText);
			trList[i-1].appendChild(tdList[j-1]);
		}
		timesTable.appendChild(trList[i-1]);
	}
	console.log(timesTable);
	timesWord_btn.parentNode.appendChild(timesTable);
	

	// console.log(timesWord);
	// var timesTable=document.createElement("div");
	// console.log(timesTable);
	// var textNode=document.createTextNode("我爱你");
	// console.log(textNode);
	// timesTable.appendChild(textNode);
	// console.log(timesTable);
	// console.log(timesWord_btn.parentNode.nodeType);
	// timesWord_btn.parentNode.appendChild(timesTable);
}


//根据时间输出问候语
	var say_hi=document.getElementById("say-hi");
	var date=new Date();
	var time=date.toTimeString().substring(0,2);
	console.log(time);
	if(Number(time)>=0&&Number(time)<12){
		say_hi.innerHTML="上午好";
	}else if(Number(time)>=12&&Number(time)<18){
		say_hi.innerHTML="下午好";
	}else{
		say_hi.innerHTML="晚上好";
	}
	
	






