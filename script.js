var currentPlayer = player1;

function myFunction(field) {
  if (currentPlayer == player1) {
    document.getElementById('current-player').innerHTML = "Current player: O";
    document.getElementById(field).innerHTML = player1.figure;
    player1.fields.push(field);
    document.getElementById('x-fields').innerHTML = "X: " + player1.fields
    
  /*  if (player1.fields.includes('a1','a2','a3') || player1.fields.includes('b1','b2','b3') ||
    player1.fields.includes('c1','c2','c3') || player1.fields.includes('a1','b1','c1') ||
    player1.fields.includes('a2','b2','c2') || player1.fields.includes('a3','b3','c3') ||
    player1.fields.includes('a1','b2','c3') || player1.fields.includes('a3','b2','c1')) {
      alert("Player X win");
    } */

    currentPlayer = player2;
  } else {
    document.getElementById('current-player').innerHTML = "Current player: X";
    document.getElementById(field).innerHTML = player2.figure;
    player2.fields.push(field);
    document.getElementById('o-fields').innerHTML = "O: " + player2.fields;
/*
    if (player2.fields.includes('a1','a2','a3') || player2.fields.includes('b1','b2','b3') ||
    player2.fields.includes('c1','c2','c3') || player2.fields.includes('a1','b1','c1') ||
    player2.fields.includes('a2','b2','c2') || player2.fields.includes('a3','b3','c3') ||
    player2.fields.includes('a1','b2','c3') || player2.fields.includes('a3','b2','c1')) {
      alert("Player O win");
    }
*/
    currentPlayer = player1;
  }
}

var player1 = {
  figure: "X",
  fields: []
};

var player2 = {
  figure: "O",
  fields: []
};