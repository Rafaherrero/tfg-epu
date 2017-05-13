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