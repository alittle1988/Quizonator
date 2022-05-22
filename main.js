$(document).ready(() => {


    $('#incorrect-1').on('click', () =>{
        $('#incorrect-1').toggleClass('active-1')
    }).on('click', () => {
        $('#tryAgain').show();
    })

    $('#incorrect-2').on('click', () => {
        $('#incorrect-2').toggleClass('active-1');
    }).on('click', () => {
        $('#tryAgain').show();
    })

    $('#incorrect-3').on('click', () => {
        $('#incorrect-3').toggleClass('active-1');
    }).on('click', () => {
        $('#tryAgain').show();
    });

    $('#correct').on('click', () => {
        $('#correct').toggleClass('active-2')
    }).on('click', () => {
        $('#goodJob').show()
    }).on('click', () => {
        $('#tryAgain').hide()
    }).on('click', () => {
        $('#question1').fadeOut(1000)
    }).on('click', () => {
        $('#question2').delay(1000).fadeIn(500)
    })


});