/*      
    	function overlap() {
		  }
*/      
		
		// use to save widget position
		function findPos(div) {
			var id = $(div).attr("id");
      var x = $(div).position().left;
      var y = $(div).position().top;
      var w = $(div).width();
      var h = $(div).height();
      //debug
      $("#"+id).find("span:first").text( "L:" + x + ", T:" + y + ", W:" + w + ", H:" + h);
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
		      	containment: "parent",
		      	snap: true,
			      obstacle: ".widget[id!=\"" + id + "\"]",
			      preventCollision: true
			    });
			  }
			  
			  $( ".widget" ).resizable({
			  	//stop: overlap,
				  autoHide: true,
				  //aspectRatio: 1
				});
				 	
			});
      