let box                             =   document.querySelector('.box')
let welcome_msg                     =   document.querySelector('.welcome_msg')
let button                          =   document.querySelector('.button')
let player_name_selection           =   document.querySelector('.player_name_selection')
let input_one                       =   document.querySelector('.input_one')
let input_two                       =   document.querySelector('.input_two')
let error_for_no_selection          =   document.querySelector('.error_for_no_selection')
let start                           =   document.querySelector('.start')
let versus_one                      =   document.querySelector('.versus_one')
let handshake_v                     =   document.querySelector('.handshake_v')
let versus_two                      =   document.querySelector('.versus_two')
let go_btn                          =   document.querySelector('.go_btn')
let error_for_same_selection        =   document.querySelector('.error_for_same_selection')
let start_two                       =   document.querySelector('.start_two')
let star_box                        =   document.querySelector('.star_box')
let player1_game_header             =   document.querySelector('.player1_game_header')
let player2_game_header             =   document.querySelector('.player2_game_header')
let player1_input                   =   document.querySelector('.player1_input')
let player2_input                   =   document.querySelector('.player2_input')
let player1_submit                  =   document.querySelector('.player1_submit')
let player2_submit                  =   document.querySelector('.player2_submit')
let player1_game_header_fullname    =   document.querySelector('.player1_game_header_fullname')
let player2_game_header_fullname    =   document.querySelector('.player2_game_header_fullname')
let player1_game_header_name        =   document.querySelector('.player1_game_header_name')
let player2_game_header_name        =   document.querySelector('.player2_game_header_name')
let error_for_number1_blank         =   document.querySelector('.error_for_number1_blank')
let error_for_number2_blank         =   document.querySelector('.error_for_number2_blank')
let player_one                      =   document.querySelector('.player_one')
let player_two                      =   document.querySelector('.player_two')
let player_section                      =   document.querySelector('.player_section')
let winner_cup                      =   document.querySelector('.winner_cup')
let player_winner                      =   document.querySelector('.player_winner')

button.addEventListener('click' , ()=>{
    welcome_msg.style='display:none;'
    button.style='display:none;'
    player_name_selection.style='display:block;'
})

start.addEventListener('click' , ()=>{
    if(input_one.value==''>' ',input_two.value==''>' '){
        error_for_no_selection.innerHTML=`Player's name can't be blank !`
        error_for_no_selection.style='display:block;'
    }else{
        if(input_one.value==input_two.value){
            error_for_no_selection.innerHTML=`Player's name must be different !`
            error_for_no_selection.style='display:block;'
        }else{
            input_one.value.innerHTML
            input_two.value.innerHTML
            player_name_selection.style='display:none;'
            input_one.style='display:none'
            input_two.style='display:none'
            start.style='display:none'
            versus_one.style='display:block;'
            handshake_v.style='display:block;'
            versus_two.style='display:block;'
            go_btn.style='display:block;'
            versus_one.innerHTML=input_one.value
            versus_two.innerHTML=input_two.value
            star_box.style='display:block;'
        }
    }
})

go_btn.addEventListener('click' , ()=>{
    player1_game_header.innerHTML=input_one.value
    player1_game_header.style='display:block;'
    go_btn.style='display:none;'
    handshake_v.style='display:none;'
    versus_one.style='display:none;'
    versus_two.style='display:none;'
    star_box.style='display:none;'
    player1_submit.style='display:block;'
    player1_input.style='display:block;'
    player1_game_header_fullname.style='display:block;'
    player1_game_header_name.innerHTML=input_two.value
    error_for_number1_blank.style='display:block;'
})

player1_submit.addEventListener('click' , ()=>{
    if(player1_input.value==''){
        error_for_number1_blank.innerHTML='Please input any number !'
    }else{
        if(player1_input.value>9){
            error_for_number1_blank.innerHTML='Please input number within 1 - 9 !'
        }else{
            if(player1_input.value<1){
                error_for_number1_blank.innerHTML='Please input number within 1 - 9 !'
            }else{
                player1_submit.style='display:none;'
                player1_input.style='display:none;'
                player1_game_header_fullname.style='display:none;'
                player1_game_header.style='display:none;'
                error_for_number1_blank.style='display:none;'
                player2_game_header.innerHTML=input_two.value
                player2_game_header.style='display:block;'
                player2_game_header_fullname.style='display:block;'
                player2_game_header_name.innerHTML=input_one.value
                player2_input.style='display:block;'
                player2_submit.style='display:block;'
            }
        }
    }
})
player2_submit.addEventListener('click' , ()=>{
    if(player2_input.value==''){
        error_for_number2_blank.innerHTML='Please input any number !'
        error_for_number2_blank.style='display:block;'
    }else{
        if(player2_input.value>9){
            error_for_number2_blank.innerHTML='Please input number within 1 - 9 !'
            error_for_number2_blank.style='display:block;'
        }else{
            if(player2_input.value<1){
                error_for_number2_blank.innerHTML='Please input number within 1 - 9 !'
                error_for_number2_blank.style='display:block;'
            }else{
                player2_input.style='display:none;'
                player2_submit.style='display:none;'
                error_for_number2_blank.style='display:none;'
                player2_game_header.style='display:none;'
                player2_game_header_fullname.style='display:none;'
                winner_cup.style='display:block;'

            }
        }
    }
})

player2_submit.addEventListener('click' , ()=>{
    if(player2_input.value==player1_input.value){
        player_winner.innerHTML=input_two.value
    }else{
        player_winner.innerHTML=input_one.value
    }
})