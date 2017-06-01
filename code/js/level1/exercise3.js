if ((($('.food_in_dish').length)!=5)){
    show_solution('text_2')
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
                show_solution('text_3')
            }
            cnt_j++
        }
        cnt_i++
    }

    if(check)
        show_solution('text_1')
}