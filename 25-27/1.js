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