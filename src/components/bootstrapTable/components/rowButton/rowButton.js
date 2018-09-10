function RowButton(fontAwesomeClassArray = ["fas", "fa-check"], cssClassArray = ["btn", "btn-success"], toggle = false, clickFunction){
    this.activeStatus = true;
    this.btnClass = cssClassArray.find(value => /btn-\w+/.test(value));
    this.HTML = document.createElement('button');
    this.initialize(fontAwesomeClassArray, cssClassArray, toggle, clickFunction);
}

RowButton.prototype = {
    initialize: function(fontAwesomeClassArray, cssClassArray, toggle, clickFunction){
        this.setCSS(cssClassArray);
        this.HTML.appendChild(this.createIcon(fontAwesomeClassArray));
        if(toggle)
            this.setClickFunction(this.toggleAppearance.bind(this));
        this.setClickFunction(clickFunction);
    },
    createIcon: function(fontAwesomeClassArray){
        let icon = document.createElement('i');
        fontAwesomeClassArray.forEach((faClass)=>{icon.classList.toggle(faClass)});
        return icon;
    },
    setClickFunction: function(clickFunction){
        this.HTML.addEventListener('click', clickFunction);
    },
    setCSS: function(array){
        array.forEach((cssClass)=>{
            this.HTML.classList.toggle(cssClass);
        })
    },
    toggleAppearance: function() {
        this.HTML.classList.toggle(this.btnClass);
        this.HTML.classList.toggle('btn-secondary');
        this.activeStatus = !this.activeStatus;
    }

};

module.exports = {
    RowButton: RowButton
};