const loadJsonFile = require('load-json-file');

//$(window).resize(function(){location.reload();});
//Tamaño minimo, 1250x750

window.onload = function () {
    change_language("english_language")
    change_level(1)
}

var blocklyArea = document.getElementById('blocklyArea');
  var blocklyDiv = document.getElementById('blocklyDiv');
  var workspace = Blockly.inject(blocklyDiv,
      {toolbox: document.getElementById('toolbox'),
       zoom:
         {controls: true,
          wheel: false,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2},
        media: 'img/blockly/',
      trashcan: true});
  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  Blockly.svgResize(workspace);

function get_json(path_to_json){
    return loadJsonFile.sync(path_to_json);
}

function highlightBlock(id) {
  workspace.highlightBlock(id);
}

function initApi(interpreter, scope) {
  // Add an API function for highlighting blocks.
  var wrapper = function(id) {
    id = id ? id.toString() : '';
    return interpreter.createPrimitive(workspace.highlightBlock(id));
  };
  interpreter.setProperty(scope, 'highlightBlock',
      interpreter.createNativeFunction(wrapper));

      // Add an API function for put_in_dish().
  wrapper = function(text) {
    text = text ? text.toString() : '';
    return interpreter.createPrimitive(put_in_dish(text));
  };
  interpreter.setProperty(scope, 'put_in_dish',
      interpreter.createNativeFunction(wrapper));
}

function put_in_dish(fruta){
    $('#medium_col_izq').append('<img id="food_'+$('.food_in_dish').length+'" src="img/food/'+fruta+'.svg" class="food_in_dish" />')
}

Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
Blockly.JavaScript.addReservedWords('highlightBlock');

function change_level(num_level){

    //All buttons no active
    $('[id^=button_level]').attr('class', 'pure-button button-xlarge');

    //Selected button as active
    $('#button_level'+num_level).attr('class', 'pure-button button-xlarge pure-button-active level_button_active');

    //Delete all select options
    $('#select_exercise').empty();

    //Load all new options onto the select
    var json_select_options = get_json('json/level'+num_level+'/level'+num_level+'.json');
    var actual_language = $(".language_buttons_active").prop('id');

    for(i=1; i<=json_select_options.exercises;i++){
        var actual_exercise_json = get_json('json/level'+num_level+'/exercise'+i+'.json');

        $('#select_exercise').append($('<option>', {
            value: actual_exercise_json.value,
            text: actual_exercise_json[actual_language][0].title
        }));
    }
}

function change_language(id_language){
    var json_language = get_json('json/languages/'+id_language+'.json');

    $('.language_buttons').attr('class', 'language_buttons');

    $('#'+id_language).attr('class', 'language_buttons language_buttons_active');

    //Buttons
    $.each(json_language.buttons, function(i, item) {
        $('#'+item.id).html(item.value);
    });

    //Texts
    $.each(json_language.texts, function(i, item) {
        $('#'+item.id).html(item.value);
    });

    change_level(1)
}

function change_exercise(id_level, id_exercise){
    
    if (id_level>3)
        id_level=1

    change_level(id_level)
}

function get_actual_level(){
    return $('.level_button_active').attr('id').slice(-1)
}

function get_actual_exercise(){
    return $('#select_exercise').val().slice(-1)
}

function get_actual_language(){
    return $('.language_buttons_active').attr('id')
}

function check_level(){
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    $('.food_in_dish').remove()

    var myInterpreter = new Interpreter(code, initApi);
    function nextStep() {
        if (myInterpreter.step()) {
            window.setTimeout(nextStep, 100);
        }
    }
    nextStep();
}

//Buttons and select
$("[id^=button_level]").click(function(event) {
    change_level(event.target.id.slice(-1))
})

$(".language_buttons").click(function(event) {
    change_language(event.target.id)
})

$('#select_exercise').on('change', function() {
    change_exercise(get_actual_level(),this.value.slice(-1))
})

$("#button_previous_level").click(function(){
    change_exercise();
})

$("#button_check_level").click(function(){
    check_level();
})

$("#button_reset_level").click(function(){
    change_exercise(get_actual_level(),get_actual_exercise())
})

$("#button_next_level").click(function(){
    change_exercise();
    
})

$("#button_info_level").click(function(){
    info_level();
})

$("#button_close_modal").click(function(){
    close_modal();
})

function open_modal(id_modal){
    $('#'+id_modal).css('top','0')
    $('#button_close_modal').css('display','block')
}

function close_modal(){
    $('.modal').css('top','-100vh')
    $('#button_close_modal').css('display','none')
}