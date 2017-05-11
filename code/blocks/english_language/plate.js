Blockly.Blocks['plate'] = {
  init: function() {
    this.appendStatementInput("put_in_plate")
        .setCheck("String")
        .appendField("Put in the plate");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['plate'] = function(block) {
  var statements_put_in_plate = Blockly.JavaScript.statementToCode(block, 'put_in_plate');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_put_in_plate;
  console.log(statements_put_in_plate)
  return code;
};