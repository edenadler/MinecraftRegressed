//"http://slavchoslavchev.com/tutorials/building-a-grid-matrix-in-javascript/
(function(global){

	"use strict";

	//assign cell x and y values that it occupies and give it a reference to the jQuery element that it represents
	//cell constructor function
	function Cell(config){
		this.$el = config.$element;
		this.x = config.x;
		this.y = config.y;
	}

	//grid constructor function
	function Grid(config){
		this.grid=[]; //this will be a multidimensional array
		this.cells = [];
		this.rowsCount = config.rows;
		this.colsCount = config.cols;
		this.rows  =[];
		this.cols = [];
		if (config.render){
			this.placeholder = config.render.placeholder;
			this.render();
		}
	}

	Grid.prototype = {
		createCell: function(config){
			return new Cell(config);
		},
		getCellAt: function(x,y){
			if (!this.grid[y]){
				console.warn("No such Y coodinate");
				return false;
			}
			if (!this.grid[y][x]){
				console.warn("No such X coordinate");
				return false;
			}
			return this.grid[y][x];
		},
		render: function(options){
			if(options && options.placeholder){
				this.placeholder = options.placeholder;
			}
			this.$placeholder = $(this.placeholder);
			if (!this.placeholder || this.$placeholder.length === 0){
				console.error('Placeholder is not present');
				return;
			}
			var i, j, $row, $cell, cell, cellId = 0;
			for (i = 0; i<this.rowsCount; i++){
				this.grid[i] = [];
				$row = $('<div class="row"></div>').prependTo(this.$placeholder);
				for (j = 0; j<this.colsCount; j++){
					$cell = $('<div class="cell"></div>').appendTo($row);
					cell = this.createCell({$element: $cell, x: j, y:i});
					this.grid[i].push(cell);
					this.cells.push(cell);
				}
			}
			//rows
			var self = this;
			this.grid.forEach(function(row){
				self.rows.push(row);
			});
		}
	};

	global.Grid = Grid;

}(window));
