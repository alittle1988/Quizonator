$(document).ready(() => {
    
    const questionArray = ['What is 2 + 2?', 'What is 3 + 3?','What is 4 + 4?', 'What is 5 + 6?', 'What is 6 + 6?'];
    const answerArray = [4, 6, 8, 11, 12]
    const wrongAnswer = []

    let question = document.getElementById("question-text").innerHTML = questionArray[0];
    let correct = document.getElementById("correct").innerHTML = answerArray[0];
    
    

    const getWrongAnswers = () => {
        while (wrongAnswer.length < 3) {
        let wrongAnswer1 = Math.floor(Math.random() * 14)
        wrongAnswer.push(wrongAnswer1)
    }}

    getWrongAnswers()


    document.getElementById('wrongAnswer1').innerHTML = wrongAnswer[0]
    document.getElementById('wrongAnswer2').innerHTML = wrongAnswer[1]
    document.getElementById('wrongAnswer3').innerHTML = wrongAnswer[2]


    $('#wrongAnswer1').on('click', () => {
        $('#WrongAnswer1').toggleClass('active');
    });


  






});