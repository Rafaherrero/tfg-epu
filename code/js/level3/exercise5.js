if (($('.food_in_dish').length)!=6)
    show_solution('text_2')

else{
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var includes_conditional = code.includes("if( ")
    var includes_loop = code.includes("for(var ")

    var check_fruits_vegetables=false;
    var cnt_i=0;
    var cnt_j=0;
    var food_info=get_json('json/food_info.json')

    if(includes_conditional&&includes_loop){
        
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

        if(check_fruits_vegetables)
            show_solution('text_1')
        else
            show_solution('text_6')
    }
        
    else if(includes_conditional&&!includes_loop)
        show_solution('text_4')
    else if(!includes_conditional&&includes_loop)
        show_solution('text_3')
    else if(!includes_conditional&&!includes_loop)
        show_solution('text_5')
}