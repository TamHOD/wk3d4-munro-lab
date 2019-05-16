const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(selectElement){
    this.element = selectElement;
}

SelectView.prototype.bindEvents = function(){
    PubSub.subscribe('Regions:region-names-ready', (event) => {
        this.populate(event.detail);
    });

    this.element.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        console.log(selectedIndex)
        PubSub.publish('SelectView:change', selectedIndex);
    })
}

SelectView.prototype.populate = function(regions) {
    regions.forEach((region, index) => {
        const regionOption = this.createOption(region, index);
        this.element.appendChild(regionOption);
    });
}

SelectView.prototype.createOption = function(name, index){
    const option = document.createElement('option');
    option.textContent = name;
    option.value = name;
    return option;
}

module.exports = SelectView;