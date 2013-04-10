$(function() {
  var tabTitle = $( "#tab_title" ),
    tabContent = $( "#tab_content" ),
    tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
    tabCounter = $("#tabs li").length;

  var tabs = $( "#tabs" ).tabs({
    beforeLoad: function( event, ui ) {
      ui.jqXHR.error(function() {
        ui.panel.html( 'Error loading tab' );
      });
    }
  });
  
  // make sortable
  tabs.find( ".ui-tabs-nav" ).sortable({
    items: "li:not(.ui-state-disabled)",
    axis: "x",
    stop: function() {
      tabs.tabs( "refresh" );
    }
  });

  // modal dialog init: custom buttons and a "close" callback reseting the form inside
  var dialog = $( "#dialog" ).dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Add: function() {
        addTab();
        $( this ).dialog( "close" );
      },
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    },
    close: function() {
      form[ 0 ].reset();
    }
  });

  // addTab form: calls addTab function on submit and closes the dialog
  var form = dialog.find( "form" ).submit(function( event ) {
    addTab();
    dialog.dialog( "close" );
    event.preventDefault();
  });
 
  // actual addTab function: adds new tab using the input from the form above
  function addTab() {
    var label = tabTitle.val() || "Tab " + tabCounter,
      id = "tabs-" + tabCounter,
      li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) ),
      //tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";
      tabContentHtml = "";
 
    tabs.find( ".ui-tabs-nav" ).append( li );
    tabs.append( "<div id='" + id + "'><p>" + tabContentHtml + "</p></div>" );
    resizeTabs();
    tabs.tabs( "refresh" );
    tabCounter++;
  }

  // addTab button: just opens the dialog
  $( "#add_tab" )
    .button()
    .click(function() {
      dialog.dialog( "open" );
    });
 
  // close icon: removing the tab on click
  tabs.delegate( "span.ui-icon-close", "click", function() {
    var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
    $( "#" + panelId ).remove();
    resizeTabs();
    tabs.tabs( "refresh" );
  });
  
  //resize tabs
  function resizeTabs() {
	  var num_tabs = ($("#tabs li").length) - 1; /* num of tabs minus 1 for the add tab button */ 
    var panel_width_offset = (2 * num_tabs) + 8; /* 8px allowance */
    var panel_width = ($(".ui-tabs-nav").innerWidth()) - panel_width_offset - 56; /* panel width minus add tab button */
    var tab_width = (panel_width/num_tabs);
    
    $("#tabs li").width(tab_width+'px');
    
  }

  $(window).load(function() {
    resizeTabs();
    $("#header").width(($("#tabs").innerWidth())-4); // i dont understand why this is necessary but i should probably put it somewhere else
  });

});