$(document).ready(function(){

		$('#todos').click(function(){

		var checarTodos = this.checked;
		
		$('.lista').each(function(){
			$(this).prop('checked', checarTodos);
		});


	});

});