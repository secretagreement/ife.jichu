const $add_btn=$('#add-btn');
const $minus_btn=$('#minus-btn');
const $times_btn= $('#times-btn');
const $divide_btn= $('#divide-btn');
const $result=$('#result');


const $first_number = $('#first-number');
const $second_number = $('#second-number');



// function dd(a){
// 	console.log(a);
// }

// $add_btn.on('click',count("+"));

// function count(){
// 	var first=Number($first_number.val());
// 	var second=Number($second_number.val());

	

// }

$add_btn.on("click",function(){
	var first=Number($first_number.val());
	var second=Number($second_number.val());
 	$result.html(first+second);
})

$minus_btn.click(function(){
	var first=Number($first_number.val());
	var second=Number($second_number.val());
	$result.html(first-second);
})


$times_btn.on("click",function(){
	var first=Number($first_number.val());
	var second=Number($second_number.val());
	$result.html(first*second);
})


$divide_btn.click(function(){
	var first=Number($first_number.val());
	var second=Number($second_number.val());
	$result.html(first/second);
})

function second(){
		var a=$('#dec-number').val();
		console.log(a);
		console.log(a.toString(2));

		$('#second-result').html(Number(a).toString(2));//这个方法转换为2进制的前提是为Number对象

}


$('#three-btn').on('click',function(){
	for(let i=0;i<=100;i++){
		if(i%3===0||String(i).indexOf("3")!==-1){
			console.log('pa');
		}else {
			console.log(i);
		}
	}
})



function timesWord(){
	// let timesWord='';
	// for(var i=1;i<=9;i++){
	// 	for(var j=1;j<=i;j++){
	// 		timesWord+=i+'*'+j+'='+i*j;
	// 	}
	// 	timesWord+='\n';
	// }
	// console.log(timesWord);


	console.log('ss');

	let table=$('<tabel>sdfasf</tabel>');
	let trList=[];
	let tdList=[];
	let test="";
	for(let i=1;i<=9;i++){
		trList[i]=$('<tr></tr>');
		for(var j=1;j<=i;j++){
			tdList[j]=$('<td></td>');
			test=i+"*"+j+"="+i*j;
			tdList[j].append(test);
			trList[i].append(tdList[j]);
		}
		table.append(trList[i]);
	}

	console.log(table);

	$('body').append(table);


}



