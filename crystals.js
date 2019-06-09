

//  randCompGen function is computer guess function to get number 19-120
 var randCompGen = function(){
   var randNum = Math.floor(Math.random() * 120) + 19 ;
   return randNum;
 }

 var compChoice = randCompGen();
 console.log(compChoice);

//  crystalChoice is function that will be ran 4 times to generate values for each crystal
var crystalChoice = function(){
    var rand = Math.floor(Math.random() * 12) + 1 ;
    return rand;
  }
//   assigns values to each crystal
  var crystal1 = crystalChoice();
  var crystal2 = crystalChoice();
  var crystal3 = crystalChoice();
  var crystal4 = crystalChoice();

  var crystalSum = 0;

  $('.c1').on('click',function(){
  sum = crystal1+crystalSum;
  crystalSum = sum;
  })

  
  


  console.log(crystalSum);
  
  




 