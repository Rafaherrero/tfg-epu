Blockly.Blocks['plate'] = {
  init: function() {
    this.appendStatementInput("put_in_plate")
        .setCheck("String")
        .appendField("Poner en el plato");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['plate'] = function(block) {
  var statements_put_in_plate = Blockly.JavaScript.statementToCode(block, 'put_in_plate');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};