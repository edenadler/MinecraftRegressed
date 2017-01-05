class Cell {
    constructor(element, clickCb) {
        this.element = element;
        this.element.on('click', function(){
            clickCb(this);
        }.bind(this)); //'this' in this context: refers to the specific cell (with all its functions) that triggered the click event
        this.setBackgroundColor('#79a9f7');
    }
    isClickable(toolId) {
        if (this.imgClass === 'leaf' && toolId === 'axe') {
            return true;
        }
        if (this.imgClass === 'stone' && toolId === 'pickaxe') {
            return true;
        }
        if (this.imgClass === 'dirt' && toolId === 'shovel') {
            return true;
        }
        return false;
    }
    setClass(imgClass) {
        this.imgClass = imgClass;
        this.element.addClass(imgClass);
    }
    setBackgroundColor(backgroundColor) {
        this.element.css('background-color', backgroundColor);
    }
    setBackgroundImg(backgroundImg) {
        this.element.css('background', backgroundImg).css('background-size', 'cover');
        return this;
    }
}