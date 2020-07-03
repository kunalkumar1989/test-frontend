$(document).ready(function() {
	var url = localStorage.getItem("details-url");
	var imgurl = localStorage.getItem("imgurl");
	$('.details-result').remove();
	var reff = document.referrer;
	$.getJSON(url, function( data ) {
		var items = [];
		items.push( "<li class='is-size-5 has-text-centered name has-text-danger pt-3'><a class='button has-background-warning has-text-primary-light' href='home.html'>Back</a></li>" );
		items.push( "<li class='is-size-5 has-text-centered name has-text-danger pt-3'><img src='" + imgurl + "' alt='image'></li>" );
		$.each( data, function( key, val ) {
			if(key == 'id' || key == 'name' || key == 'status' || key == 'species' || key == 'type' || key == 'gender')
			items.push( "<li class='is-size-5 has-text-centered name has-text-danger' id='" + key + "'><span class='has-text-warning-light is-capitalized has-text-weight-semibold'>" + key +" :</span> "+val + "</li>" );
		});
		$( "<ul/>", {
			"class": "details-result",
			html: items.join( "" )
		}).appendTo( ".container.details" );
	});
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw-details.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}