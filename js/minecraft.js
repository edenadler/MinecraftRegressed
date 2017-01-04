var game = {};

game.init=(function(){

	for (var i = 0; i <20; i++){
		$(".grid").append('<div class="row"></div>');
		$(".row").eq(i).attr("data-x",i);

		for (var j = 0; j<20; j++){
			$(".row").eq(i).append('<div class="cell"></div>');
			$(".row:eq("+i+") .cell").eq(j).attr("data-y",j);
			$(".grid .row:eq("+i+") .cell:eq("+j+")").click(getCellAt);
			}
	}
	var getCellAt = function(x,y){
		return $(".row:eq("+x+") .cell:eq("+y+")");
	}
	//sky
	for (var i = 7; i<20; i++){
		for (var j = 0; j<20; j++){
			$(".grid").getCellAt(j,i).css('background-color', "#79a9f7");
		}
	}

});

// game.getCellAt = function(x,y){
// 	return $(".row:eq("+x+") .cell:eq("+y+")");
// }
// //sky
// for (var i = 7; i<20; i++){
// 	for (var j = 0; j<20; j++){
// 		$(".grid").game.getCellAt(j,i).css('background-color', "#79a9f7");
// 	}
// }

game.clickOnTools = function(){

};

game.clickOnBoxes = function(){

};

game.renderBoard = function(){

};


game.init();
