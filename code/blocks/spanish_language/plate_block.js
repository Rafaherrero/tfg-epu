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