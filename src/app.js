const ScottishMunros = require('./models/scottish_munros.js');
const MunrosListView = require('./views/munros_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log('ready to rock');
    
    const munros = new ScottishMunros('https://munroapi.herokuapp.com/munros');
    munros.getData();

    const munrosListViewContainer = document.querySelector('div#munros');
    const munrosListView = new MunrosListView(munrosListViewContainer);
    munrosListView.bindEvents();

});