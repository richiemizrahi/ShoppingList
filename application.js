$(document).ready(function(){

	//Gets whats in the text box and calls the function add

		//click or add an item
		$("#add").click(add);
		$("#newItem").keydown(function(enter){
			if(enter.keyCode == 13){
				add();
			}
		});

		//make the list sortable
		$('ol').sortable();
		
		//check-off an item
		$("ol").on("click", ".checks", function(){
			console.log('strike');
			$(this).parent().find('span').toggleClass('strike');
			$(this).toggleClass('green red');
		});
		//delete an item
		$("ol").on("click", ".delete", function(){
			console.log('remove');
			$(this).closest('li').remove();

		});



	//Sets the info in the text box to variable item.
	function add(){
		var item = $('#newItem').val();
		console.log(item);
		if(item == '')
		{
			alert('You didn\'t enter anything!');
		}
		else{
			var newListItem = '<li class="newItem"><h2><span>'+item+'</span></h2><input type="button" name="delete" class="button delete"><input type="button" name="check" class="button checks green"></li>'
			$('ol').prepend(newListItem);
			$('li:first-child').effect('slide');
			$('#newItem').val("").focus(); 
		}
	}


});