    if ((($('.food_in_dish').length)==1)&&($('.food_in_dish:has(img[alt="banana"])')))
        alert(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].correct)
    else
        alert(get_json('json/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.json')[get_actual_language()][0].wrong)