Blockly.Blocks['spanish_language_dish'] = {
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

Blockly.JavaScript['spanish_language_dish'] = function(block) {
  var value_put_in_dish = Blockly.JavaScript.valueToCode(block, 'put_in_dish', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['spanish_language_fruits'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Frutas: ")
        .appendField(new Blockly.FieldDropdown([["aguacate","avocado"], ["cereza","cherries"], ["coco","coconut"], ["frambuesa","raspberry"], ["fresa","strawberry"], ["limón","lemon-1"], ["manzana","apple-1"], ["melocotón","peach"], ["naranja","orange"], ["pera","pear"], ["piña","pineapple"], ["plátano","banana"], ["sandía","watermelon"], ["uvas","grapes"]]), "fruit_dropdown");
    this.setOutput(true, "String");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['spanish_language_fruits'] = function(block) {
  var dropdown_fruit_dropdown = block.getFieldValue('fruit_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['spanish_language_vegetables'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Verduras y hortalizas:")
        .appendField(new Blockly.FieldDropdown([["ajo","garlic"], ["brócoli","broccoli"], ["cebolla","onion-1"], ["col","cabbage"], ["coliflor","cauliflower"], ["espárragos","asparagus"], ["guisante","peas"], ["lechuga","salad-1"], ["papa","potatoes-2"], ["pepino","cucumber"], ["pimiento","pepper"], ["rábano","radish"], ["tomate","tomato"], ["zanahoria","carrot"]]), "vegetables_dropdown");
    this.setOutput(true, "String");
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['spanish_language_vegetables'] = function(block) {
  var dropdown_vegetables_dropdown = block.getFieldValue('vegetables_dropdown');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['spanish_language_banana_dish'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Poner un plátano en el plato");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['spanish_language_banana_dish'] = function(block) {
  var code = 'put_in_dish("banana");';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['spanish_language_fruits_dish'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Poner la fruta")
        .appendField(new Blockly.FieldDropdown([["aguacate","avocado"], ["cereza","cherries"], ["coco","coconut"], ["frambuesa","raspberry"], ["fresa","strawberry"], ["limón","lemon-1"], ["manzana","apple-1"], ["melocotón","peach"], ["naranja","orange"], ["pera","pear"], ["piña","pineapple"], ["plátano","banana"], ["sandía","watermelon"], ["uvas","grapes"]]), "fruit_dropdown")
        .appendField("en el plato");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['spanish_language_fruits_dish'] = function(block) {
  var dropdown_fruit_dropdown = block.getFieldValue('fruit_dropdown');
  var code = 'put_in_dish("'+dropdown_fruit_dropdown+'");\n';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['spanish_language_vegetables_dish'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Poner la verdura")
        .appendField(new Blockly.FieldDropdown([["ajo","garlic"], ["brócoli","broccoli"], ["cebolla","onion-1"], ["col","cabbage"], ["coliflor","cauliflower"], ["espárragos","asparagus"], ["guisante","peas"], ["lechuga","salad-1"], ["papa","potatoes-2"], ["pepino","cucumber"], ["pimiento","pepper"], ["rábano","radish"], ["tomate","tomato"], ["zanahoria","carrot"]]), "vegetables_dropdown")
        .appendField("en el plato");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['spanish_language_vegetables_dish'] = function(block) {
  var dropdown_vegetables_dropdown = block.getFieldValue('vegetables_dropdown');
  var code = 'put_in_dish("'+dropdown_vegetables_dropdown+'");\n';
  return code;
};