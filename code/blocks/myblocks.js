Blockly.Blocks['mixer'] = {
  init: function() {
    this.jsonInit({
 "type": "mixer",
  "message0": "Put in the mixer %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "put_mixer",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "colour": 230,
  "tooltip": "Meter en la batidora",
  "helpUrl": ""
    });
  }
};

Blockly.Blocks['fruits'] = {
  init: function() {
    this.jsonInit({
"type": "fruits",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "fruits_select",
      "options": [
        [
          "Banana",
          "banana"
        ],
        [
          "Apple",
          "apple"
        ],
        [
          "Pear",
          "pear"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Fruits",
  "helpUrl": ""
    });
  }
};