var game = {};

game.getCellAt = (function(x,y){ 
		// return $('.'+x+'-'+y);//returns class .x-y 
		return $('#'+x+'-'+y);//returns id #x-y 

	});

game.init=(function(){

	for (var i = 0; i <20; i++){//i = y coord
		$(".grid").append('<div class="row"></div>');

		for (var j = 0; j<20; j++){
			$(".row").eq(i).append('<div class="cell"></div>');
			$(".row:eq("+i+") .cell").eq(j).attr("id", j+"-"+i);//j = x coord. Makes id: #j-i

			// $(".row:eq("+i+") .cell").eq(j).addClass(j+'-'+i);//j = x coord
			}
	}

	//give every cell background color of blue:
	for (var i = 0; i<20; i++){
		for (var j = 0; j<20; j++){
			game.getCellAt(j,i).css("background-color", "#79a9f7");
		}
	}
	//give the soil its image:
	for (var i = 14; i < 20; i++) {
		for (var j = 0; j < 20; j++) {
			if (i===14)
				game.getCellAt(j,i).css("background", "url(./images/topDirt.png)").css("background-size", "cover");
			else
				game.getCellAt(j,i).css("background", "url(./images/dirt.jpg)").css("background-size", "cover");
		}
	}
	//bush:
	game.getCellAt(3,13).css("background", "url(./images/leaf.jpg)").css("background-size", "cover");
	game.getCellAt(4,13).css("background", "url(./images/leaf.jpg)").css("background-size", "cover");
	game.getCellAt(5,13).css("background", "url(./images/leaf.jpg)").css("background-size", "cover");
	game.getCellAt(4,12).css("background", "url(./images/leaf.jpg)").css("background-size", "cover");
	//tree trunk:
	game.getCellAt(16,13).css("background", "url(./images/tree.jpg)").css("background-size", "cover");
	game.getCellAt(16,12).css("background", "url(./images/tree.jpg)").css("background-size", "cover");
	game.getCellAt(16,11).css("background", "url(./images/tree.jpg)").css("background-size", "cover");
	//tree leaves:
	for (var i = 8; i < 11; i++) {
		for (var j = 15; j < 18; j++) {
			game.getCellAt(j,i).css("background", "url(./images/leaf.jpg)").css("background-size", "cover");
		}}
	//rocks:	
	game.getCellAt(19,13).css("background", "url(./images/stone.jpg)").css("background-size", "cover");
	game.getCellAt(14,13).css("background", "url(./images/stone.jpg)").css("background-size", "cover");
	game.getCellAt(13,13).css("background", "url(./images/stone.jpg)").css("background-size", "cover");		
	//cloud:
	game.getCellAt(7,5).css("background-color", "white");
	game.getCellAt(4,6).css("background-color", "white");
	game.getCellAt(5,6).css("background-color", "white");
	game.getCellAt(6,6).css("background-color", "white");
	game.getCellAt(7,6).css("background-color", "white");
	game.getCellAt(8,6).css("background-color", "white");
	game.getCellAt(10,6).css("background-color", "white");
	game.getCellAt(11,6).css("background-color", "white");
	game.getCellAt(3,7).css("background-color", "white");
	game.getCellAt(4,7).css("background-color", "white");
	game.getCellAt(5,7).css("background-color", "white");
	game.getCellAt(6,7).css("background-color", "white");
	game.getCellAt(7,7).css("background-color", "white");
	game.getCellAt(8,7).css("background-color", "white");
	game.getCellAt(9,7).css("background-color", "white");
	game.getCellAt(10,7).css("background-color", "white");
	game.getCellAt(11,7).css("background-color", "white");
	game.getCellAt(8,8).css("background-color", "white");
	game.getCellAt(9,8).css("background-color", "white");
});


game.clickOnTools = function(){

};

game.clickOnBoxes = function(){


};

game.renderBoard = function(){

};


game.init();
