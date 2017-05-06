const loadJsonFile = require('load-json-file');

//$(window).resize(function(){location.reload();});
//Tamaño minimo, 1245x750

function get_json(path_to_json){
    return loadJsonFile.sync(path_to_json);
}

function change_level(num_level){

    //All buttons no active
    $('[id^=button_level]').attr('class', 'pure-button button-xlarge');

    //Selected button as active
    $('#button_level'+num_level).attr('class', 'pure-button button-xlarge pure-button-active');

    //Delete all select options
    $('#select_exercise').empty();

    //Load all new options onto the select
    var json_select_options = get_json('json/level'+num_level+'/level'+num_level+'.json');
    var actual_language = $(".language_buttons_active").prop('id');

    for(i=1; i<=json_select_options.exercises;i++){
        var actual_exercise_json = get_json('json/level'+num_level+'/exercise'+i+'.json');

        $('#select_exercise').append($('<option>', {
            value: actual_exercise_json.value,
            text: actual_exercise_json[actual_language][0].title
        }));
        
    }

}

function change_language(id_language){
    var json_language = get_json('json/languages/'+id_language+'.json');

    $('.language_buttons').attr('class', 'language_buttons');

    $('#'+id_language).attr('class', 'language_buttons language_buttons_active');

    //Buttons
    $.each(json_language.buttons, function(i, item) {
        $('#'+item.id).html(item.value);
    });

    //Texts
    $.each(json_language.texts, function(i, item) {
        $('#'+item.id).html(item.value);
    });

    change_level(1)
}

function get_actual_level(){
    return $('.level_button_active').attr('id')
}

function get_actual_exercise(){
    console.log($( "#select_exercise" ).val())
}

function get_actual_language(){
    return $('.language_buttons_active').attr('id')
}

//Buttons

$("[id^=button_level]").click(function(event) {
    change_level(event.target.id.slice(-1))
})

$(".language_buttons").click(function(event) {
    change_language(event.target.id)
})

$("#button_previous_level").click(function(){
    change_level();
})

$("#button_check_level").click(function(){
    //check_level();
    get_actual_exercise();
})

$("#button_reset_level").click(function(){
    reset_level();
})

$("#button_next_level").click(function(){
    change_level();
})

$("#button_info_level").click(function(){
    info_level();
})

$("#button_close_modal").click(function(){
    close_modal();
})

function open_modal(){
    $("#modal").css("top","0")
    $("#button_close_modal").css("display","block")
}

function close_modal(){
    $("#modal").css("top","-100vh")
    $("#button_close_modal").css("display","none")
}