$(document).ready(function(){
// Draggable

$( "#draggable" ).draggable();
// Accordion

$( "#accordion" ).accordion();

// Autocomplete
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags

   } );


// Button


    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );

// Checkboxradio
    $( "input" ).checkboxradio({
      icon: false
    });

// Controlgroup/


  var page = $( "#page" );
    var basicControls = [ "#print", "#bold", "#italic", "#undo", "#redo" ];
    var valueControls = [ "#fontsize", "#forecolor", "#hilitecolor", "#backcolor", "fontname" ];
 
    $( "#print" ).button({
      "icon": "ui-icon-print",
      "showLabel": false
    });
    $( "#redo" ).button({
      "icon": "ui-icon-arrowreturnthick-1-e",
      "showLabel": false
    });
    $( "#undo" ).button({
      "icon": "ui-icon-arrowreturnthick-1-w",
      "showLabel": false
    });
 
    $( ".toolbar" ).controlgroup();
    $( "#zoom" ).on( "selectmenuchange", function() {
      page.css({ "zoom": $( this ).val() });
    })
    $( basicControls.concat( valueControls ).join( ", " ) ).on( "click change selectmenuchange",
      function() {
        document.execCommand(
          this.id,
          false,
          $( this ).val()
        );
      } );
    $( "form" ).on( "submit", function( event ) {
      event.preventDefault();
    })


});
