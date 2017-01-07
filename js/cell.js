class Cell {
    constructor(element) {
        this.element = element;
        // this.element.on('click', function(){
        //     clickCb(this); //what is click call back function?
        //}.bind(this)); //'this' in this context: refers to the specific cell (with all its functions) that triggered the click event
        this.setBackgroundColor('#79a9f7');
    }
    isClickable(toolId) {
        console.log(this);

        if (this.imgClass === 'leaf' && toolId === 'axe') {
            console.log('leaf');
            return true;
        }
        if (this.imgClass === 'trunk' && toolId === 'axe') {
            console.log(this.imgClass);
            console.log('trunk');
            return true;
        }
        if (this.imgClass === 'stone' && toolId === 'pickaxe') {
            console.log('stone');
            return true;
        }
        if (this.imgClass === 'dirt' && toolId === 'shovel') {
            console.log('dirt');
            return true;
        }
        if (this.imgClass === 'topDirt' && toolId === 'shovel') {
            console.log('topDirt');
            return true;
        }
        return false;
    }
    setClass(imgClass) {
        this.imgClass = imgClass;
        this.element.addClass(imgClass);
        this.element.attr('data-type', imgClass);
    }
    setBackgroundColor(backgroundColor) {
        this.element.css('background-color', backgroundColor);
    }
    setBackgroundImg(backgroundImg) {
        this.element.css('background', backgroundImg).css('background-size', 'cover');
        return this;
    }
    removeClass(imgClass) {
        this.imgClass = imgClass;
        this.element.removeClass(imgClass);
    }
}