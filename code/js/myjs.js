const loadJsonFile = require('load-json-file');

//$(window).resize(function(){location.reload();});
//Tamaño minimo, 1200*650

$.ajaxPrefilter(function( options, original_Options, jqXHR ) {
    options.async = true;
});

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv, {
    toolbox: get_blocks(1,1),
    zoom: {
        controls: true,
        wheel: false,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    },
    media: 'img/blockly/',
    trashcan: true
});

change_language("english_language")
    
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

window.addEventListener('resize', onresize, true);
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
    var sum_degrees = 0

    if (($('.food_in_dish').length)>=6)
        sum_degrees = 30

    $('#medium_col_izq').append('<img id="food_'+$('.food_in_dish').length+'" src="img/food/'+fruta+'.svg" class="food_in_dish" alt="'+fruta+'" />')
    $('#food_'+($('.food_in_dish').length-1)).css({'transform' : 'rotate('+(((($('.food_in_dish').length)-1)*60)+sum_degrees)+'deg)'})
}

Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
Blockly.JavaScript.addReservedWords('highlightBlock');

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
    change_exercise(1,1) 
}

function change_level(num_level){

    //All buttons no active
    $('[id^=button_level]').attr('class', 'pure-button button-xlarge');

    //Selected button as active
    $('#button_level'+num_level).attr('class', 'pure-button button-xlarge pure-button-active level_button_active');

    //Delete all select options
    $('#select_exercise').empty();

    //Total number of exercises
    var number_exercises = get_total_number_exercises(num_level)

    for(i=1; i<=number_exercises;i++){
        var actual_exercise_json = get_json('json/level'+num_level+'/exercise'+i+'.json');

        $('#select_exercise').append($('<option>', {
            value: actual_exercise_json.value,
            text: actual_exercise_json[get_actual_language()][0].title
        }));
    }
}

function change_exercise(id_level, id_exercise){
    if (id_level>get_total_number_levels())
        id_level=1
    
    if (id_level!=get_actual_level())
        change_level(id_level)

    var json_level = get_json('json/level'+id_level+'/exercise'+id_exercise+'.json');
    $('#goal_text').html(json_level[get_actual_language()][0].goal)
    $('#info_modal_text').html(json_level[get_actual_language()][0].description_game+'<video id="instructions_video" autoplay loop><source src="video/level'+id_level+'/exercise'+id_exercise+'.mp4" type="video/mp4" /> </video>')
    $('#select_exercise').val('exercise'+id_exercise)

    Blockly.mainWorkspace.clear();
    workspace.updateToolbox(get_blocks(id_level, id_exercise))
    $('.food_in_dish').remove()
    close_modal()
    open_modal('info_modal')
}

function change_blockly_language(blockly_language){
    $('#blockly_language_script').remove()
    $('<script>').attr({src: 'js/blockly/msg/js/'+blockly_language+'.js',id: 'blockly_language_script'}).appendTo('body')
}

function get_actual_language(){
    return $('.language_buttons_active').attr('id')
}

function get_actual_level(){
    return parseInt($('.level_button_active').attr('id').slice(-1))
}

function get_actual_exercise(){
    return parseInt($('#select_exercise').val().slice(-1))
}

function get_total_number_levels(){
    return parseInt($('[id^=button_level]').length)
}

function get_total_number_exercises(id_level){
    return parseInt(get_json('json/level'+id_level+'/level'+id_level+'.json').exercises)
}

function get_blocks(id_level, id_exercise){
    var json_blocks = get_json('json/level'+id_level+'/exercise'+id_exercise+'.json');
    var block_xml = '<xml id="toolbox" style="display: none">'

    $.each(json_blocks.blocks, function(i, item) {
        block_xml = block_xml+'<block type="'+get_actual_language()+'_'+item+'"></block>'
    });
    
    return block_xml+'</xml>'
}

function check_level(){
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    $('.food_in_dish').remove()

    var myInterpreter = new Interpreter(code, initApi);
    function nextStep() {
        if (myInterpreter.step()) {
            window.setTimeout(nextStep, 100);
        }
        else{
            jQuery.getScript('js/level'+get_actual_level()+'/exercise'+get_actual_exercise()+'.js')
        }
    }
    nextStep();
}

function previous_exercise(){
    if (get_actual_exercise()==1){
        if(get_actual_level()!=1){
            change_exercise(get_actual_level()-1,get_total_number_exercises(get_actual_level()-1))
        }
        else{
            change_exercise(1,1)
        }
    }
    else {
        change_exercise(get_actual_level(),get_actual_exercise()-1)
    }
}

function next_exercise(){
    if(get_actual_exercise()==get_total_number_exercises(get_actual_level())){
        if(get_actual_level()!=get_total_number_levels()){
            change_exercise(get_actual_level()+1,1)
        }
        else{
            change_exercise(1,1)
        }
    }
    else{
        change_exercise(get_actual_level(),get_actual_exercise()+1)
    }
}

//Buttons and select
$("[id^=button_level]").click(function(event) {
    change_exercise(event.target.id.slice(-1),1)
})

$(".language_buttons").click(async function(event) {
    change_language(event.target.id)

    if(event.target.id=='english_language')
        change_blockly_language('en');
    else if (event.target.id=='spanish_language')
        change_blockly_language('es');
    
    workspace.updateToolbox(get_blocks(1,1)); 
})

$('#select_exercise').on('change', function() {
    change_exercise(get_actual_level(),this.value.slice(-1))
})

function open_modal(id_modal){
    $('#'+id_modal).css('top','0')
    $('#button_close_modal').css('display','block')
}

function close_modal(){
    $('.modal').css('top','-100vh')
    $('#button_close_modal').css('display','none')
}