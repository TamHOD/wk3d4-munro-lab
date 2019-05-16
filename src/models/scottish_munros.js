const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const ScottishMunros = function (url) {
    this.munros = [];
    this.url = url
}

ScottishMunros.prototype.getData = function () {
    const requestHelper = new RequestHelper(this.url);

    requestHelper.get()
        .then((data) => {
            this.munros = data;
            PubSub.publish('Munros:munro-data-ready', this.munros)
            

            const regionNames = this.getRegionNames(this.munros);
            PubSub.publish('Regions:region-names-ready', regionNames)
            console.log(regionNames);

            PubSub.subscribe('SelectView:change', (event) => {
                const region = event.detail
                console.log(region);
                
                const munrosByRegion = this.filterByRegion(region, data)
                console.log(munrosByRegion);
                
                PubSub.publish('Munros:munros-by-region', munrosByRegion)
            })

        });
}

ScottishMunros.prototype.getRegionNames = function(munros){
    return munros
    .map(munro => munro.region)
    .filter((region, index, regions) => regions.indexOf(region)=== index)
}

ScottishMunros.prototype.filterByRegion = function (region, munros) {
    return munros.filter((munro) => {
        // console.log(region);
        // console.log(munro);
        
        
        if (munro.region == region) {
            return munro 
        }  
    })
}

module.exports = ScottishMunros;