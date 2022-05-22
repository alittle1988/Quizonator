$(document).ready(() => {

    $('#incorrect-1').on('click', () =>{
        $('#incorrect-1').addClass('active-1');
    });

    $('#incorrect-2').on('click', () => {
        $('#incorrect-2').addClass('active-1');
    });
    $('#incorrect-3').on('click', () => {
        $('#incorrect-3').addClass('active-1');
    });

    $('#correct').on('click', () => {
        $('#correct').addClass('active-2')
    })


});