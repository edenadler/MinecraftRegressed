
'use strict';
var selected_tool = '';
var showMaterialClass = '';
var ifShowMaterialClick = false;

var GameManager = function() {
    this.cells = this.initGame();
};
GameManager.prototype.initGame = function() {
    var cells = this._initGrid();
    this._setUpGame(cells);
    return cells;
};

GameManager.prototype._initGrid = function() {
    var cells = {};
    var self = this;
    for (var i = 0; i <20; i++){//i = y coord
        $(".grid").append('<div class="row"></div>');

        for (var j = 0; j<20; j++){
            $(".row").eq(i).append('<div class="cell"></div>');
            //make an instance of Cell called Cells[key] where key is the xy of the cell
            cells[j+''+i] = new Cell($(".row:eq("+i+") .cell").eq(j).attr("id", j+"-"+i), this._clickedCell.bind(this));//j = x coord. Makes id: #j-i
        }
    }
    $('.tool').click(function() {
        self.selectedTool = $(this).attr('id');
        selected_tool = self.selectedTool;

    });
    return cells;
};
GameManager.prototype._clickedCell = function(cell) {
    if (cell.isClickable(selected_tool) && ifShowMaterialClick === false ) {
        var currentDataType = cell.getAttr('data-type');
        cell.pullClass(currentDataType);
        $('#showMaterial').removeClass();
        $('#showMaterial').addClass('tool');
        $('#showMaterial').addClass(currentDataType);
        $('#showMaterial').attr('data-type', currentDataType);
        showMaterialClass = currentDataType;
    }
    $('#showMaterial').click(function() {
        ifShowMaterialClick = true;
    });
    if (ifShowMaterialClick) {
        cell.setClass(showMaterialClass);
        ifShowMaterialClick = false;
        $('#showMaterial').removeClass();
        $('#showMaterial').addClass('tool');

    }
}

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
        cells[index].setClass('stone');
    }
};
GameManager.prototype._makeTrunk = function(cells) {
    var trunkArr = ['1613', '1612', '1611'];
    for (let i = 0; i < trunkArr.length; i++) {
        let index = trunkArr[i];
        cells[index].setClass('trunk');
    }
};
GameManager.prototype._makeLeaf = function(cells) {
    var leafArr = ['313', '413', '513', '412', '1510', '1610', '1710', '159', '169', '179', '158', '168', '178'];
    for (let i = 0; i < leafArr.length; i++) {
        let index = leafArr[i];
        cells[index].setClass('leaf');
    }
};
GameManager.prototype._makeDirt = function(cells) {

    for (var m = 14; m < 20; m++) {
        for (var n = 0; n < 20; n++) {
            let index = '' + n + m + '';
            if (m === 14)
            cells[index].setClass('topDirt');
            else
                cells[index].setClass('dirt');
        }
    }
};

var game = new GameManager();