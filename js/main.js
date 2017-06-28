$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});

	if($('.fb-btn').length) {
		$('.fb-btn, .google-btn, .github-btn').on('click', function() {
			var where = (window.location.pathname == '/') ? 'home' : 'account';
			ga('send', 'event', { eventCategory: 'btn-social', eventAction: 'click', eventLabel: 'Click Signup/in ('+ where +')'});	
		});
	}


	if($('#userForm').length > 0) {
		$.ajax({
			url: "https://api.free-proxies.info/user/get",
			dataType: "JSONP",
			contentType: "JSON",
			success: function(data){
				if(data != null) {
					$('#alreadySigned, #service').fadeIn('slow');
					$('#user_id').val(data["_id"]);
					$('#user_api_key').val(data["api_key"]).attr('readonly', 'readonly');
					$('#user_type').val(data["type"]).attr('readonly', 'readonly');
					$('#user_name').val(data["name"]);
					$('#host').val(data["host"]);
					setTimeout(function() {
						$('html,body').animate({
				          scrollTop: $('#user_api_key').offset().top - 20
				        }, 300);
					}, 700);
					// if(typeof(data["requests"]) !== "undefined") {
					// 	var today = new Date();
					// 	var key = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
					// 	$('#requestDay').text(data['requests'][key]).counterUp({
					// 										        delay: 10,
					// 										        time: 1000
					// 										    });
					// }
				}else{
					$('#needSignin').fadeIn('slow');
				}
			}
		});

		$('#updateUser').on('click', function(e) {
			e.preventDefault();
			var formData = $("#userForm").serializeArray();
			$.ajax({
				url: "https://api.free-proxies.info/user/update",
				method:"POST",
				data: formData,
				success: function(data){
					console.log(data);
					window.location.reload();
				}
			});
		});
	}


	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




