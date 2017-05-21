    if ((($('.food_in_dish').length)==1)&&($('.food_in_dish:has(img[alt="banana"])'))){
        $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].correct)
        open_modal("check_level_modal")
    }
    else
        alert(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].wrong)