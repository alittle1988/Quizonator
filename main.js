$(document).ready(() => {
    let score = 0;
    const questionArray = ['What is 2 + 2?', 'What is 3 + 3?','What is 4 + 4?', 'What is 5 + 5?', 'What is 6 + 6?', 'What is 7 + 7?', 'What is 8 + 8?', 'What is 9 + 9?', 'What is 10 + 10?', 'What is 11 + 11?', 'Congrats you have finished🎉'];
    const answerArray = ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22", score.toString()]
    const q1WrongAnswer = ['6', '8', '2', '5', '4', '7', '13', '9', '10', '11']
    const q2WrongAnswer = ['5', '3', '9', '0', '8', '13', '15', '19', '30', '7']
    const q3WrongAnswer = ['2', '9', '4', '8', '10','11', '12', '16', '15', '21']
    

    // assigning elements to Array
    document.querySelector('.questHeader').innerText = questionArray[0];
    document.querySelector('.correct').innerText = answerArray[0];
    document.querySelector('.incorrect-1').innerText = q1WrongAnswer[0]
    document.querySelector('.incorrect-2').innerText = q2WrongAnswer[0]
    document.querySelector('.incorrect-3').innerText = q3WrongAnswer[0]

    // move answer/question boxes to next array
    const moveToNext = (location, array) => {
        if(document.querySelector(location).innerText === array[0]){
            document.querySelector(location).innerText = array[1];
        } else if (document.querySelector(location).innerText === array[1]) {
            document.querySelector(location).innerText = array[2];
        } else if (document.querySelector(location).innerText === array[2]) {
            document.querySelector(location).innerText = array[3];
        } else if (document.querySelector(location).innerText === array[3]) {
            document.querySelector(location).innerText = array[4];
        } else if (document.querySelector(location).innerText === array[4]) {
            document.querySelector(location).innerText = array[5];
        } else if (document.querySelector(location).innerText === array[5]) {
            document.querySelector(location).innerText = array[6];
        } else if (document.querySelector(location).innerText === array[6]) {
            document.querySelector(location).innerText = array[7];
        } else if (document.querySelector(location).innerText === array[7]) {
            document.querySelector(location).innerText = array[8];
        } else if (document.querySelector(location).innerText === array[8]) {
            document.querySelector(location).innerText = array[9];
        } else if (document.querySelector(location).innerText === array[9]) {
            document.querySelector(location).innerText = array[10];
        } 

        }

        // trying for loop for moveToNext function

        /*

        const moveToNext = (location, array) =>  {

        }

        */
        
    
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
        rotateDiv($('.correct').html()); 
        moveToNext('.correct', answerArray);
        moveToNext('.questHeader', questionArray)
        moveToNext('.incorrect-1', q1WrongAnswer);
        moveToNext('.incorrect-2', q2WrongAnswer);
        moveToNext('.incorrect-3', q3WrongAnswer);
        
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
    };
    
console.log(score)
          
});
