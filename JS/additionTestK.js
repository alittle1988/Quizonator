// declaring arrays
let qArray = [];
let answerArray =[];
let testArray = [];
let testArray2 = [];

let index = 0;

// declaring varibles for location by class
let question = document.querySelector('.questHeader');
let a1 = document.querySelector('.correct')
let wA1 = document.querySelector('.incorrect-1')
let wA2 = document.querySelector('.incorrect-2');
let wA3 = document.querySelector('.incorrect-3');
const timerDiv = document.querySelector('.timer')



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
    tryAgain.style.display = 'block';
    


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
    if(i >= 9){
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
        question.textContent = qArray[index] + ' = ?';
        a1.textContent = answerArray[index];
        wA1.textContent =  Number(a1.textContent) + 3;
        wA2.textContent =  Number(a1.textContent) - 4;
        wA3.textContent =  Number(a1.textContent) + 5; 
        clearDiv(a1, wA1, wA2, wA3);
        rotateDiv()
    }
        

    
}

// function to randomly move correct answer div
function rotateDiv() {
    randNum = Math.floor(Math.random() * 3);
    const containerDiv = document.querySelector('.answerList');
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


/* creating Arrays */
const startTest = document.querySelector('.button')
startTest.addEventListener('click', function(){
    createArray()
})
function createArray() {
    for(let i = 0;i < 2; i++) {
        for(let j = 0; j < 10; j++) {
            if(i === 0) {
                testArray.push(j.toString())
            }else {
                testArray.push(i.toString() + j.toString())
            }

        }
    }
    for(let i = 0; i < 1; i++) {
        for(let j = 0;j < 10; j++) {
            if(i === 0) {
                testArray2.push(j.toString())
            }else {
               testArray2.push(i.toString() + j.toString())
            }
        }
    }
    
    for(let i = 0; i < 10; i++) {
        thisNum = Math.floor(Math.random() * testArray.length)
        thatNum = Math.floor(Math.random() * testArray2.length)
        qArray.push(testArray[thisNum] + ' + ' + testArray2[thatNum])
        answerArray.push(Number(testArray[thisNum]) + Number(testArray2[thatNum]))
        
        
    }
    document.querySelector('#questionDiv').style.display = 'block';
    document.querySelector('.buttonDiv').style.display = 'none';
    document.querySelector('.disclaimer').style.display = 'flex';
    document.querySelector('.endOfQuiz').style.display = 'none';
    question.textContent = qArray[index] + ' = ?';
    a1.textContent = answerArray[index];
    wA1.textContent = Number(a1.textContent) + 3;
        wA2.textContent = Number(a1.textContent) - 4;
        wA3.textContent = Number(a1.textContent) + 5; 
    
    console.log(testArray)
    console.log(testArray2)
}

//creating timer function

function startTimer() {
    let sec = 0;
    let min = 0
    let timer = setInterval(function() {
      timerDiv.innerHTML= `Timer ${min}.${sec}`;
      sec++;  
      if(sec >= 600) {
        sec = 0
        min++
      }
    }, 100);
    
}
/* work on stoping timer and displaying the time when test is finished*/
//starting test
/*const startTest = document.querySelector('.button')
startTest.addEventListener("click", function() {
    
    startTimer()
    createArray()
});

*/