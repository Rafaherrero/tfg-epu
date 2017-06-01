if (($('.food_in_dish').length)==4){
    show_solution('text_1')
}
else if (($('.food_in_dish').length)<4){
    show_solution('text_2')
}
else if (($('.food_in_dish').length)>4){
    show_solution('text_3')
}