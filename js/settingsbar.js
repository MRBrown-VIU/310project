$(document).ready(function () {      
    $('#nav li').click(
        function () {
            //show its submenu
            $('ul', this).stop().slideDown(100);
 
        }
    );
    $('#nav li').mouseleave(
        function () {
            //hide its submenu
            $('ul', this).stop().slideUp(100);          
        }
    );
    //onclick calls for settings list, to be handled later   
    $('#settings').click(function(){
        $("body").show();
    });
    $('#background').click(function(){
        $("body").hide();
  });
});

