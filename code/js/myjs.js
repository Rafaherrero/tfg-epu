const loadJsonFile = require('load-json-file');

//$(window).resize(function(){location.reload();});

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

$("[id^=button_level]").click(function(event) {
    change_level(event.target.id.slice(-1))
})

$(".language_buttons").click(function(event) {
    change_language(event.target.id)
})