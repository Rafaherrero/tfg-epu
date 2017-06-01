if (($('.food_in_dish').length)!=6)
    show_solution('text_2')

else{
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var includes_conditional = code.includes("if( ")
    var includes_loop = code.includes("for(var ")

    if(includes_conditional&&includes_loop)
        show_solution('text_1')
    else if(includes_conditional&&!includes_loop)
        show_solution('text_4')
    else if(!includes_conditional&&includes_loop)
        show_solution('text_3')
    else if(!includes_conditional&&!includes_loop)
        show_solution('text_5')
}