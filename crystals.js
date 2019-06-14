var wins = 0;
var losses = 0;
var numSum = 0;
// displays wins and losses
$('#win').text(wins);
$('#loss').text(losses);
// displays your sum starting at 0
$('#yourNum').text(numSum);

//  randCompGen function is computer guess function to get number 19-120
var randCompGen = function () {
  var randNum = Math.floor(Math.random() * 120) + 19;
  return randNum;
}

var compChoice = randCompGen();
$('#addNum').text(compChoice);


//  crystalChoice is function that will be ran 4 times to generate values for each crystal
var crystalChoice = function () {
  var rand = Math.floor(Math.random() * 12) + 1;
  return rand;
}


// assigns grystal value to data-number attr of each button
var assignCrystals = function(){
$('.c1').attr('data-number', crystalChoice());
$('.c2').attr('data-number', crystalChoice());
$('.c3').attr('data-number', crystalChoice());
$('.c4').attr('data-number', crystalChoice());
}
assignCrystals();

// function adds value to the sum of crystal guesses for each crystal
$('.c').on('click', function () {
  numSum = numSum + parseInt($(this).attr('data-number'));
  $('#yourNum').text(numSum);
  winLossCheck();
})

//  function to chec win or loss and win condition generates new random number and sets user number to 0
//also adds to wins or losses 
var winLossCheck = function () {
  if (numSum === compChoice) {
    wins++
    numSum = 0;
    compChoice = randCompGen();
    $('#win').text(wins);
    $('#loss').text(losses);
    $('#yourNum').text(numSum);
    $('#addNum').text(compChoice);
    crystal1 = crystalChoice();
    crystal2 = crystalChoice();
    crystal3 = crystalChoice();
    crystal4 = crystalChoice();
    assignCrystals();
  } else if (numSum > compChoice) {
    losses++
    numSum = 0;
    compChoice = randCompGen();
    $('#win').text(wins);
    $('#loss').text(losses);
    $('#yourNum').text(numSum);
    $('#addNum').text(compChoice);
    crystal1 = crystalChoice();
    crystal2 = crystalChoice();
    crystal3 = crystalChoice();
    crystal4 = crystalChoice();
    assignCrystals();
  }
}
