var wins = 0;
var losses = 0;
// displays wins and losses
$('#win').text(wins);
$('#loss').text(losses);

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
//   assigns values to each crystal
var crystal1 = crystalChoice();
var crystal2 = crystalChoice();
var crystal3 = crystalChoice();
var crystal4 = crystalChoice();

console.log('=========');
console.log('Crystal 1 value =' + crystal1);
console.log('Crystal 2 value =' + crystal2)
console.log('Crystal 3 value =' + crystal3)
console.log('Crystal 4 value =' + crystal4)
var crystalSum = 0;

// assigns grystal value to data-number attr of each button
$('.c1').attr('data-number', crystal1);
$('.c2').attr('data-number', crystal2);
$('.c3').attr('data-number', crystal3);
$('.c4').attr('data-number', crystal4);

var numSum = 0;
// function adds value to the sum of crystal guesses for each crystal
$('.c1').on('click', function () {

  numSum = numSum + parseInt($('.c1').attr('data-number'));
  $('#yourNum').text(numSum);

})
$('.c2').on('click', function () {

  numSum = numSum + parseInt($('.c2').attr('data-number'));
  $('#yourNum').text(numSum);

})
$('.c3').on('click', function () {

  numSum = numSum + parseInt($('.c3').attr('data-number'));
  $('#yourNum').text(numSum);

})
$('.c4').on('click', function () {

  numSum = numSum + parseInt($('.c4').attr('data-number'));
  $('#yourNum').text(numSum);

})

if (numSum==compChoice){


}
















