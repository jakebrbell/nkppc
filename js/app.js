// Google Maps API key: AIzaSyClyM6WEEfq2z5cOzBtedaQfia7FFjam1U

var map;
var camp14Marker;
var camp15Marker;
var camp16Marker;
var camp25Marker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.3, lng: 127.8},
    zoom: 6,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    draggable: true
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

  camp14Marker = new google.maps.Marker({
    position: {lat: 39.3415, lng: 126.0319},
    // animation: google.maps.Animation.DROP,
    title: 'Camp No. 14'
  });
  camp15Marker = new google.maps.Marker({
    position: {lat: 39.4032, lng: 126.5059},
    // animation: google.maps.Animation.DROP,
    title: 'Camp No. 15'
  });
  camp16Marker = new google.maps.Marker({
    position: {lat: 41.1849, lng: 129.2032},
    // animation: google.maps.Animation.DROP,
    title: 'Camp No. 16'
  });
  camp25Marker = new google.maps.Marker({
    position: {lat: 41.5002, lng: 129.4334},
    // animation: google.maps.Animation.DROP,
    title: 'Camp No. 25'
  });

  map.setOptions({styles: styles});
}

(function() {

  $('.scrollspy').scrollSpy();

  var changeContent = function() {
    $('.facts').fadeOut().fadeIn();
    $('.testimonials').fadeOut().fadeIn();
    $('.satellite-photo').fadeOut().fadeIn();
  };

  $('.camp-buttons').on('click', function(event) {
    var $target = $(event.target);

    if ($target.text().trim() === 'Camp Number 14') {
      camp14Marker.setMap(map);
      camp15Marker.setMap(null);
      camp16Marker.setMap(null);
      camp25Marker.setMap(null);

      $('.camp-name').removeClass('active-button');
      $target.addClass('active-button');
      changeContent();
    }
    else if ($target.text().trim() === 'Camp Number 15') {
      camp14Marker.setMap(null);
      camp15Marker.setMap(map);
      camp16Marker.setMap(null);
      camp25Marker.setMap(null);

      $('.camp-name').removeClass('active-button');
      $target.addClass('active-button');
      changeContent();
    }
    else if ($target.text().trim() === 'Camp Number 16') {
      camp14Marker.setMap(null);
      camp15Marker.setMap(null);
      camp16Marker.setMap(map);
      camp25Marker.setMap(null);

      $('.camp-name').removeClass('active-button');
      $target.addClass('active-button');
      changeContent();
    }
    else if ($target.text().trim() === 'Camp Number 25') {
      camp14Marker.setMap(null);
      camp15Marker.setMap(null);
      camp16Marker.setMap(null);
      camp25Marker.setMap(map);

      $('.camp-name').removeClass('active-button');
      $target.addClass('active-button');
      changeContent();
    }
  });


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
