Blockly.Blocks['fruits'] = {
    init: function() {
    this.appendDummyInput()
        .appendField("Fruits: ")
        .appendField(new Blockly.FieldDropdown([["apple","apple-1"], ["avocado","avocado"], ["banana","banana"], ["cherry","cherries"], ["coconut","coconut"], ["grapes","grapes"], ["lemon","lemon-1"], ["orange","orange"], ["peach","peach"], ["pear","pear"], ["pineapple","pineapple"], ["raspberry","raspberry"], ["strawberry","strawberry"], ["watermelon","watermelon"]]), "fruit_dropdown");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
    }
};

Blockly.JavaScript['fruits'] = function(block) {
    var dropdown_fruit_dropdown = block.getFieldValue('fruit_dropdown');
    var code = '"'+dropdown_fruit_dropdown+'"'
    return [code, Blockly.JavaScript.ORDER_NONE];
};