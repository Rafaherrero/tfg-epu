if ((($('.food_in_dish').length)!=5)){
    show_solution('text_2')
}
else{
    var check_different=true;
    var cnt_i=0;
    var cnt_j=0;

    while(cnt_i<4&&check_different){
        cnt_j = cnt_i+1
        while(cnt_j<5&&check_different){
            if (($('#food_'+cnt_i).attr('alt'))==($('#food_'+cnt_j).attr('alt'))){
                check_different=false;
                show_solution('text_4')
            }
            cnt_j++
        }
        cnt_i++
    }

    if(check_different){
        var check_fruits_vegetables=true;
        var cnt_i=0;
        var cnt_j=0;
        var food_info=get_json('json/food_info.json')

        while(cnt_i<4&&check_fruits_vegetables){
            cnt_j = cnt_i+1
            while(cnt_j<5&&check_fruits_vegetables){
                var actual=$('#food_'+cnt_i).attr('alt')
                var next=$('#food_'+cnt_j).attr('alt')
                if ((food_info[actual].type)!=(food_info[next].type)){
                    check_fruits_vegetables=false;
                    show_solution('text_1')
                }
                cnt_j++
            }
            cnt_i++
        }

        if(check_fruits_vegetables)
            show_solution('text_3')
    }
}