'use strict';

var GameManager = function() {
	this.cells = this.initGame();
	this.selectedTool = '';
	// this.clickedCell = '';
};

GameManager.prototype.initGame = function() {
	var cells = this._initGrid();
	this._setUpGame(cells);
	return cells;
};

GameManager.prototype._initGrid = function() {
	var self = this; //points to GameManager
	var cells = {};
    for (var i = 0; i <20; i++){//i = y coord
        $(".grid").append( $('<div class="row"></div>'));

        for (var j = 0; j<20; j++){
            var currentCell = $(".row").eq(i).append('<div class="cell"></div>');
            //make an instance of Cell called cells[key] where key is the xy of the cell
            cells[j+''+i] = new Cell($(".row:eq("+i+") .cell").eq(j).attr("id", j+"-"+i));//j = x coord. Makes id: #j-i
            var cellsInstance = cells[j+''+i];

			currentCell.click(function(){
				var currentDataType = currentCell.attr('data-type');
                console.log(currentDataType);
				if(cellsInstance.isClickable(self.selectedTool)) {
					currentCell.removeAttr('data-type');
					$('#showMaterial').addClass(currentDataType);
					console.log(currentDataType);
				}
			});
        }
    }

    $('.tool').click(function() {
    	self.selectedTool = $(this).attr('id');
	});

        return cells;
};

GameManager.prototype._setUpGame = function(cells) {
    this._makeCloud(cells);
    this._makeStone(cells);
    this._makeLeaf(cells);
    this._makeTrunk(cells);
    this._makeDirt(cells);
};
GameManager.prototype._makeCloud = function(cells) {
    var cloudArr = ['75', '46', '56', '66', '76', '86', '106', '116', '116', '37', '47', '57', '67', '77', '87', '97', '107', '117', '88', '98'];

    for (let i = 0; i < cloudArr.length; i++) {
        let index = cloudArr[i];
        cells[index].setBackgroundColor('white');
    }
};
GameManager.prototype._makeStone = function(cells) {
    var stoneArr = ['1913', '1413', '1313'];
    for (let i = 0; i < stoneArr.length; i++) {
        let index = stoneArr[i];
		cells[index].setBackgroundImg('url(./images/stone.jpg)').setClass('stone');
    }
};
GameManager.prototype._makeTrunk = function(cells) {
    var trunkArr = ['1613', '1612', '1611'];
    for (let i = 0; i < trunkArr.length; i++) {
        let index = trunkArr[i];
        cells[index].setBackgroundImg('url(./images/tree.jpg)').setClass('trunk');
    }
};
GameManager.prototype._makeLeaf = function(cells) {
    var leafArr = ['313', '413', '513', '412', '1510', '1610', '1710', '159', '169', '179', '158', '168', '178'];
	for (let i = 0; i < leafArr.length; i++) {
        let index = leafArr[i];
        cells[index].setBackgroundImg('url(./images/leaf.jpg)').setClass('leaf');
    }
};
GameManager.prototype._makeDirt = function(cells) {

    for (var m = 14; m < 20; m++) {
    	for (var n = 0; n < 20; n++) {
            let index = '' + n + m + '';
            if (m === 14)
    			cells[index].setBackgroundImg('url(./images/topDirt.png)').setClass('dirt');
			else
				cells[index].setBackgroundImg('url(./images/dirt.jpg)').setClass('dirt');
		}
	}
};

var game = new GameManager();