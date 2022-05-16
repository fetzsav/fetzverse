$(document).ready(function() {


	$('#quickmail').on('submit', function(e) {
		e.preventDefault();
        console.log('starting form');
		
		//get the name field value
		//var name = $('#name').val();
		//get the name field value
		var email = $('#email').val();
        var aac = $('#aac0a').val();

					
		//pretend we don't need validation
		
		//send to formspree
		$.ajax({
			url:'http://mailer.fetzverse.com/subscription/form',
			method:'POST',
			headers: {  'Access-Control-Allow-Origin': '*' },
			data:{
				email:email,
				aac0a:aac,
			},
			dataType:"json",
			success:function() {
				console.log('form success');	
				// $('#formBlock').hide();
				// $('#thankyouBlock').show();
			}	

		});		
		
	});

});	