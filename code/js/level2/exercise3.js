if (($('.food_in_dish').length)!=6){
    $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_3)
    open_modal('check_level_modal')
}
else {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var includes = code.includes("for(var")

    var check_fruits_vegetables=false;
    var cnt_i=0;
    var cnt_j=0;
    var food_info=get_json('json/food_info.json')

    while(cnt_i<5&&!check_fruits_vegetables){
        cnt_j = cnt_i+1
        while(cnt_j<6&&!check_fruits_vegetables){
            var actual=$('#food_'+cnt_i).attr('alt')
            var next=$('#food_'+cnt_j).attr('alt')
            if ((food_info[actual].type)!=(food_info[next].type)){
                check_fruits_vegetables=true;
            }
            cnt_j++
        }
        cnt_i++
    }

    if(!check_fruits_vegetables){
        $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_2)
        open_modal('check_level_modal')
    }
    else if (includes){
        $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_1)
        open_modal('check_level_modal')
    }
    else{
        $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_4)
        open_modal('check_level_modal')
    }
}