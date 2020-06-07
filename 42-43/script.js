function restaurant(cash,seats,staff){
	this.cash=cash;//金钱
	this.seats=seats;//座位
	this.staff=staff;//职员列表
	this.hire=function(staff){
		console.log('录用'+staff);
	}
	this.fire=function(staff){
		console.log('开除'+staff);
	}
}

function Staff(id,name,money){
	this.id=id;
	this.name=name;
	this.money=money;
	this.work=function(){}
}

Staff.prototype.work=function(){
	
}

function waiter(){

}

waiter.prototype=Obhect.create(Staff.prototype);
waiter.prototype.constructor=Staff;
waiter.prototype.



function customer(){
	this.order=function(){}
	this.eat=function(){}
}

function dishes(name,cost,price){
	this.name=name;
	this.cost=cost;
	this.price=price;
}


