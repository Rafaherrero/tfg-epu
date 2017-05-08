Blockly.Blocks['vegetables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vegetables: ")
        .appendField(new Blockly.FieldDropdown([["asparagus","asparagus"], ["broccoli","broccoli"], ["cabbage","cabbage"], ["carrot","carrot"], ["cauliflower","cauliflower"], ["cucumber","cucumber"], ["garlic","garlic"], ["lettuce","salad-1"], ["onion","onion-1"], ["peas","peas"], ["pepper","pepper"], ["potato","potatoes-2"], ["radish","radish"], ["tomato","tomato"]]), "vegetables_dropdown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};