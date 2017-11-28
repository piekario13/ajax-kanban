var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2534',
  'X-Auth-Token': '273408f40c683b322ad8e340e3c0d8f6'
};
$.ajaxSetup({
	headers: myHeaders
});
$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function (column) {
        var col = new Column(column.id, column.name);
        board.createColumn(col);    
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
    cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        col.createCard(card);
      })
}