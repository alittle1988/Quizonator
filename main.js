$(document).ready(() => {
    
    const questionArray = ['What is 2 + 2?', 'What is 3 + 3?','What is 4 + 4?', 'What is 5 + 5?', 'What is 6 + 6?', 'What is 7 + 7?', 'What is 8 + 8?', 'What is 9 + 9?', 'What is 10 + 10?', 'What is 11 + 11?'];
    const answerArray = ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22"]
    const wrongAnswer = []

    // assigning questions and answers to element ID
    document.getElementById("question-text").innerHTML = questionArray[0];
    let correctAnswer = document.getElementById("correct-1").innerHTML = answerArray[0];
    let wrongAnswer1 = '';
    let wrongAnswer2 = '';
    let wrongAnswer3 = '';
    
    // getting wrong answers
    
    function assignWrongAnswers()  {
        wAnswer = Math.floor(Math.random() * 20).toString();
        if(wAnswer === correctAnswer) {
            do {
                wAnswer = Math.floor(Math.random() * 20)
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
    

    //Assigning wrong answers to an element ID
    document.getElementById('wrongAnswer1').innerHTML = wrongAnswer1
    document.getElementById('wrongAnswer2').innerHTML = wrongAnswer2
    document.getElementById('wrongAnswer3').innerHTML = wrongAnswer3

  

        
    
    
    // moving question to next element in questionArray
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
    // moving answer to next element in answerArray
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

    

        $('.nextQuest').on('click', () => {
            $('.question2').show()
        }).on('click', () => {
            $('.question1').hide()
        }).on('click', () => {
            $('.question2').css('display', 'flex')
        }).on('click', () => {
            $('.incorrect-1').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-2').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-3').removeClass('active-1')
        }).on('click', () => {
            $('.correct').removeClass('active-2')
        }).on('click', () => {
            $('.goodJob').hide()
        }).on('click', () => {
            $('.tryAgain').hide()
        }) 
    

        $('.nextQuest2').on('click', () => {
            $('.question3').show()
        }).on('click', () => {
            $('.question2').hide()
        }).on('click', () => {
            $('.question3').css('display', 'flex')
        }).on('click', () => {
            $('.incorrect-1').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-2').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-3').removeClass('active-1')
        }).on('click', () => {
            $('.correct').removeClass('active-2')
        }).on('click', () => {
            $('.goodJob').hide()
        }).on('click', () => {
            $('.tryAgain').hide()
        })

        $('.nextQuest3').on('click', () => {
            $('.question4').show()
        }).on('click', () => {
            $('.question3').hide()
        }).on('click', () => {
            $('.question4').css('display', 'flex')
        }).on('click', () => {
            $('.incorrect-1').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-2').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-3').removeClass('active-1')
        }).on('click', () => {
            $('.correct').removeClass('active-2')
        }).on('click', () => {
            $('.goodJob').hide()
        }).on('click', () => {
            $('.tryAgain').hide()
        })

        $('.nextQuest4').on('click', () => {
            $('.question5').show()
        }).on('click', () => {
            $('.question4').hide()
        }).on('click', () => {
            $('.question5').css('display', 'flex')
        }).on('click', () => {
            $('.incorrect-1').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-2').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-3').removeClass('active-1')
        }).on('click', () => {
            $('.correct').removeClass('active-2')
        }).on('click', () => {
            $('.goodJob').hide()
        }).on('click', () => {
            $('.tryAgain').hide()
        })

        $('.nextQuest5').on('click', () => {
            $('.question6').show()
        }).on('click', () => {
            $('.question5').hide()
        }).on('click', () => {
            $('.question6').css('display', 'flex')
        }).on('click', () => {
            $('.incorrect-1').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-2').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-3').removeClass('active-1')
        }).on('click', () => {
            $('.correct').removeClass('active-2')
        }).on('click', () => {
            $('.goodJob').hide()
        }).on('click', () => {
            $('.tryAgain').hide()
        })

        $('.nextQuest6').on('click', () => {
            $('.question7').show()
        }).on('click', () => {
            $('.question6').hide()
        }).on('click', () => {
            $('.question7').css('display', 'flex')
        }).on('click', () => {
            $('.incorrect-1').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-2').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-3').removeClass('active-1')
        }).on('click', () => {
            $('.correct').removeClass('active-2')
        }).on('click', () => {
            $('.goodJob').hide()
        }).on('click', () => {
            $('.tryAgain').hide()
        })

        $('.nextQuest7').on('click', () => {
            $('.question8').show()
        }).on('click', () => {
            $('.question7').hide()
        }).on('click', () => {
            $('.question8').css('display', 'flex')
        }).on('click', () => {
            $('.incorrect-1').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-2').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-3').removeClass('active-1')
        }).on('click', () => {
            $('.correct').removeClass('active-2')
        }).on('click', () => {
            $('.goodJob').hide()
        }).on('click', () => {
            $('.tryAgain').hide()
        })

        $('.nextQuest8').on('click', () => {
            $('.question9').show()
        }).on('click', () => {
            $('.question8').hide()
        }).on('click', () => {
            $('.question9').css('display', 'flex')
        }).on('click', () => {
            $('.incorrect-1').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-2').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-3').removeClass('active-1')
        }).on('click', () => {
            $('.correct').removeClass('active-2')
        }).on('click', () => {
            $('.goodJob').hide()
        }).on('click', () => {
            $('.tryAgain').hide()
        })

        $('.nextQuest9').on('click', () => {
            $('.question10').show()
        }).on('click', () => {
            $('.question9').hide()
        }).on('click', () => {
            $('.question10').css('display', 'flex')
        }).on('click', () => {
            $('.incorrect-1').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-2').removeClass('active-1')
        }).on('click', () => {
            $('.incorrect-3').removeClass('active-1')
        }).on('click', () => {
            $('.correct').removeClass('active-2')
        }).on('click', () => {
            $('.goodJob').hide()
        }).on('click', () => {
            $('.tryAgain').hide()
        })
    
    
    
    
    
    
    




});
