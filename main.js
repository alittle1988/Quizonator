$(document).ready(() => {


    $('.incorrect-1').on('click', () =>{
        $('.incorrect-1').toggleClass('active-1')
    }).on('click', () => {
        $('.tryAgain').show();
    })

    $('.incorrect-2').on('click', () => {
        $('.incorrect-2').toggleClass('active-1');
    }).on('click', () => {
        $('.tryAgain').show();
    })

    $('.incorrect-3').on('click', () => {
        $('.incorrect-3').toggleClass('active-1');
    }).on('click', () => {
        $('.tryAgain').show();
    });

    $('.correct').on('click', () => {
        $('.correct').toggleClass('active-2')
    }).on('click', () => {
        $('.goodJob').show()
    }).on('click', () => {
        $('.tryAgain').hide()
    }).on('click', () => {
        $('.incorrect-1').removeClass('active-1')
    }).on('click', () => {
        $('.incorrect-2').removeClass('active-1')
    }).on('click', () => {
        $('.incorrect-3').removeClass('active-1')
    })
    

    
    $('.nextQuest').on('click', () => {
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

    
    


});