if (($('.food_in_dish').length)!=4){
    $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_3)
    open_modal('check_level_modal')
}
else {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var includes = code.includes("for(var")

    if (includes){
        $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_1)
        open_modal('check_level_modal')
    }
    else{
        $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_2)
        open_modal('check_level_modal')
    }
}