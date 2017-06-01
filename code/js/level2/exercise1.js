if (($('.food_in_dish').length)!=4){
    show_solution('text_3')
}
else {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var includes = code.includes("for(var")

    if (includes)
        show_solution('text_1')
    
    else
        show_solution('text_2')
}