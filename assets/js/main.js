$(document).ready(function(){
    $('ul.tabs').tabs(); // Initialize Materialize Tabs. 
    //funtion when click on link "+ Specify Resouces".
    $(".specify-resources").on("click", function(){
    	var addResouces = $('<div class="add-resources"><input type="text" class="add-input1"" placeholder="(Saparate multiple resources name with commas)"><div class="buttons-add"><a class="waves-effect waves-light btn btn-small add-button">Add Resources</a><a class="waves-effect waves-light btn btn-small close-button">Close</a></div></div>');// Variable width the html structure to add new resources.
    	$(this).parent().parent().parent().parent().parent().append(addResouces); // Finds the parent of the card (div.card) and appends addResources.
    	$(".add-input1").focus(); // Focus cursor on input.

    	//function so if "+ Specify Resouces" is click again it won't duplicate.
    	$(".specify-resources").on("click", function(){
    		addResouces.remove();
    	});

    	//function to add new resources when click on button "Add Resources".
    	$(".add-button").on("click", function(){
    		var resources =  $(".add-input1").val(); //variable to keep value of input.

    		// Input should not be empty or have more then 30 characters.
    		if(resources != "" && resources.length < 30){
    			var arrayResources = resources.split(","); // array to keep input separated by commas.
    			console.log(arrayResources);
    			// Goes through arrayResources and appends new resources to the list.
    			for(var i = 0; i < arrayResources.length; i++){
    				//if any element of arrayResources is not empty.
    				if(arrayResources[i] != ""){
    					$(this).parent().parent().parent().children("div").children('div.info').children('div.actions').children('div.resources').children('ul').append('<li><p> '+ arrayResources[i] + ' <a class="clear" href="#"><i class="material-icons">clear</i></a></p></li>');
    				}
    				
    			}
	    		addResouces.remove(); // Removes addResouces after click on "Add Resources".

	    		// function to remove the resource when click on "x".
	    		$(".clear").on("click", function(){
					$(this).parent().parent().remove();
			    });
    		}
    		
    	});
    	// function to remove addResouces when click on "clear" button.
    	$(".close-button").on("click", function(){
    		addResouces.remove();
    	});

    });
   // function to remove the resource when click on "x".
    $(".clear").on("click", function(){
		$(this).parent().parent().remove();
    });
    
  });