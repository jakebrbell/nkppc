// Google Maps API key: AIzaSyClyM6WEEfq2z5cOzBtedaQfia7FFjam1U

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.3, lng: 127.8},
    zoom: 6,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    draggable: true
  });

  var marker = new google.maps.Marker({
    position: {lat: 39.3415, lng: 126.0319},
    map: map,
    title: 'Camp No. 14'
  });

  var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  map.setOptions({styles: styles});
}

(function() {

  $('.scrollspy').scrollSpy();



  // var map;
  // function initMap() {
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 8
  //   });
  // }

  // var $xhr = $.getJSON('https://aqk5q11wx9.execute-api.us-east-1.amazonaws.com/test');
  //
  // $xhr.done(function(data) {
  //   if ($xhr.status !== 200) {
  //       return;
  //   }
  //
  //   console.log(data.camp14.name);
  // });
})();
