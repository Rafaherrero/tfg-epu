if (($('.food_in_dish').length)!=1)
    show_solution('text_2')

else{
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var includes = code.includes("if( ")

    if(includes)
        show_solution('text_1')
    else
        show_solution('text_3')
}
