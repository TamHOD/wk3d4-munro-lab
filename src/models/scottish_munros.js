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
            return data
            // console.log(data);
        });
        
        
}

module.exports = ScottishMunros;