function initMap() {
	const EastLansing = {lat: 42.723132, lng: -84.477875};
	const map = new google.maps.Map(document.getElementById("map"), {
		center: EastLansing,
		zoom: 14,
		});

		/*
		const marker = new google.maps.Marker({
			position: EastLansing,
			map: map,
		});

		const infoWindow = new google.maps.InfoWindow({
			content: '<h1>3 Cameras</h1>'
		});

		marker.addListener('click', function(){
			infoWindow.open(map,marker);
		});
		*/

	var markers = [
		{
			coords:{lat: 42.725781, lng: -84.482348},
			iconImage:'',
			content:'<h1>1 Cameras at the intersection of North Shaw Lane & Red Cedar Road</h1>'
		},
		{
			coords:{lat: 42.729256, lng: -84.477821},
			content:'<h1>4 Cameras at the intersection of Farm Lane & Auditorium Road</h1>'
		},
		{
			coords:{lat: 42.725216, lng: -84.462583},
			content:'<h1>2 Cameras at the intersection of East Shaw Lane & South Hagadorm Road</h1>'
		}
	];

	/*
	addMarker(
		{coords:{lat: 42.723132, lng: -84.477875},
		iconImage:'',
		content:'<h1>2 Cameras</h1>'
	});
	addMarker(
		{coords:{lat: 42.729256, lng: -84.477821},
		content:'<h1>4 Cameras at the intersection of Farm Lane & Auditorium Road</h1>'
	});
	*/
	for(var i = 0; i < markers.length;i++){
		addMarker(markers[i]);
	}

	function addMarker(props){
		const marker = new google.maps.Marker({
			position: props.coords,
			map: map,
			//icon:props.iconImage
		});


		if(props.iconImage){
			marker.setIcon(props.iconImage);
		}

		if(props.content){
			const infoWindow = new google.maps.InfoWindow({
			content: props.content
		});

		marker.addListener('click', function(){
			infoWindow.open(map,marker);
		});

		}

		
	}
}


	