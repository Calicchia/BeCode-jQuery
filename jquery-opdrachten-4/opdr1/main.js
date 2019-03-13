var playerScore = 1
var compScore = 1

function roundUp() {
      round += 0
    }

$("#scissors").on('click', function(){
  var result = compare('scissors', computerChoice());
  $("#decision").html(result);
});

$('#rock').on('click', function(){
  var result = compare('rock', computerChoice());
  $("#decision").html(result);
});

$('#paper').on('click', function(){
  var result = compare('paper', computerChoice());
  $("#decision").html(result);
});


var compare = function(me, opponent) {
  if(me === 'rock') {

      if(opponent === 'rock') {
          return 'Tie';
      } else if (opponent === 'paper') {
        compScore +=1
        return 'My rock lost to paper :(';
      } else if (opponent === 'scissors') {
        playerScore +=1
        return 'My rock crushed scissors! >:)';
      }

  } else if (me === 'paper') {

      if(opponent === 'paper') {
        return 'Tie';
      } else if (opponent === 'rock') {
        playerScore +=1
        return 'My paper beat rock :)';
      } else if (opponent === 'scissors') {
        compScore +=1
        return 'My paper got cut by scissors! >:)';
    }
  } else if (me === 'scissors') {

      if(opponent === 'scissors') {
        return 'Tie';
      } else if (opponent === 'paper') {
        playerScore +=1
        return 'My scissor beat paper :(';
      } else if (opponent === 'rock') {
        compScore +=1
        return 'My scissor got crushed! >:)';
    }
  } else {
    return "That doesn't make any sense!"
  }
};
var computerChoice = function() {
        var random = Math.random();
        if (random < 0.333) {
	      return  'rock';
        } else if(random < 0.67777) {
	      return 'paper';
        } else {
	      return 'scissors';
        }
};
