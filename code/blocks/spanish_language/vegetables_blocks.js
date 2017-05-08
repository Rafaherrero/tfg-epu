Blockly.Blocks['vegetables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Verduras y hortalizas:")
        .appendField(new Blockly.FieldDropdown([["ajo","garlic"], ["brócoli","broccoli"], ["cebolla","onion-1"], ["col","cabbage"], ["coliflor","cauliflower"], ["espárragos","asparagus"], ["guisante","peas"], ["lechuga","salad-1"], ["papa","potatoes-2"], ["pepino","cucumber"], ["pimiento","pepper"], ["rábano","radish"], ["tomate","tomato"], ["zanahoria","carrot"]]), "vegetables_dropdown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};