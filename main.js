$(document).ready(() => {
    
    const questionArray = ['What is 2 + 2?', 'What is 3 + 3?','What is 4 + 4?', 'What is 5 + 6?', 'What is 6 + 6?'];
    const answerArray = [4, 6, 8, 11, 12]
    const wrongAnswer = Math.floor(Math.random() * 19)

    document.getElementById("question-text").innerHTML = questionArray[0];
    document.getElementById("correct").innerHTML = answerArray[0];
    

    const getWrongAnswer = () => {
        return Math.floor(Math.random() * 19)
    };


    document.getElementById('wrongAnswer').innerHTML = getWrongAnswer();
    document.getElementById('wrongAnswer2').innerHTML = getWrongAnswer();
    document.getElementById('wrongAnswer3').innerHTML = getWrongAnswer();

    if(document.getElementById('wrongAnswer1') === document.getElementById('correct')) {
        document.getElementById('wrongAnswer').innerHTML = getWrongAnswer();
    }



    


});