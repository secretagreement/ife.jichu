
function submit(){
	var name=document.getElementById("name").value;
	console.log(name);
}

document.onkeyup=function(e){
	var name=document.getElementById("name").value;
	switch(e.keyCode){
		case 13:
			console.log(name);
			break;
		case 27:
			document.getElementById("name").value="";
			break;
	}
}
var school=document.getElementById("school");
var company=document.getElementById("company");
var school_select=document.getElementById("school-select");
var company_select=document.getElementById("company-select");
school.onchange=function(){
	school_select.style.display="inline";
	company_select.style.display="none";
}
company.onchange=function(){
	school_select.style.display="none";
	company_select.style.display="inline";
}



// var list=document.querySelectorAll("li");
// for(var i=i=0,len=list.length;i<len;i++){
// 	list[i].onclick=function(e){
// 		var t=e.target;
// 		var c=t.style.backgroundColor;
// 		var p=document.getElementById("color-picker");
// 		console.log(p);
// 		p.innerHTML=c;
// 		p.style.color=c;
// 	}
// }

var ul=document.querySelector("#palette");
ul.onclick=function(e){
	sourse=e.target||e.srcElement;
	if(sourse.nodeName.toLowerCase()=="li"){
		var p=document.getElementById("color-picker");
		console.log(p);
		p.innerHTML=sourse.style.backgroundColor;
		p.style.color=sourse.style.backgroundColor;
	}
	e.stopPropagation();
}


//计时器动画
var fade_obj=document.getElementById("fade-obj");
var fade_btn=document.getElementById("fade-btn");
var fade_btn1=document.getElementById("fade-btn1");
// fade_btn.onclick=function(){
// 	fade_btn.style.disabeld=true;
// 	setTimeout("animation()",5000 );
// 	fade_btn.innerHTML="淡入";
// 	fade_btn.style.disabeld=false;
// }

function fadeIn(){
	console.log("淡入");
	fade_btn.disabled=true;
	var n=10;
	timer=setInterval(function(){
		fade_obj.style.opacity=n/10;
		n--;
		if(n<0){
			clearInterval(timer);
			fade_btn.innerHTML="淡出";
			fade_btn.disabled=false;
		}

	},500);
}

function fadeOut(){
	console.log("淡出");
	fade_btn.disabled=true;
	var n=0;
	timer=setInterval(function(){
		n++;
		fade_obj.style.opacity=n/10;
		if(n==10){
			clearInterval(timer);
			fade_btn.innerHTML="淡入";
			fade_btn.disabled=false;
		}	
	},500)

}

fade_btn.onclick=function(){
	if(fade_btn.innerHTML=="淡出"){
		fadeOut();//淡出
	}else if(fade_btn.innerHTML=="淡入"){
		fadeIn();//淡入
	}
	
}

var banner=document.getElementById("banner");

function animation(){
	var n=0;
	timer=setInterval(function(){
		
		if(n>=8160/17-8160){
			banner.style.backgroundPositionY=n+"px";
			// console.log(banner.style.backgroundPositionY);
		}else{
			clearInterval(timer);
		}
		n=n-8160/17;
		console.log(n);
	},95)


	timer1=setInterval(function(){
		if(n<=0){
			banner.style.backgroundPositionY=n+"px";
			console.log(banner.style.backgroundPositionY);
		}else{
			 clearInterval(timer1);
		}
		n=n+8160/17;
	},90)
}

// setInterval(console.log("sadfsad"),95);

// animation();

