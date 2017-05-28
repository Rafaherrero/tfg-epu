if ((($('.food_in_dish').length)==4)&&($('.food_in_dish:has(img[alt="banana"])'))){
    $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_1)
    open_modal('check_level_modal')
}
else if ((($('.food_in_dish').length)<4)&&($('.food_in_dish:has(img[alt="banana"])'))){
    $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_2)
    open_modal('check_level_modal')
}
else if ((($('.food_in_dish').length)>4)&&($('.food_in_dish:has(img[alt="banana"])'))){
    $('#check_level_modal_text').html(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].text_3)
    open_modal('check_level_modal')
}