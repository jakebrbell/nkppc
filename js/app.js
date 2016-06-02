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
        { hue: "#D3D3D3" },
        { saturation: -100 },
        { lightness: -10 }
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

  var image = {
    url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|DAD2BC',
    size: new google.maps.Size(30, 40),
    origin: new google.maps.Point(0, 0)
  }

  camp14Marker = new google.maps.Marker();
  camp15Marker = new google.maps.Marker();
  camp16Marker = new google.maps.Marker();
  camp25Marker = new google.maps.Marker();

  map.setOptions({styles: styles});
}

(function() {

  var $xhr = $.getJSON('https://aqk5q11wx9.execute-api.us-east-1.amazonaws.com/test');

  $xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }

    camp14Marker.setPosition({lat: data.camp14.latitude, lng: data.camp14.longitude});
    camp14Marker.setTitle(data.camp14.name);

    camp15Marker.setPosition({lat: data.camp15.latitude, lng: data.camp15.longitude});
    camp15Marker.setTitle(data.camp15.name);

    camp16Marker.setPosition({lat: data.camp16.latitude, lng: data.camp16.longitude});
    camp16Marker.setTitle(data.camp16.name);

    camp25Marker.setPosition({lat: data.camp25.latitude, lng: data.camp25.longitude});
    camp25Marker.setTitle(data.camp25.name);

    $('.camp-buttons').on('click', function(event) {
      var $target = $(event.target);

      $('.map-dialog').fadeOut(50, function(){
        if ($target.text().trim() === 'Camp Number 14') {
          camp14Marker.setMap(map);
          camp15Marker.setMap(null);
          camp16Marker.setMap(null);
          camp25Marker.setMap(null);

          $('.camp-name').removeClass('active-button');
          $target.addClass('active-button');

          fadeOutContent();
          $('.size').text(data.camp14.size);
          $('.location').text(data.camp14.location);
          $('.open-since').text(data.camp14.openSince);
          createDetails(data.camp14.details);
          $('.satellite, .modal-image').attr({ 'src': 'img/camp-14.png', 'alt': 'A satellite photo of Camp 14'});
          $('#modal').scrollTop(0);
          fadeInContent();
        }
        else if ($target.text().trim() === 'Camp Number 15') {
          camp14Marker.setMap(null);
          camp15Marker.setMap(map);
          camp16Marker.setMap(null);
          camp25Marker.setMap(null);

          $('.camp-name').removeClass('active-button');
          $target.addClass('active-button');

          fadeOutContent();
          $('.size').text(data.camp15.size);
          $('.location').text(data.camp15.location);
          $('.open-since').text(data.camp15.openSince);
          createDetails(data.camp15.details);
          $('.satellite, .modal-image').attr({ 'src': 'img/camp-15.png', 'alt': 'A satellite photo of Camp 15'});
          $('#modal').scrollTop(0);
          fadeInContent();
        }
        else if ($target.text().trim() === 'Camp Number 16') {
          camp14Marker.setMap(null);
          camp15Marker.setMap(null);
          camp16Marker.setMap(map);
          camp25Marker.setMap(null);

          $('.camp-name').removeClass('active-button');
          $target.addClass('active-button');

          fadeOutContent();
          $('.size').text(data.camp16.size);
          $('.location').text(data.camp16.location);
          $('.open-since').text(data.camp16.openSince);
          createDetails(data.camp16.details);
          $('.satellite, .modal-image').attr({ 'src': 'img/camp-16.png', 'alt': 'A satellite photo of Camp 16'});
          $('.modal').scrollTop(0);
          fadeInContent();
        }
        else if ($target.text().trim() === 'Camp Number 25') {
          camp14Marker.setMap(null);
          camp15Marker.setMap(null);
          camp16Marker.setMap(null);
          camp25Marker.setMap(map);

          $('.camp-name').removeClass('active-button');
          $target.addClass('active-button');

          fadeOutContent();
          $('.size').text(data.camp25.size);
          $('.location').text(data.camp25.location);
          $('.open-since').text(data.camp25.openSince);
          createDetails(data.camp25.details);
          $('.satellite, .modal-image').attr({ 'src': 'img/camp-25.png', 'alt': 'A satellite photo of Camp 25'});
          $('.modal').scrollTop(0);
          fadeInContent();
        }
      });
    });
  });

  $('.scrollspy').scrollSpy();

  $(document).ready(function(){
   $('.materialboxed').materialbox();
 });

  var fadeOutContent = function() {
    $('.facts').fadeOut();
    $('.testimonials').fadeOut();
    $('.satellite-photo').fadeOut();
  };
  var fadeInContent = function() {
    $('.facts').fadeIn();
    $('.testimonials').fadeIn();
    $('.satellite-photo').fadeIn();
  };
  var createDetails = function(arr) {
    $('.details').empty();
    for (var string of arr) {
      $('.details').append($('<li>' + string + '</li>'));
    }
  };

})();
