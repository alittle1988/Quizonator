$(document).ready(() => {

    $('#incorrect-1').on('click', () =>{
        $('#incorrect-1').addClass('active');
    });

    $('#incorrect-2').on('click', () => {
        $('#incorrect-2').addClass('active');
    });
    $('#incorrect-3').on('click', () => {
        $('#incorrect-3').addClass('active');
    });

    $('#correct').on('click', () => {
        $('#correct').addClass('active2')
    })


});