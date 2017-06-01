if (($('.food_in_dish').length)!=9)
    show_solution('text_2')

else{
    var different = false;

    for (var i=0; i<9&&!different; i++){
        if ( $('#food_'+i).attr('alt')!='apple-1' && $('#food_'+i).attr('alt')!='salad-1' && $('#food_'+i).attr('alt')!='orange' ){
            different=true;
            show_solution('text_4')
        }
    }

    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var includes = code.includes("for(var")

    if(!different&&includes)
        show_solution('text_1')
    else if (!different&&!includes)
        show_solution('text_3')

}