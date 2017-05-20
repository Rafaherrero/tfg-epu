Blockly.Blocks['dish'] = {
    init: function() {
    this.appendValueInput("put_in_dish")
        .setCheck("String")
        .appendField("Put in dish:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    }
};

Blockly.JavaScript['dish'] = function(block) {
    var value_put_in_dish = Blockly.JavaScript.valueToCode(block, 'put_in_dish', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'put_in_dish'+value_put_in_dish+';';
    return code;
};

///////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['vegetables'] = {
    init: function() {
    this.appendDummyInput()
        .appendField("Vegetables: ")
        .appendField(new Blockly.FieldDropdown([["asparagus","asparagus"], ["broccoli","broccoli"], ["cabbage","cabbage"], ["carrot","carrot"], ["cauliflower","cauliflower"], ["cucumber","cucumber"], ["garlic","garlic"], ["lettuce","salad-1"], ["onion","onion-1"], ["peas","peas"], ["pepper","pepper"], ["potato","potatoes-2"], ["radish","radish"], ["tomato","tomato"]]), "vegetables_dropdown");
    this.setOutput(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
    }
};

Blockly.JavaScript['vegetables'] = function(block) {
    var dropdown_vegetables_dropdown = block.getFieldValue('vegetables_dropdown');
    var code = '"'+dropdown_vegetables_dropdown+'"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['banana_dish'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Put a banana in dish");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['banana_dish'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};