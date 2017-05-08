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