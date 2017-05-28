if ((($('.food_in_dish').length)!=5)){
    $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_2)
    open_modal('check_level_modal')
}
else{
    var check=true;
    var cnt_i=0;
    var cnt_j=0;

    while(cnt_i<4&&check){
        cnt_j = cnt_i+1
        while(cnt_j<5&&check){
            if (($('#food_'+cnt_i).attr('alt'))==($('#food_'+cnt_j).attr('alt'))){
                check=false;
                $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_3)
                open_modal('check_level_modal')
            }
            cnt_j++
        }
        cnt_i++
    }

    if(check){
        $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_1)
        open_modal('check_level_modal')
    }
}