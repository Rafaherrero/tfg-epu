Blockly.Blocks['english_language_dish'] = {
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

Blockly.JavaScript['english_language_dish'] = function(block) {
    var value_put_in_dish = Blockly.JavaScript.valueToCode(block, 'put_in_dish', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'put_in_dish'+value_put_in_dish+';\n';
    return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['english_language_fruits'] = {
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

Blockly.JavaScript['english_language_fruits'] = function(block) {
    var dropdown_fruit_dropdown = block.getFieldValue('fruit_dropdown');
    var code = '"'+dropdown_fruit_dropdown+'"'
    return [code, Blockly.JavaScript.ORDER_NONE];
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['english_language_vegetables'] = {
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

Blockly.JavaScript['english_language_vegetables'] = function(block) {
    var dropdown_vegetables_dropdown = block.getFieldValue('vegetables_dropdown');
    var code = '"'+dropdown_vegetables_dropdown+'"';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['english_language_banana_dish'] = {
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

Blockly.JavaScript['english_language_banana_dish'] = function(block) {
  var code = 'put_in_dish("banana");\n';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['english_language_fruits_dish'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Put the ")
        .appendField(new Blockly.FieldDropdown([["apple","apple-1"], ["avocado","avocado"], ["banana","banana"], ["cherry","cherries"], ["coconut","coconut"], ["grapes","grapes"], ["lemon","lemon-1"], ["orange","orange"], ["peach","peach"], ["pear","pear"], ["pineapple","pineapple"], ["raspberry","raspberry"], ["strawberry","strawberry"], ["watermelon","watermelon"]]), "fruit_dropdown")
        .appendField("fruit in dish");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['english_language_fruits_dish'] = function(block) {
  var dropdown_fruit_dropdown = block.getFieldValue('fruit_dropdown');
  var code = 'put_in_dish("'+dropdown_fruit_dropdown+'");\n';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['english_language_vegetables_dish'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Put the")
        .appendField(new Blockly.FieldDropdown([["asparagus","asparagus"], ["broccoli","broccoli"], ["cabbage","cabbage"], ["carrot","carrot"], ["cauliflower","cauliflower"], ["cucumber","cucumber"], ["garlic","garlic"], ["lettuce","salad-1"], ["onion","onion-1"], ["peas","peas"], ["pepper","pepper"], ["potato","potatoes-2"], ["radish","radish"], ["tomato","tomato"]]), "vegetables_dropdown")
        .appendField("vegetable in dish");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['english_language_vegetables_dish'] = function(block) {
  var dropdown_vegetables_dropdown = block.getFieldValue('vegetables_dropdown');
  var code = 'put_in_dish("'+dropdown_vegetables_dropdown+'");\n';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['english_language_loop_1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Repeat")
        .appendField(new Blockly.FieldNumber(0, 0), "number_repeat")
        .appendField("times");
    this.appendStatementInput("loop_statements")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['english_language_loop_1'] = function(block) {
  var number_number_repeat = block.getFieldValue('number_repeat');
  var statements_loop_text = Blockly.JavaScript.statementToCode(block, 'loop_statements');
  var cnt = chance.string({length: 2, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'});
  var code = 'for(var '+cnt+'=0; '+cnt+'<'+number_number_repeat+'; '+cnt+'++){'+statements_loop_text+'}\n';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['english_language_loop_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Repeat 2 times");
    this.appendStatementInput("loop_statements")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['english_language_loop_2'] = function(block) {
  var statements_loop_statements = Blockly.JavaScript.statementToCode(block, 'loop_statements');
  var cnt = chance.string({length: 2, pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'});    
  var code = 'for(var '+cnt+'=0; '+cnt+'<2; '+cnt+'++){'+statements_loop_statements+'}\n';
  return code;
};

///////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['english_language_conditional'] = {
  init: function() {
    this.appendValueInput("conditional_input")
        .setCheck("String")
        .appendField("If");
    this.appendDummyInput()
        .appendField("has more")
        .appendField(new Blockly.FieldDropdown([["carbohydrates","carbohydrates"], ["energy","kcal"], ["fat","fat"]]), "dropdown_conditional")
        .appendField("than");
    this.appendValueInput("conditional_input_2")
        .setCheck("String");
    this.appendStatementInput("statement_input")
        .setCheck(null)
        .appendField("then");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.JavaScript['english_language_conditional'] = function(block) {
  var value_conditional_input = Blockly.JavaScript.valueToCode(block, 'conditional_input', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dropdown_conditional = block.getFieldValue('dropdown_conditional');
  var value_conditional_input_2 = Blockly.JavaScript.valueToCode(block, 'conditional_input_2', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement_input = Blockly.JavaScript.statementToCode(block, 'statement_input');

  var food_info = get_json('json/food_info.json');

  var code = 'if( '+ food_info[value_conditional_input.slice(2,-2)][dropdown_dropdown_conditional] +' > ' + food_info[value_conditional_input_2.slice(2,-2)][dropdown_dropdown_conditional] + '){' + statements_statement_input + '}' ;
  return code;
};