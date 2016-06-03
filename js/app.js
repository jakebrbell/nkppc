function initMap() {
  'use strict';

  window.map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.3, lng: 127.8 },
    zoom: 6,
    disableDefaultUI: true,
    zoomControl: true,
    scrollwheel: false,
    draggable: true
  });

  var styles = [
    {
      stylers: [
        { hue: '#D3D3D3' },
        { saturation: -100 },
        { lightness: -10 }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { lightness: 100 },
        { visibility: 'simplified' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  // Create google maps marker for each prison camp
  window.camp14Marker = new google.maps.Marker();
  window.camp15Marker = new google.maps.Marker();
  window.camp16Marker = new google.maps.Marker();
  window.camp25Marker = new google.maps.Marker();

  window.map.setOptions({ styles: styles });
}

(function() {
  'use strict';

  $('.first-header').fadeIn(3000, function() {
    $('.second-header').fadeIn(3000);
  });

  // Initialize Materialize scrollspy
  $('.scrollspy').scrollSpy();

  // Initialize Materialize materialbox for enlarging images
  $(document).ready(function() {
    $('.materialboxed').materialbox();
  });

  // Set positions and titles for google maps markers of each prison camp
  var setMapMarkers = function(camps) {
    var camp14Pos = { lat: camps.camp14.latitude, lng: camps.camp14.longitude };

    window.camp14Marker.setPosition(camp14Pos);
    window.camp14Marker.setTitle(camps.camp14.name);

    var camp15Pos = { lat: camps.camp15.latitude, lng: camps.camp15.longitude };

    window.camp15Marker.setPosition(camp15Pos);
    window.camp15Marker.setTitle(camps.camp15.name);

    var camp16Pos = { lat: camps.camp16.latitude, lng: camps.camp16.longitude };

    window.camp16Marker.setPosition(camp16Pos);
    window.camp16Marker.setTitle(camps.camp16.name);

    var camp25Pos = { lat: camps.camp25.latitude, lng: camps.camp25.longitude };

    window.camp25Marker.setPosition(camp25Pos);
    window.camp25Marker.setTitle(camps.camp25.name);
  };

  var fadeInContent = function() {
    $('.camp-info').fadeIn(500);
    $('.facts').fadeIn(500);
    $('.testimonials').fadeIn(500);
    $('.satellite-photo').fadeIn(500);
  };

  // Create and append list elements for the details about each camp
  var createDetails = function(arr) {
    $('.details').empty();
    for (var i = 0; i < arr.length; i++) {
      $('.details').append($('<li>' + arr[i] + '</li>'));
    }
  };

  // Create and append paragraph elements for the testimonials about each camp
  var createTestimonials = function(arr) {
    $('.testimonials').empty();
    var $h4 = $('<h4>').text('Testimonials');

    $h4.addClass('center-align ebony-clay-text');
    $('.testimonials').append($h4);
    for (var i = 0; i < arr.length; i++) {
      $('.testimonials').append($('<p>' + arr[i] + '</p>'));
    }
  };

  $('.book-img').on('mouseenter', function(event) {
    $(event.target).addClass('z-depth-5');
  });
  $('.book-img').on('mouseleave', function(event) {
    $(event.target).removeClass('z-depth-5');
  });

  var $xhr = $.getJSON('https://aqk5q11wx9.execute-api.us-east-1.amazonaws.com/test');

  $xhr.done(function(data) {
    if ($xhr.status !== 200) {
      Materialize.toast('Something went wrong. Please try again', 4000);

      return;
    }

    setMapMarkers(data);

    var showCamp14 = function(camp14Info, $target) {
      window.camp14Marker.setMap(window.map);
      window.camp15Marker.setMap(null);
      window.camp16Marker.setMap(null);
      window.camp25Marker.setMap(null);

      $('.camp-name').removeClass('active-button');
      $target.addClass('active-button');

      $('.camp-info').fadeOut(500, function() {
        $('.camp-info>h3').text(camp14Info.name);
        $('.size').text(camp14Info.size);
        $('.location').text(camp14Info.location);
        $('.open-since').text(camp14Info.openSince);
        createDetails(camp14Info.details);
        createTestimonials(camp14Info.testimonials);
        $('.satellite, .modal-image').attr({ src: 'img/camp-14.png' });
        $('.satellite, .modal-image').attr({ alt: 'A photo of Camp 14' });
        fadeInContent();
      });
      $('.facts').fadeOut(500);
      $('.testimonials').fadeOut(500);
      $('.satellite-photo').fadeOut(500);
    };

    var showCamp15 = function(camp15Info, $target) {
      window.camp14Marker.setMap(null);
      window.camp15Marker.setMap(window.map);
      window.camp16Marker.setMap(null);
      window.camp25Marker.setMap(null);

      $('.camp-name').removeClass('active-button');
      $target.addClass('active-button');

      $('.camp-info').fadeOut(500, function() {
        $('.camp-info>h3').text(camp15Info.name);
        $('.size').text(camp15Info.size);
        $('.location').text(camp15Info.location);
        $('.open-since').text(camp15Info.openSince);
        createDetails(camp15Info.details);
        createTestimonials(camp15Info.testimonials);
        $('.satellite, .modal-image').attr({ src: 'img/camp-15.png' });
        $('.satellite, .modal-image').attr({ alt: 'A photo of Camp 15' });
        fadeInContent();
      });
      $('.facts').fadeOut(500);
      $('.testimonials').fadeOut(500);
      $('.satellite-photo').fadeOut(500);
    };

    var showCamp16 = function(camp16Info, $target) {
      window.camp14Marker.setMap(null);
      window.camp15Marker.setMap(null);
      window.camp16Marker.setMap(window.map);
      window.camp25Marker.setMap(null);

      $('.camp-name').removeClass('active-button');
      $target.addClass('active-button');

      $('.camp-info').fadeOut(500, function() {
        $('.camp-info>h3').text(camp16Info.name);
        $('.size').text(camp16Info.size);
        $('.location').text(camp16Info.location);
        $('.open-since').text(camp16Info.openSince);
        createDetails(camp16Info.details);
        createTestimonials(camp16Info.testimonials);
        $('.satellite, .modal-image').attr({ src: 'img/camp-16.png' });
        $('.satellite, .modal-image').attr({ alt: 'A photo of Camp 16' });
        fadeInContent();
      });
      $('.facts').fadeOut(500);
      $('.testimonials').fadeOut(500);
      $('.satellite-photo').fadeOut(500);
    };

    var showCamp25 = function(camp25Info, $target) {
      window.camp14Marker.setMap(null);
      window.camp15Marker.setMap(null);
      window.camp16Marker.setMap(null);
      window.camp25Marker.setMap(window.map);

      $('.camp-name').removeClass('active-button');
      $target.addClass('active-button');

      $('.camp-info').fadeOut(500, function() {
        $('.camp-info>h3').text(camp25Info.name);
        $('.size').text(camp25Info.size);
        $('.location').text(camp25Info.location);
        $('.open-since').text(camp25Info.openSince);
        createDetails(camp25Info.details);
        createTestimonials(camp25Info.testimonials);
        $('.satellite, .modal-image').attr({ src: 'img/camp-25.png' });
        $('.satellite, .modal-image').attr({ alt: 'A photo of Camp 25' });
        fadeInContent();
      });
      $('.facts').fadeOut(500);
      $('.testimonials').fadeOut(500);
      $('.satellite-photo').fadeOut(500);
    };

    $('.camp-buttons').on('click', function(event) {
      var $target = $(event.target);

      $('.map-dialog').fadeOut(100, function() {
        if ($target.text().trim() === 'Camp Number 14') {
          showCamp14(data.camp14, $target);
        }
        else if ($target.text().trim() === 'Camp Number 15') {
          showCamp15(data.camp15, $target);
        }
        else if ($target.text().trim() === 'Camp Number 16') {
          showCamp16(data.camp16, $target);
        }
        else if ($target.text().trim() === 'Camp Number 25') {
          showCamp25(data.camp25, $target);
        }
      });
    });
  });

  $xhr.fail(function() {
    Materialize.toast('Something went wrong. Please try again', 4000);
  });
})();
