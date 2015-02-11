$(document).ready(function() {
	$("#list").empty();
	submissions = 0;
// allows users to press enter to add
	$('#add-items').keyup(function(event) {
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});
//clears entire list
	$(document).on("click", ".redo-icon", function() {
		$("#list").empty();
		submissions = 0;
	});

// allows users to add items to list
	$('#add').click(function(){
		var txtbox = document.getElementById('add-items');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#add-items').val())) {
			alert('Please enter text to add an item to the list');
		} else {
			$('<li class="list-item-active"></li>').appendTo('#list').html('<div class="delete"></div><span>' + txtval + '</span><div class="check"></div>');
			
			/* Attempt at animation, need to fix
			$('.list-item-active').animate({ opacity: "1" },{ queue: true, duration: 'slow' });
			$('.list-item-active').animate({ marginTop: "0px" },{ queue: false, duration: 'slow' });
			*/
			
			document.getElementById('add-items').value = '';
		};
	});


//allows user to delete items from their list
	$('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

//allows user to cross an item off their list
	$('#list').on('click', 'li', function(){
		if ($(this).hasClass('list-item-active')){
		 $(this).removeClass('list-item-active').addClass('strike');
		}
		else {
			$(this).removeClass('strike').addClass('list-item-active');
		}
});

});