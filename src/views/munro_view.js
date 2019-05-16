const MunroView = function(container, munro) {
    this.munrosContainer = container;
    this.munro = munro;
}

MunroView.prototype.render = function(){
    const munroContainer = document.createElement('div');
    munroContainer.classList.add('munro');
    // console.log(munroContainer);
    

    const name = this.createNameHeading();
    munroContainer.appendChild(name);
    // console.log(name);

    const munroDetailsList = this.createMunroDetailsList();
    munroContainer.appendChild(munroDetailsList);
    // console.log(munroDetailsList);

    this.munrosContainer.appendChild(munroContainer);
}


MunroView.prototype.createNameHeading = function(){
    const name = document.createElement('h2');
    name.classList.add('munro-name');
    name.textContent = this.munro.name;
    return name
}

MunroView.prototype.createMunroDetailsList = function(){
    const detailsList = document.createElement('ul');
    detailsList.classList.add('munro-details');
    this.populateList(detailsList);
    return detailsList;
}

MunroView.prototype.populateList = function(detailsList){
    const meaningDetail = document.createElement('li');
    meaningDetail.textContent = `Meaning: ${this.munro.meaning}`;
    detailsList.appendChild(meaningDetail);

    const heightDetail = document.createElement('li');
    heightDetail.textContent = `Height: ${this.munro.height}`;
    detailsList.appendChild(heightDetail);
}



module.exports = MunroView;