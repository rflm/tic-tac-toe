var currentPlayer = player1;
var gameOver = false;
var winner;

function myFunction(field) {
  if (!gameOver) {
    if (currentPlayer == player1) {
      document.getElementById('current-player').innerHTML = "Current player: O";
      document.getElementById(field).innerHTML = player1.figure;
      player1.fields.push(field);
      document.getElementById('x-fields').innerHTML = "X: " + player1.fields;
      if (player1.hasFields('a1','a2','a3') || player1.hasFields('b1','b2','b3') ||
          player1.hasFields('c1','c2','c3') || player1.hasFields('a1','b1','c1') ||
          player1.hasFields('a2','b2','c2') || player1.hasFields('a3','b3','c3') ||
          player1.hasFields('a1','b2','c3') || player1.hasFields('a3','b2','c1')) {
            alert("Game over, player" + player1.figure + " is the winner");
      } else currentPlayer = player2;

    } else {
      document.getElementById('current-player').innerHTML = "Current player: X";
      document.getElementById(field).innerHTML = player2.figure;
      player2.fields.push(field);
      document.getElementById('o-fields').innerHTML = "O: " + player2.fields;
      if (player2.hasFields('a1','a2','a3') || player2.hasFields('b1','b2','b3') ||
          player2.hasFields('c1','c2','c3') || player2.hasFields('a1','b1','c1') ||
          player2.hasFields('a2','b2','c2') || player2.hasFields('a3','b3','c3') ||
          player2.hasFields('a1','b2','c3') || player2.hasFields('a3','b2','c1')) {
            alert("Game over, player" + player2.figure + " is the winner");
      } else currentPlayer = player1;
    }
  } 
}

var player1 = {
  figure: "X",
  fields: [],
  hasFields: function(field1, field2, field3) {
    if (player1.fields.contains(field1) && player1.fields.contains(field2) && player1.fields.contains(field3)) {
      return true;
    } else {
      return false;
    }
  }
};

var player2 = {
  figure: "O",
  fields: [],
  hasFields: function(field1, field2, field3) {
    if (player2.fields.contains(field1) && player2.fields.contains(field2) && player2.fields.contains(field3)) {
      return true;
    } else {
      return false;
    }
  }
};

Array.prototype.contains = function(obj) {
  var i = this.length;
  while (i--) {
      if (this[i] === obj) {
          return true;
      }
  }
  return false;
}