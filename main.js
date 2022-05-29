$(document).ready(() => {
    
    const questionArray = ['What is 2 + 2?', 'What is 3 + 3?','What is 4 + 4?', 'What is 5 + 5?', 'What is 6 + 6?', 'What is 7 + 7?', 'What is 8 + 8?', 'What is 9 + 9?', 'What is 10 + 10?', 'What is 11 + 11?'];
    const answerArray = ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22"]
    const wrongAnswer = []

    document.getElementById("question-text").innerHTML = questionArray[0];
    let correctAnswer = document.getElementById("correct-1").innerHTML = answerArray[0];
    let wrongAnswer1 = '';
    let wrongAnswer2 = '';
    let wrongAnswer3 = '';
    
    
    //let wrongAnswer1 = '';
    
    
    
    /*const getWrongAnswers = () => {
        while (wrongAnswer.length < 50) {
        let wrongAnswer1 = Math.floor(Math.random() * 29)
        wrongAnswer.push(wrongAnswer1)
    }}
    
    getWrongAnswers()
*/
    const getWrongAnswers = () => {
        for(i = 0; i < 100; i++) {
            wrongAnswer.push(i)
        }
    }
    //getWrongAnswers()
    
    function assignWrongAnswers()  {
        wAnswer = Math.floor(Math.random() * 10).toString();
        if(wAnswer === correctAnswer) {
            do {
                wAnswer = Math.floor(Math.random() * 10)
            } while (wAnswer === correctAnswer);
            return wAnswer
        } 
        else {
        return wAnswer
        }
     
    }

    wrongAnswer1 = assignWrongAnswers();
    wrongAnswer2 = assignWrongAnswers();
    wrongAnswer3 = assignWrongAnswers();
    if(wrongAnswer2 === wrongAnswer1) {
        wrongAnswer2 = assignWrongAnswers()
    } else if (wrongAnswer3 === wrongAnswer1 || wrongAnswer2) {
        wrongAnswer3 = assignWrongAnswers()
    }

    
    document.getElementById('wrongAnswer1').innerHTML = wrongAnswer1
    document.getElementById('wrongAnswer2').innerHTML = wrongAnswer2
    document.getElementById('wrongAnswer3').innerHTML = wrongAnswer3

    

    

        

    const moveToNextQuestion = () => {
        if(document.getElementById("question-text").innerHTML === questionArray[0]){
            document.getElementById("question-text").innerHTML = questionArray[0 + 1];
        } else if (document.getElementById("question-text").innerHTML === questionArray[1]) {
            document.getElementById("question-text").innerHTML = questionArray[1 + 1];
        } else if (document.getElementById("question-text").innerHTML === questionArray[2]) {
            document.getElementById("question-text").innerHTML = questionArray[2 + 1];
        } else if (document.getElementById("question-text").innerHTML === questionArray[3]) {
            document.getElementById("question-text").innerHTML = questionArray[3 + 1];
        } else if (document.getElementById("question-text").innerHTML === questionArray[4]) {
            document.getElementById("question-text").innerHTML = questionArray[4 + 1];
        } else if (document.getElementById("question-text").innerHTML === questionArray[5]) {
            document.getElementById("question-text").innerHTML = questionArray[5 + 1];
        } else if (document.getElementById("question-text").innerHTML === questionArray[6]) {
            document.getElementById("question-text").innerHTML = questionArray[6 + 1];
        } else if (document.getElementById("question-text").innerHTML === questionArray[7]) {
            document.getElementById("question-text").innerHTML = questionArray[7 + 1];
        } else if (document.getElementById("question-text").innerHTML === questionArray[8]) {
            document.getElementById("question-text").innerHTML = questionArray[8 + 1];
        } else if (document.getElementById("question-text").innerHTML === questionArray[9]) {
            document.getElementById("question-text").innerHTML = questionArray[9 + 1];
        }
    }

    const moveToNextAnswer = () => {
        if(document.getElementById("correct-1").innerHTML === answerArray[0]){
            document.getElementById("correct-1").innerHTML = answerArray[0 + 1];
        } else if (document.getElementById("correct-1").innerHTML === answerArray[1]){
            document.getElementById("correct-1").innerHTML = answerArray[1 + 1];
        } else if (document.getElementById("correct-1").innerHTML === answerArray[2]){
            document.getElementById("correct-1").innerHTML = answerArray[2 + 1];
        } else if (document.getElementById("correct-1").innerHTML === answerArray[3]){
            document.getElementById("correct-1").innerHTML = answerArray[3 + 1];
        } else if (document.getElementById("correct-1").innerHTML === answerArray[4]){
            document.getElementById("correct-1").innerHTML = answerArray[4 + 1];
        } else if (document.getElementById("correct-1").innerHTML === answerArray[5]){
            document.getElementById("correct-1").innerHTML = answerArray[5 + 1];
        } else if (document.getElementById("correct-1").innerHTML === answerArray[6]){
            document.getElementById("correct-1").innerHTML = answerArray[6 + 1];
        } else if (document.getElementById("correct-1").innerHTML === answerArray[7]){
            document.getElementById("correct-1").innerHTML = answerArray[7 + 1];
        } else if (document.getElementById("correct-1").innerHTML === answerArray[8]){
            document.getElementById("correct-1").innerHTML = answerArray[8 + 1];
        } else if (document.getElementById("correct-1").innerHTML === answerArray[9]){
            document.getElementById("correct-1").innerHTML = answerArray[9 + 1];
        } 
    }




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

    $('.correct').on('click', () => {
        $('.correct').addClass('active-2');
    }).on('click', () => {
        $('.goodJob').show();
    }).on('click', () => {
        $('.tryAgain').hide();
    })

    $('.nextQuest').on('click', () => {
        moveToNextQuestion();
        moveToNextAnswer();

        

    }).on('click', () => {
        $('.incorrect-1').removeClass('active-1');
        $('.incorrect-2').removeClass('active-1');
        $('.incorrect-3').removeClass('active-1');
        $('.correct').removeClass('active-2');
        $('.goodJob').hide()
        $('.tryAgain').hide()
    })

    




});