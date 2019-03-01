


var allQuestions = [{
  "question": "How far away from Madison are the super-famous LRV electric vehicles parked?",
  "choices" : ["238,900 mi", "5,000 mi", "10 mi"],
  "bgclass" : "color0",
  "bgclass2" : "color0a",
  "correctAnswer": "238,900 mi",
  "correctMessage" : "238,900 mi is correct - they're on the moon! The LRVs are the Lunar Roving Vehicles, which went to the moon with Apollo missions 15, 16 and 17.",
  "incorrMessage" : "238,900 mi - on the moon! The LRVs are the Lunar Roving Vehicles, which went to the moon with Apollo missions 15, 16 and 17."
}, {
  "question": "How many miles is the average American’s daily commute?",
  "choices": [" < 5 mi", "< 30 mi", "< 70 mi"],
  "bgclass" : "color1",
  "bgclass2" : "color1a",
  "correctAnswer": "< 30 mi",
  "correctMessage": "Correct = less than 30 miles.",
  "incorrMessage" : "The average Amercan commutes less than 30 miles a day."
}, {
  "question": "What does PHEV stand for?",
  "choices": ["Pretty heavy electric vehicle", "Plug-in hybrid electric vehicle", "Pressure harmonic electric vehicle"],
  "bgclass" : "color2",
  "bgclass2" : "color2a",
  "correctAnswer": "Plug-in hybrid electric vehicle",
  "correctMessage" : "Correct - plug-in hybrid electric vehicle. PHEVs have both an internal combustion engine and an electric power. They can be recharged by plugging it into an external source of electric power or by their on-board generators.",
  "incorrMessage" : "The correct answer is Plug-in Hybrid Electric Vehicles."
}, {
  "question": "In 1900, what percentage of cars in America were EVs?",
  "choices": ["0%", "38%", "12%"],
  "bgclass" : "color3",
  "bgclass2" : "color3a",
  "correctAnswer": "38%",
  "correctMessage": "Correct - 38%! In New York City at that time, 90% of taxis were EVs! Eventually, the price of gasoline powered cars went way down (due to Henry Ford’s assembly line business model) and made them more attractive to drivers. But EVs had their day even back in the day - and they’re becoming once again more than 100 years later.",
  "incorrMessage" : "38%. Who would have thought?  In New York City at that time, 90% of taxis were EVs! Eventually, the price of gasoline powered cars went way down (due to Henry Ford’s assembly line business model) and made them more attractive to drivers. But EVs had their day even back in the day - and they’re becoming once again more than 100 years later."
}];

  
var newCounter = 0;
var colorInc = 0;
var correctCounter = 0;
var nopeCounter = 0;


function setUpBox(anArray) { 
   theArray = Object.values(anArray); //the whole array
  if (newCounter > (theArray.length - 1 )) {
    $('#quiz').removeClass().addClass('colorDone');
    $('.choices').hide();
    $('.endgame').html(

      "<h2> Congratulations! You have finished the EV Trivia Challenge. You got " + correctCounter + " questions correct and " + nopeCounter + " questions incorrect."

      );

  } else {
   
    choiceArray = theArray[newCounter].choices;
    correctAns = theArray[newCounter].correctAnswer;
    correctMessage = theArray[newCounter].correctMessage;
    incorrMessage = theArray[newCounter].incorrMessage;
    colorInc = colorInc + 1;//runs after click

    $('#quiz').removeClass().addClass('color' + colorInc);

    $(".questionbox").html("<p>" + theArray[newCounter].question + "</p>");
        newCounter = newCounter + 1 ;

    $( ".answerbox" ).html(

      "<button class='btn btn-info btn-1 btn-choice' data-game-button='" + choiceArray[0] + "'>" + choiceArray[0] + "</button>" +
      "<button class='btn btn-info btn-1 btn-choice' data-game-button='" + choiceArray[1] + "'>" + choiceArray[1] + "</button>" +
      "<button class='btn btn-info btn-1 btn-choice' data-game-button='" + choiceArray[2] + "'>" + choiceArray[2] + "</button>"
    );

     $("#start").hide();

     console.log("newCounter: " + newCounter);

    $(".btn-choice").click(function() {

        var answer = $(this).attr("data-game-button"); // GET THE DATA IN ATTR
        event.preventDefault();
        colorInc = colorInc + 1;

        if (  answer === correctAns ) {
         
          $('#quiz').removeClass().addClass('color' + colorInc);
          $(".answerbox" ).html('<p>' + correctMessage + '</p>');
          $('#next').removeClass('hide');
          correctCounter = correctCounter + 1 ;
          console.log("num correct: " + correctCounter);
         
        } else {
     
          $('#quiz').removeClass().addClass('colorNope');
          $('.questionbox').html('');
          $(".answerbox").html("<h1>Nope</h1><p>" + incorrMessage + "</p>");
          $('#next').removeClass('hide');
          nopeCounter = nopeCounter + 1;
           console.log("num wrong: " + nopeCounter);
        }
    }); //end button-choice so far
  }//end else
}//end setUpBox
