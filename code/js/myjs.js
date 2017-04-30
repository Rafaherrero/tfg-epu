$(window).resize(function(){location.reload();});

function change_level(num_level){
    $('[id^=button_level]').attr('class', 'pure-button button-xlarge');
    $('#button_level'+num_level).attr('class', 'pure-button button-xlarge pure-button-active');
}

function change_language(id_language){

}

$("[id^=button_level]").click(function(event) {
    change_level(event.target.id.slice(-1))
})

$(".language_buttons").click(function(event) {
    change_language(event.target.id)
})