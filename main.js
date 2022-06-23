$(document).ready(() => {
    
    const questionArray = ['What is 2 + 2?', 'What is 3 + 3?','What is 4 + 4?', 'What is 5 + 5?', 'What is 6 + 6?', 'What is 7 + 7?', 'What is 8 + 8?', 'What is 9 + 9?', 'What is 10 + 10?', 'What is 11 + 11?', 'Congrats you have finished🎉'];
    const answerArray = ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22"]
    const q1WrongAnswer = ['6', '8', '2', '5', '4', '7', '13', '9', '10', '11']
    const q2WrongAnswer = ['5', '3', '9', '0', '8', '13', '15', '19', '30', '7']
    const q3WrongAnswer = ['2', '9', '4', '8', '10','11', '12', '16', '15', '21']
    let score = 0;


    // assigning elements to Array
    document.getElementById("questHeader").innerHTML = questionArray[0];
    document.getElementById("correct-1").innerHTML = answerArray[0];
    document.getElementById('wrongAnswer1').innerHTML = q1WrongAnswer[0]
    document.getElementById('wrongAnswer2').innerHTML = q2WrongAnswer[0]
    document.getElementById('wrongAnswer3').innerHTML = q3WrongAnswer[0]

    // move answer/question boxes to next array
    const moveToNext = (location, array) => {
        if(document.getElementById(location).innerHTML === array[0]){
            document.getElementById(location).innerHTML = array[1];
        } else if (document.getElementById(location).innerHTML === array[1]) {
            document.getElementById(location).innerHTML = array[2];
        } else if (document.getElementById(location).innerHTML === array[2]) {
            document.getElementById(location).innerHTML = array[3];
        } else if (document.getElementById(location).innerHTML === array[3]) {
            document.getElementById(location).innerHTML = array[4];
        } else if (document.getElementById(location).innerHTML === array[4]) {
            document.getElementById(location).innerHTML = array[5];
        } else if (document.getElementById(location).innerHTML === array[5]) {
            document.getElementById(location).innerHTML = array[6];
        } else if (document.getElementById(location).innerHTML === array[6]) {
            document.getElementById(location).innerHTML = array[7];
        } else if (document.getElementById(location).innerHTML === array[7]) {
            document.getElementById(location).innerHTML = array[8];
        } else if (document.getElementById(location).innerHTML === array[8]) {
            document.getElementById(location).innerHTML = array[9];
        } else if (document.getElementById(location).innerHTML === array[9]) {
            document.getElementById(location).innerHTML = array[10];
        } 

        }
        
    
    // adding class to  incorrect answer when clicked
    $('.question1').on('click', '.incorrect-1', () => {
        if ($('.correct').hasClass('active-2')){
           
        } else {
        $('.incorrect-1').addClass('active-1');
        $('.tryAgain').show();}
    })

    $('.question1').on('click', '.incorrect-2', () => {
        if ($('.correct').hasClass('active-2')){
           
        } else {
        $('.incorrect-2').addClass('active-1');
        $('.tryAgain').show()}
    })

    $('.question1').on('click', '.incorrect-3', () => {
        if ($('.correct').hasClass('active-2')){
           
        } else {
        $('.incorrect-3').addClass('active-1');
        $('.tryAgain').show();}
    })
    // adding class to correct answer when clicked
    $('.question1').on('click', '.correct', () => {
        $('.correct').addClass('active-2');
        $('.goodJob').show();
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
        rotateDiv($('.correct').html()) 
        moveToNext('correct-1', answerArray);
        moveToNext('questHeader', questionArray)
        moveToNext('wrongAnswer1', q1WrongAnswer);
        moveToNext('wrongAnswer2', q2WrongAnswer);
        moveToNext('wrongAnswer3', q3WrongAnswer);

    })




    function  moveDiv(old, replace) {
        old.replaceWith(replace)
       $('.question1').append(old)
    }
    

    function rotateDiv(pra) {
        
        switch(pra) {
            case answerArray[0]:
                moveDiv($('.incorrect-1'), $('.correct'));
                break;
            case answerArray[1]:
                moveDiv($('.incorrect-3'), $('.correct'));
                break;
            case answerArray[2]:
                moveDiv($('.correct'), $('.incorrect-1'));
                break;
            case answerArray[3]:
                moveDiv($('.incorrect-2'), $('.correct'));
                break;
            case answerArray[4]:
                moveDiv($('.incorrect-3'), $('.correct'));
                break;
            case answerArray[5]:
                moveDiv($('.correct'), $('.incorrect-1'));
                break;
            case answerArray[6]:
                moveDiv($('.incorrect-1'), $('.correct'));
                break;
            case answerArray[7]:
                moveDiv($('.incorrect-3'), $('.correct'));
                break;
            case answerArray[8]:
                moveDiv($('.correct'), $('.incorrect-1'));
                break;
            case answerArray[9]:
                moveDiv($('.correct'), $('.incorrect-2'));
                break;
        }
    }

            
});
