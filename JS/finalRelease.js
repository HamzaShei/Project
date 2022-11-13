/**************************************
* TITLE: finalRelease.js
* AUTHOR: Hamza SHeikh
* Date: 8 December 2021
* PURPOSE: This script will be used with PullingThrough.html
* 
**************************************/
$(document).ready(function() {
	
	
	$( "#register" ).accordion({heightStyle:"content"});

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
	});

	$( "input[type='submit']" ).button();		
	$( "input[type='reset']" ).button();		
	$( "#reset" ).button();
	$( "#button" ).button();

	$( "#button-icon" ).button({
		icon: "ui-icon-gear",
		showLabel: false
	});


$( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
	
});



	$( "input[type='radio']" ).checkboxradio();
	$( "input[type='checkbox']" ).checkboxradio();

	$( "#deposit" ).controlgroup();


	$( "#tabs" ).tabs();



	$( "#dialog" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "Cancel",
				click: function() {
					$( this ).dialog( "close" );
				}
			}
		]
	});

	// Link to open the dialog
	$( "#dialog-link" ).click(function( event ) {
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	});



	$( "#datepicker" ).datepicker({
		inline: true
	});

	$( "#datepicker2" ).datepicker({
		inline: true
	});

	$( "#slider" ).slider({
		
	});



	$( "#progressbar" ).progressbar({
		value: 20
	});



	$( "#spinner" ).spinner();



	$( "#menu" ).menu();



	$( "#tooltip" ).tooltip();



	$( "#selectmenu" ).selectmenu();


	// Hover states on the static widgets
	$( "#dialog-link, #icons li" ).hover(
		function() {
			$( this ).addClass( "ui-state-hover" );
		},
		function() {
			$( this ).removeClass( "ui-state-hover" );
		}
	);
	
	
	
    
 

  

// replaces submit button this function will validate reuired fields in form
/**************************************
	  Name: submithandler
	  PURPOSE:
	    form validation 
	  PARAMETERS:
	    None
	  RETURN VALUE:
	    None
	***************************************/
		$.validator.setDefaults({
			submitHandler: function() {
			
// for loop check radio button clicked
			var radio = document.getElementsByName( "radio" );
	var goal = "Goal: ";
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			goal += radio[i].value;
		}
	}
	
	// for loop to check checkbox clicked
	var check = document.getElementsByName( "checkbox" );
	var type = "Home Type: ";
	for (var i = 0; i < check.length; i++) {
		if (check[i].checked) {
			type += check[i].value;
		}
	}
	
//takes the string variable and appends the output to the page using append
				var strspinner = "Owned Homes: " + $( "#spinner" ).val();
				var strfName = "First Name: " + $( "#fname" ).val();
				var strlName = "Last Name: " + $( "#lname" ).val();
				var stremail = "Email: " + $( "#email" ).val();
				var strpwd = "Password: " + $( "#password" ).val();
				var strphone = "Phone:" + $( "#phone" ).val();
				var strpreference = "preference: " + $( "#msg" ).val();
				var strdate = "Availability: " + $( "#datepicker" ).datepicker( "getDate" )
	
				
				
				
								$("#submitPage").append("<br> " + strfName);
								$("#submitPage").append("<br><br>  " + strlName);
								$("#submitPage").append("<br><br>  " + stremail);
								$("#submitPage").append("<br><br>  " +  strpwd);
								$("#submitPage").append("<br><br>  " + strphone);
								$("#submitPage").append("<br><br>  " + strpreference);
								$("#submitPage").append("<br><br>  " + strspinner);
								$("#submitPage").append("<br><br>  " + type);
								$("#submitPage").append("<br><br>  " + goal);
								$("#submitPage").append("<br><br>  " + strdate);
									
		
				
			}, // end submitHandler
			
			
			errorPlacement: function (error, element) {
			if (element.attr("name") == "check") {
				error.insertAfter($( "#checkbox" ));
			}
			else {
				error.insertAfter(element);
			}
		}

		}); 
		
		
		$("#registerForm").validate({ // This validates required field in the form.
			ignore: [],
// rules for user error 
		rules: {
			fname: {
				required: true,
				
			},
			lname: {
				required: true,
				
			},
			checkbox: {
				required: true
			},
			
			radio: {
				required: true
			},
			
			email: {
				required: true,
				email: true
			},
			
			password: {
				required: true,
				minlength: 10
			},
			
			spinner: {
				required: true,
				digits: true,
				
			},
			
			phone: {
				required: true,
				digits: true,
				minlength: 10,
				maxlength: 10
			},
			
			
			
			
			
		},
// messages shown when validation error occurs according to the user input
		messages: {
			fname: {
				required: "First Name required.",
			},
			
			lname: {
				required: "Last Name required.",
			},
			
			checkbox: {
				required: "Home type required."
			},
			
			radio: {
				required: "Goal required."
			},
			
			spinner: {
				required: "Enter numbers only.",
				digits: "Enter numbers only.",
			},
			
			email: {
				required: "valid email required.",
				email: "check that email is valid."
			},
			
			password: {
				required: "password required.",
				minlength: "Password must be at least 10 characters."
			},
		
			phone: {
				required: "valid number required.",
				digits: "enter numbers only (0-9).",
				minlength: "Please enter exactly 10 digits.",
				maxlength: "Please enter exactly 10 digits.",
			},
			
			
			
		}
	});	
	
		
	}); 