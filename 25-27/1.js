//机器人
function Go(){
	console.log("Go");
}

function GoSteps(n){
	if(n==null){
		Go();
	}
	if(isNaN(n)==false&&n>=0){
		var num=parseInt(n);
		while(num--){
			Go();
		}
	}
	if(n==true){
		Go();
	}
}

GoSteps("1.5");


//钟表显示
var clock=document.getElementById("clock");
function getDate(date){
	var date_arr=date.toLocaleDateString().split("/");
	for(i=0;i<=date_arr.length-1;i++){
		if(date_arr[i].length<2){
			date_arr[i]="0"+date_arr[i];
		}
	}
	return date=date_arr[0]+"年"+date_arr[1]+"月"+date_arr[2]+"日";
}
function getDay(date){
	var week;
	switch(date.getDay()){
		case 0:
			week="星期天"; break;
		case 1:
			week="星期一"; break;
		case 2:
			week="星期二"; break;
		case 3:
			week="星期三"; break;
		case 4:
			week="星期四"; break;
		case 5:
			week="星期五"; break;
		case 6:
			week="星期六"; break;
	}
	return week;
}
function getTime(date){
	return date.toTimeString().substring(0,8);
}
setInterval(function(){
	var date=new Date();
	clock.innerHTML=getDate(date)+getDay(date)+getTime(date);
},1000)


//select选中时间和现在时间差距
var result=document.getElementById("result-wrapper");
var year=document.getElementById("year-select");
var month=document.getElementById("month-select");
var day=document.getElementById("day-select");
var hour=document.getElementById("hour-select");
var minite=document.getElementById("minite-select");
var second=document.getElementById("second-select");


function day_change(y,m){
	var Date_num = new Date(y,m,0).getDate(); //选中月的天数
	var Date_option = document.querySelectorAll("#day-select option");
	var option_num = Date_num - Date_option.length;  //选中月天数和当前option比
	console.log(Date_num+","+Date_option.length+","+option_num);
	if(option_num>0){
		for(i=1;i<=option_num;i++){
			var option=document.createElement("option");
			option.appendChild(document.createTextNode(Date_option.length+i));
			day.appendChild(option);
		}
	}
	if(option_num==0){
		return;
	}
	if(option_num<0){
		var option_remove=option_num;
		while(option_remove<0){
			var didi=document.querySelectorAll("#day-select option");
			day.removeChild(didi[didi.length-1]);
			option_remove++;
		}
	}

	console.log("day_change");
}

function timeSpan(date){


	timeSpan[0]=new Date().getTime()-date.getTime();
	timeSpan[1]=Math.abs(timeSpan[0])/(24*60*60*1000);//天
	timeSpan[2]=(Math.abs(timeSpan[0])%(24*60*60*1000))/(60*60*1000);//时
	timeSpan[3]=Math.abs(timeSpan[0])%(60*60*1000)/(60*1000);//分
	timeSpan[4]=Math.abs(timeSpan[0])%(60*1000)/1000;//秒
	return timeSpan;
}

function on_change(){
	var year_select=year.options[year.selectedIndex].text;
	var month_select=month.options[month.selectedIndex].text;
	var day_select=day.options[day.selectedIndex].text;
	var week=new Date(year_select,month_select,day_select);
	var hour_select=hour.options[hour.selectedIndex].text;
	var minite_select=minite.options[minite.selectedIndex].text;
	var second_select=second.options[second.selectedIndex].text;

	day_change(year_select,month_select);

	var select_time=new Date(year_select,month_select,hour_select,hour_select,minite_select,second_select);

	timeSpan(select_time);

	var result_word=new Array();
	result_word[0]="现在距离";
	result_word[1]=year_select+"年"+month_select+"月"+day_select+"日"+getDay(week)+hour_select+":"+minite_select+":"+second_select;
	result_word[2]=timeSpan[0]>=0?"已经过去":"还有";
	result_word[3]=timeSpan[0]+"天"+timeSpan[1]+"小时"+timeSpan[2]+"分"+timeSpan[3]+"秒";

	result.innerHTML=result_word.join();
}



year.onchange=on_change;
month.onchange=on_change;







