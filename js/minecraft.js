var game = {};

var getCellAt = function(x,y){ 
		return $('.'+x+'-'+y);
	}

game.init=(function(){

	for (var i = 0; i <20; i++){//i = y coord
		$(".grid").append('<div class="row"></div>');

		for (var j = 0; j<20; j++){
			$(".row").eq(i).append('<div class="cell"></div>');
			$(".row:eq("+i+") .cell").eq(j).addClass(j+'-'+i);//j = x coord
			}
	}

	//give every cell background color of blue:
	for (var i = 0; i<20; i++){
		for (var j = 0; j<20; j++){
			getCellAt(j,i).css("background-color", "#79a9f7");
		}
	}

});


game.clickOnTools = function(){

};

game.clickOnBoxes = function(){


};

game.renderBoard = function(){

};


game.init();
