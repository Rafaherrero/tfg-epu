if (($('.food_in_dish').length)!=4){
    show_solution('text_2')
}
else {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    code = code.substring(code.indexOf("\n") + 1);
    var includes = code.includes("for(var")
    code = code.substring(code.indexOf("\n") + 1);

    if (!includes)
        show_solution('text_4')

    else {
        if (code.includes("for(var"))
            show_solution('text_1')
        else
            show_solution('text_3')
    }
}