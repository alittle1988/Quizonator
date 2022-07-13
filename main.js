// declaring arrays
let qArray = ['1 + 1', '2 + 2', '3 + 3', '4 + 4', '5 + 5'];
let answerArray = ['2', '4', '6', '8', '10'];
let wrongAnswer1 = ['3', '5', '1', '6', '5'];
let wrongAnswer2 = ['1', '2', '3', '4', '3'];
let wrongAnswer3 = ['0', '6', '4', '6', '9'];
let index = 0;


let question = document.querySelector('.questHeader');
let a1 = document.querySelector('.correct')
let wA1 = document.querySelector('.incorrect-1')
let wA2 = document.querySelector('.incorrect-2');
let wA3 = document.querySelector('.incorrect-3')



question.textContent = qArray[index]
a1.textContent = answerArray[index]
wA1.textContent = wrongAnswer1[index];
wA2.textContent = wrongAnswer2[index];
wA3.textContent = wrongAnswer3[index];

let score = 0;
let docScore = document.querySelector('#score');

function correctA(a) {
    const goodJob = document.querySelector('.goodJob')
    const tryAgain = document.querySelector('.tryAgain')
    if(wrong1.style.backgroundColor === 'red' || wrong2.style.backgroundColor === 'red' || wrong3.style.backgroundColor === 'red') {
        a.style.backgroundColor = 'green ';
        goodJob.style.display = 'block';
        tryAgain.style.display = 'none';

    } else {
    score = score + 1;
    a.style.backgroundColor = 'green ' ;
    goodJob.style.display = 'block';
}
}

function incorrectAnswer(a) {
    const correct1 = document.querySelector('#correct1')
    const tryAgain = document.querySelector('.tryAgain')
    if(correct1.style.backgroundColor === 'green'){

    } else {
    a.style.backgroundColor = 'red';
    tryAgain.style.display = 'block'


}
}

function clearDiv(a, b, c, d) {
    a.style.backgroundColor = 'gray';
    b.style.backgroundColor = 'gray';
    c.style.backgroundColor = 'gray';
    d.style.backgroundColor = 'gray';
    document.querySelector('.goodJob').style.display = 'none';
}


function moveToNext() {
    let i = index
    if(i >= qArray.length - 1){
        document.querySelector('.endOfQuiz').style.display = 'block'
        document.querySelector('#questionDiv').style.display = 'none';
        document.querySelector('.goodJob').style.display = 'none';
        document.querySelector('.disclaimer').style.display = 'none';
        docScore.textContent = score
       
    } else {
        index = index + 1;
        question.textContent = qArray[index];
        a1.textContent = answerArray[index];
        wA1.textContent = wrongAnswer1[index];
        wA2.textContent = wrongAnswer2[index];
        wA3.textContent = wrongAnswer3[index];
        clearDiv(a1, wA1, wA2, wA3);
        rotateDiv()
    }
        

    
}


function rotateDiv() {
    randNum = Math.floor(Math.random() * 3);
    const containerDiv = document.querySelector('.question1');
    switch(randNum) {
        case 0:
            wA1.replaceWith(a1)
            containerDiv.append(wA1);
            break;
        case 1:
            wA2.replaceWith(q1)
            containerDiv.append(wA2);
            break;
        case 2: 
            wA3.replaceWith(a1)
            containerDiv.append(wA3);
            break;
    }
    console.log(randNum)
    
}
















/* 
$(document).ready(() => {
    let score = 0;
    const questionArray = ['What is 2 + 2?', 'What is 3 + 3?','What is 4 + 4?', 'What is 5 + 5?', 'What is 6 + 6?', 'What is 7 + 7?', 'What is 8 + 8?', 'What is 9 + 9?', 'What is 10 + 10?', 'What is 11 + 11?', 'Congrats you have finished🎉'];
    const answerArray = ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22"]
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
            keepScore(score)
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
            console.log(score)
            
            
            
       
        
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
    

          
});
*/