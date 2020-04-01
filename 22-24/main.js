var btn_list=document.getElementsByTagName("button");
var radio_a=document.getElementById("radio-a");
var num_a=document.getElementById("num-a");
var radio_b=document.getElementById("radio-b");
var num_b=document.getElementById("num-b");
var result=document.getElementById("result");
var checked;
var unchecked;



//选中的输入内容为数字
function isNum(){
	if(radio_a.checked==true){
		checked=num_a;
	}else{
		checked=num_b;
	}

	try{
		if(checked.value!=""&&isNaN(checked.value)==false){
			result.innerHTML=checked.value;
		}else{
			
			throw "请于选中栏中输入数字";
		}
	}catch(e){
		result.innerHTML="请于选中栏中输入数字";
		console.log(e);
		return 1;
	}
}

function allIsNum(){
	if(radio_a.checked==true){
		checked=num_a;
		unchecked=num_b;
	}else{
		checked=num_b;
		unchecked=num_a;
	}
	try{
		if(checked.value==""||unchecked.value=="") throw "请分别输入内容";
		if(isNaN(checked.value)==true||isNaN(unchecked.value)==true)
			throw "请分别输入数字";
	}catch(e){
		result.innerHTML="请分别输入数字";
		console.log(e);
		return 2;
	}
}

btn_list[0].onclick=isNum;

//取绝对值 
btn_list[2].onclick=function(){
	if(isNum()==1) return;
	if(checked.value>=0){
		result.innerHTML=checked.value;
	}else{
		result.innerHTML=0-checked.value;
	}
}

//上舍入
btn_list[3].onclick=function(){
	if(isNum()==1) return;
	result.innerHTML=Math.ceil(checked.value);
}

//下舍入
btn_list[4].onclick=function(){
	if(isNum()==1) return;
	result.innerHTML=Math.floor(checked.value);
}

//四舍五入为最接近的整数
btn_list[5].onclick=function(){
	if(isNum()==1) return;
	result.innerHTML=Math.round(checked.value);
}

//把a四舍五入为b个小数位数的数字
btn_list[1].onclick=function(){
	if(allIsNum()==2) return;
	try{
		if(num_b.value<0) throw "b不能小于0";
	}catch(e){
		result.innerHTML="b不能小于0";
		return;
	}
	console.log(num_a.value); console.log(typeof(num_a.value));
	result.innerHTML=Number(num_a.value).toFixed(num_b.value);
}


//返回a和b中的最低值
btn_list[7].onclick=function(){
	if(allIsNum()==2) return;
	if(checked.value==unchecked.value){
		result.innerHTML="A和B一样大";
	}else{
		result.innerHTML=checked.value>unchecked.value?unchecked.value:checked.value;
	}
}

//返回a和b中的最高值
btn_list[6].onclick=function(){
	if(allIsNum()==2) return;
	if(checked.value==unchecked.value){
		result.innerHTML="A和B一样大";
	}else{
		result.innerHTML=checked.value>unchecked.value?checked.value:unchecked.value;
	}
}

//获取选中输入的内容长度
var radio_c=document.getElementById("radio-c");
var radio_d=document.getElementById("radio-d");
var str_a=document.getElementById("str-a");
var str_b=document.getElementById("str-b");
var num_c=document.getElementById("num-c");
var num_d=document.getElementById("num-d");
var result2=document.getElementById("result2");
var checked_str;
var unchecked_str;

function checked(){
	if(radio_c.checked==true){
		checked_str=str_a;
		unchecked_str=str_b;
	}else{
		checked_str=str_b;
		unchecked_str=str_a;
	}
}
//输出字符长度
btn_list[8].onclick=function(){
	checekd();
	result2.innerHTML=(checked_str.value).length;
}
//当前选中输入中的第3个字符
btn_list[9].onclick=function(){
	checked();
	result2.innerHTML=(checked_str.value)[2];//Array("12345")==[12345]; "12345"[1]==2;
}
//两个输入框的文字连接在一起输出
btn_list[10].onclick=function(){
	// result2.innerHTML=str_a.value+str_b.value;
	result2.innerHTML=str_a.value.concat(str_b.value);
}
//输入b的内容，在输入A的内容中第一次出现的位置
btn_list[11].onclick=function(){
	result2.innerHTML=str_a.value.indexOf(str_b.value)==-1?"没有找到":str_a.value.indexOf(str_b.value)+1;
}
//输入a的内容，在输入b的内容中第一次出现的位置
btn_list[12].onclick=function(){
	result2.innerHTML=str_b.value.lastIndexOf(str_a.value)==-1?"没有找到":str_b.value.lastIndexOf(str_a.value)+1;
}
//slice获取选中输入框内容的部分内容，参数为num-a及num-b
btn_list[13].onclick=function(){
	checked();
	//"123456".slice(1,undefined)等于23456
	try{
		if(num_c.value==""||num_d.value=="")
			throw "请分别内容"
	}catch(e){
		result2.innerHTML=e;
		return;
	}
	
	result2.innerHTML=checked_str.value.slice(num_c.value,num_d.value);
}

//当前选中输入框的行数
btn_list[14].onclick=function(){
	checked();
	result2.innerHTML=checked_str.value.split("\n").length+1;
}

//用substr获取选中框内容的子字符串，参数为num-a及num-b
btn_list[15].onclick=function(){
	checked();
	result2.innerHTML=checked_str.value.substr(num_c.value,num_d.value);
}

//把所选输入框中的内容全部转为大写
btn_list[16].onclick=function(){
	checked();
	result2.innerHTML=checked_str.value.toUpperCase();
}
//把所选输入框中的内容全部转为小写
btn_list[17].onclick=function(){
	checked();
	result2.innerHTML=checked_str.value.toLowerCase();
}

//把所选输入框中内容的半角空格全部去除
btn_list[18].onclick=function(){
	checked();
	var checked_value=checked_str.value.split("");
	console.log(checked_value[3]);
	for(i=0;i<=checked_value.length-1;i++){
		if(checked_value[i]=="　"||checked_value[i]==" "){
			checked_value.splice(i,1);
			i=-1;
		}
	}
	console.log(checked_value);
	result2.innerHTML=checked_value.join("");
	console.log(result2.innerHTML);
	
}
//把所选输入框中内容的a全部替换成另外一个输入框中的内容
btn_list[19].onclick=function(){
	str_a.value=str_b.value;
}

//编码三

/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/

function diyIrim(str){
	var result="";
	var head=0;
	var foot=0;
	str_arr=str.split("");  //split()如果没有参数，等同于Array(); Array("str")=["str"];
	for(i=0;i<=str_arr.length-1;i++){
		if(str_arr[i]==" "||str_arr[0]=="　"){
			head+=1;
		}else{
			break;
		}
		
	}
	for(j=0;j<=str_arr.length-1;j++){
		if(str_arr[str_arr.length-1-j]==" "||str_arr[str_arr.length-1-j]=="　"){
				foot+=1;
		}else{
			break;
		}
	}
	str_arr.splice(str_arr.length-foot,foot);
	str_arr.splice(0,head);
	console.log(str_arr.join(""));
}

diyIrim("   dgfasdf  sadf  ");

/*去掉字符串str中，连续重复的地方*/

function removeRepetition(str){
	var result="";
	str_arr=str.split("");
	for(i=0;i<=str_arr.length-1;i++){
		if(str_arr[i]==str_arr[i+1]){
			console.log(i);
			str_arr.splice(i,1);
			console.log(str_arr);
			i=-1;//为什么要-1不是0呢，因为这里重置i后进循环会i++；
		}
	}
	result=str_arr.join("");
	return result;
}

removeRepetition("");

//
// var tree = {
//     "id": 0,
//     "name": "root",
//     "left": {
//         "id": 1,
//         "name": "Simon",
//         "left": {
//             "id": 3,
//             "name": "Carl",
//             "left": {
//                 "id": 7,
//                 "name": "Lee",
//                 "left": {
//                     "id": 11,
//                     "name": "Fate"
//                 }
//             },
//             "right": {
//                 "id": 8,
//                 "name": "Annie",
//                 "left": {
//                     "id": 12,
//                     "name": "Saber"
//                 }
//             }
//         },
//         "right": {
//             "id": 4,
//             "name": "Tony",
//             "left": {
//                 "id": 9,
//                 "name": "Candy"
//             }
//         }
//     },
//     "right": {
//         "id": 2,
//         "name": "right",
//         "left": {
//             "id": 5,
//             "name": "Carl",
//         },
//         "right": {
//             "id": 6,
//             "name": "Carl",
//             "right": {
//                 "id": 10,
//                 "name": "Kai"
//             }        
//         }
//     }
// }

// function findIdByName(name){

// }


var hani=document.getElementById("hani");
var hani_btn=document.getElementById("hani-btn");
var hani_value="今天是2020年1月20号";
var word_node=0;
timer=setInterval(function(){
	hani.innerHTML=hani_value.substring(0,word_node);
	word_node++;
	if(hani.innerHTML==hani_value){
		hani_btn.style.animationPlayState="running";
		hani_btn.style.opacity="1";
		clearInterval(timer);
	}
},150);
