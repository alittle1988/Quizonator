$(document).ready(() => {
    
    const questionArray = ['What is 2 + 2?', 'What is 3 + 3?','What is 4 + 4?', 'What is 5 + 5?', 'What is 6 + 6?', 'What is 7 + 7?', 'What is 8 + 8?', 'What is 9 + 9?', 'What is 10 + 10?', 'What is 11 + 11?'];
    const answerArray = ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22"]
    const q1WrongAnswer = ['6', '8', '2', '5', '6']
    const q2WrongAnswer = ['5', '3', '9', '0', '9']
    const q3WrongAnswer = ['2', '9', '4', '9', '10']
   


    // assigning questions and answers to element ID
    document.getElementById("question-text").innerHTML = questionArray[0];
    let correctAnswer = document.getElementById("correct-1").innerHTML = answerArray[0];
    


    let wrongAnswer1 = q1WrongAnswer[0]
    let wrongAnswer2 = q2WrongAnswer[0]
    let wrongAnswer3 = q3WrongAnswer[0]
    

    //Assigning wrong answers to an element ID
    document.getElementById('wrongAnswer1').innerHTML = wrongAnswer1
    document.getElementById('wrongAnswer2').innerHTML = wrongAnswer2
    document.getElementById('wrongAnswer3').innerHTML = wrongAnswer3

  

        
    

    // move answer/question boxes to next array
    const moveToNext = (location, array) => {
        if(document.getElementById(location).innerHTML === array[0]){
            document.getElementById(location).innerHTML = array[0 + 1];
        } else if (document.getElementById(location).innerHTML === array[1]) {
            document.getElementById(location).innerHTML = array[1 + 1];
        } else if (document.getElementById(location).innerHTML === array[2]) {
            document.getElementById(location).innerHTML = array[2 + 1];
        } else if (document.getElementById(location).innerHTML === array[3]) {
            document.getElementById(location).innerHTML = array[3 + 1];
        } else if (document.getElementById(location).innerHTML === array[4]) {
            document.getElementById(location).innerHTML = array[4 + 1];
        } else if (document.getElementById(location).innerHTML === array[5]) {
            document.getElementById(location).innerHTML = array[5 + 1];
        } else if (document.getElementById(location).innerHTML === array[6]) {
            document.getElementById(location).innerHTML = array[6 + 1];
        } else if (document.getElementById(location).innerHTML === array[7]) {
            document.getElementById(location).innerHTML = array[7 + 1];
        } else if (document.getElementById(location).innerHTML === array[8]) {
            document.getElementById(location).innerHTML = array[8 + 1];
        } else if (document.getElementById(location).innerHTML === array[9]) {
            document.getElementById(location).innerHTML = array[9 + 1];
        }
    }


 
    // adding class to  incorrect answer when clicked
    $('.incorrect-1').on('click', () => {
        $('.incorrect-1').addClass('active-1');
    }).on('click', () => {
        $('.tryAgain').show()
    })

    $('.incorrect-2').on('click', () => {
        $('.incorrect-2').addClass('active-1');
    }).on('click', () => {
        $('.tryAgain').show()
    })

    $('.incorrect-3').on('click', () => {
        $('.incorrect-3').addClass('active-1');
    }).on('click', () => {
        $('.tryAgain').show()
    })
    // adding class to correct answer when clicked
    $('.correct').on('click', () => {
        $('.correct').addClass('active-2');
    }).on('click', () => {
        $('.goodJob').show();
    }).on('click', () => {
        $('.tryAgain').hide();
    })
    //moving to next question when clicked
    $('.nextQuest').on('click', () => {
        $('.incorrect-1').removeClass('active-1');
        $('.incorrect-2').removeClass('active-1');
        $('.incorrect-3').removeClass('active-1');
        $('.correct').removeClass('active-2');
        $('.goodJob').hide()
        $('.tryAgain').hide() 
    }).on('click', () => {
        $('#wrongAnswer1').replaceWith('#correct-1');
        $('.incorrect-1').replaceWith()
    }).on('click', () => {
        moveToNext('correct-1', answerArray);
        moveToNext('question-text', questionArray)
        moveToNext('wrongAnswer1', q1WrongAnswer);
        moveToNext('wrongAnswer2', q2WrongAnswer);
        moveToNext('wrongAnswer3', q3WrongAnswer);
    })


});
