// declaring arrays
let qArray = ['5 + 6', '12 + 8', '3 + 4', '4 - 8', '5 - 5', '6 + 8', ' 7 + 7', '9 - 3', ' 9 + 10', '11 + 12'];
let answerArray = ['11', '20', '7', '4', '0', '14', '14', '6', '19', '23'];
let wrongAnswer1 = ['10', '18', '10', '8', '5', '16', '10', '3', '14', '20'];
let wrongAnswer2 = ['15', '12', '5', '6', '2', '10', '12', '9', '17', '13'];
let wrongAnswer3 = ['12', '19', '4', '5', '10', '12', '0', '11', '16', '21'];
let index = 0;

// declaring varibles for location by class
let question = document.querySelector('.questHeader');
let a1 = document.querySelector('.correct')
let wA1 = document.querySelector('.incorrect-1')
let wA2 = document.querySelector('.incorrect-2');
let wA3 = document.querySelector('.incorrect-3')


// assigning content location to array indexes 
question.textContent = qArray[index]
a1.textContent = answerArray[index]
wA1.textContent = wrongAnswer1[index];
wA2.textContent = wrongAnswer2[index];
wA3.textContent = wrongAnswer3[index];

// declaring score varaibles and display location by class
let score = 0;
let docScore = document.querySelector('#scoreP');
let numScore = document.querySelector('#score')

// function to change correct answer background color
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

// function to change incorrect answer background color
function incorrectAnswer(a) {
    const correct1 = document.querySelector('#correct1')
    const tryAgain = document.querySelector('.tryAgain')
    if(correct1.style.backgroundColor === 'green'){

    } else {
    a.style.backgroundColor = 'red';
    tryAgain.style.display = 'block'


}
}

// function to make correct/incorrect answers go back to original background color
function clearDiv(a, b, c, d) {
    a.style.backgroundColor = 'gray';
    b.style.backgroundColor = 'gray';
    c.style.backgroundColor = 'gray';
    d.style.backgroundColor = 'gray';
    document.querySelector('.goodJob').style.display = 'none';
}

// function to move through array indexes to display
function moveToNext() {
    let i = index
    if(i >= qArray.length - 1){
        document.querySelector('.endOfQuiz').style.display = 'block'
        document.querySelector('#questionDiv').style.display = 'none';
        document.querySelector('.goodJob').style.display = 'none';
        document.querySelector('.disclaimer').style.display = 'none';
        numScore.textContent = score;
        
        docScore.textContent = (score / 10).toLocaleString('en-US', {
            style: 'percent'
        });
        
        
            
       
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

// function to randomly move correct answer div
function rotateDiv() {
    randNum = Math.floor(Math.random() * 3);
    const containerDiv = document.querySelector('.question1');
    switch(randNum) {
        case 0:
            wA1.replaceWith(a1)
            containerDiv.append(wA1);
            break;
        case 1:
            wA2.replaceWith(a1)
            containerDiv.append(wA2);
            break;
        case 2: 
            wA3.replaceWith(a1)
            containerDiv.append(wA3);
            break;
    }
    
    
}


