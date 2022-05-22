$(document).ready(() => {



    $('.question2').hide()
    $('.question3').hide()
    $('.question4').hide()
    $('.question5').hide()
    $('.question6').hide()
    $('.question7').hide()
    $('.question8').hide()
    $('.question9').hide()
    $('.question10').hide()

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