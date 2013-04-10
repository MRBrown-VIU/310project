$(document).ready(function () {      
    $('#nav li').click(
        function () {
            //show its submenu
            $('#subnav', this).stop().slideDown(100);
        }
    );
    $('#nav li').mouseleave(
        function () {
            //hide its submenu
            $('#subnav', this).stop().slideUp(100);          
        }
    );
    //onclick calls for settings list, to be handled later  

    $('#subnav li').click(
        function () {
            $('ul', this).stop().slideDown(100);    
        }
    ); 

    $('#subnav li').mouseleave(
        function () {
            $('ul', this).stop().slideUp(100);  
        }
    );    
 
    $('#settings').click(function(){
        $("body").show();
    });
    $('#background').click(function(){
        $("body").hide();
  });
});

