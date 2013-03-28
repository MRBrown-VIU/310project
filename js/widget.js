/*      
function overlap() {
}
*/      

// use to save widget position
function findPos(div) {
  var id = $(div).attr("id");

  var w = ($(div).width()).toFixed();
  var h = ($(div).height()).toFixed();
  
  var position = $(div).position();
  var x = (position.left).toFixed();
  var y = (position.top).toFixed();
  

  //debug
  $("#"+id).find("span").text( "L:" + x + ", T:" + y + ", W:" + w + ", H:" + h);
}

// allow divs to collide with each other
$(document).ready(function(){
   
  // everything that can be dragged around
  var $draggables = $(".widget");
  var id, $draggableItem;

  // go through each item, get it's id,
  // and tell draggable() to collide with every obstacle but itself
  for (var i = 0; i < $draggables.length; i++) {
    $draggableItem = $draggables.eq(i);
    id = $draggableItem.attr("id");
    
    $draggableItem.draggable({
      handle: ".WidgetHeader",
      snap: true,
      obstacle: ".widget[id!=\"" + id + "\"], #bumber",
      preventCollision: true,
      restraint: "#collision-container",
      preventProtrusion: true
    });
  }
  
  $( ".widget" ).resizable({
    //stop: overlap,
    autoHide: true,
  });  
});

//remove widget
$(window).load(function() {
  $(".close-widget-button").click(function () {
    $(this).parent().parent().remove();
  });
});
