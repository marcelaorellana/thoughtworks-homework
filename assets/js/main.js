$(document).ready(function(){
	
    $('ul.tabs').tabs();
    $(".addresources").hide();
    $(".specify-resources").on("click", function(){
    	var addResouces = $('<div class="add-resources" id="add-r-1"><p>(Saparate multiple resources name with commas)</p><input type="text" class="add-input1" id="add-i-1"><div class="buttons-add"><a class="waves-effect waves-light btn btn-small add-button">Add Resources</a><a class="waves-effect waves-light btn btn-small close-button">Close</a></div></div>');
    	console.log("hola");
    	$(this).parent().parent().parent().parent().parent().append(addResouces);
    	$(".specify-resources").on("click", function(){
    		addResouces.empty();
    	});

    	$(".add-button").on("click", function(){
    		var resources =  $(".add-input1").val();
    		if(resources != ""){
    			var arrayResources = resources.split(",");
    			console.log(arrayResources);
    			for(var i = 0; i < arrayResources.length; i++){
    				$(this).parent().parent().parent().children("div").children('div.info').children('div.actions').children('div.resources').children('ul').append('<li><p> '+ arrayResources[i] + ' <a class="clear" href="#"><i class="material-icons">clear</i></a></p></li>');
    			}
	    		
	    		$(".add-input1").val("");
	    		addResouces.empty();
    		}
    		
    	});
    	$(".close-button").on("click", function(){
    		addResouces.empty();
    	});

    });
   



    $(".add-button1").on("click", function(){
    		var sources =  $(".add-input").val();
    		console.log(sources);
    	});
    
  });