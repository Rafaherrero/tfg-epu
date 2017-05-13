Blockly.Blocks['dish'] = {
  init: function() {
    this.appendValueInput("put_in_dish")
        .setCheck("String")
        .appendField("Poner en el plato:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['dish'] = function(block) {
  var value_put_in_dish = Blockly.JavaScript.valueToCode(block, 'put_in_dish', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};