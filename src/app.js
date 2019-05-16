const ScottishMunros = require('./models/scottish_munros.js');
const MunrosListView = require('./views/munros_list_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log('ready to rock');
    
    const selectRegion = document.querySelector('select#munros-regions');
    const selectView = new SelectView(selectRegion);
    selectView.bindEvents();

    const munros = new ScottishMunros('https://munroapi.herokuapp.com/munros');
    munros.getData();

    

    const munrosListViewContainer = document.querySelector('div#munros');
    const munrosListView = new MunrosListView(munrosListViewContainer);
    munrosListView.bindEvents();

    

});