/* eslint-disable no-undef */

(function() {
  'use strict';

  let map;
  let camp14Marker;
  let camp15Marker;
  let camp16Marker;
  let camp25Marker;

  window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.3, lng: 127.8 },
      zoom: 6,
      disableDefaultUI: true,
      zoomControl: true,
      scrollwheel: false,
      draggable: true
    });

    const styles = [
      {
        stylers: [
          { hue: '#D3D3D3' },
          { saturation: -100 },
          { lightness: -10 }
        ]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { lightness: 100 },
          { visibility: 'simplified' }
        ]
      }, {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ];

    // Create google maps marker for each prison camp
    camp14Marker = new google.maps.Marker();
    camp15Marker = new google.maps.Marker();
    camp16Marker = new google.maps.Marker();
    camp25Marker = new google.maps.Marker();

    map.setOptions({ styles });
  };

  $('.first-header').fadeIn(3000, function() {
    $('.second-header').fadeIn(3000);
  });

  // Initialize Materialize scrollspy
  $('.scrollspy').scrollSpy();

  // Initialize Materialize materialbox for enlarging images
  $('.materialboxed').materialbox();

  // Set positions and titles for google maps markers of each prison camp
  const setMapMarkers = function(camps) {
    camp14Marker.setPosition({
      lat: camps.camp14.latitude,
      lng: camps.camp14.longitude
    });
    camp15Marker.setPosition({
      lat: camps.camp15.latitude,
      lng: camps.camp15.longitude
    });
    camp16Marker.setPosition({
      lat: camps.camp16.latitude,
      lng: camps.camp16.longitude
    });
    camp25Marker.setPosition({
      lat: camps.camp25.latitude,
      lng: camps.camp25.longitude
    });

    camp14Marker.setTitle(camps.camp14.name);
    camp15Marker.setTitle(camps.camp15.name);
    camp16Marker.setTitle(camps.camp16.name);
    camp25Marker.setTitle(camps.camp25.name);
  };

  const fadeInContent = function() {
    $('.camp-info').fadeIn(500);
    $('.facts').fadeIn(500);
    $('.testimonials').fadeIn(500);
    $('.satellite-photo').fadeIn(500);
  };

  const fadeOutContent = function() {
    $('.facts').fadeOut(500);
    $('.testimonials').fadeOut(500);
    $('.satellite-photo').fadeOut(500);
  };

  // Create and append list elements for the details about each camp
  const createDetails = function(arr) {
    $('.details').empty();

    for (const elem of arr) {
      const $li = $('<li>').text(elem);
      $('.details').append($li);
    }
  };

  // Create and append paragraph elements for the testimonials about each camp
  const createTestimonials = function(arr) {
    $('.testimonials').empty();

    const $h4 = $('<h4>').text('Testimonials');
    $h4.addClass('center-align ebony-clay-text');
    $('.testimonials').append($h4);
    for (const elem of arr) {
      const $p = $('<p>').text(elem);
      $('.testimonials').append($p);
    }
  };

  const resetCampMarkers = function() {
    camp14Marker.setMap(null);
    camp15Marker.setMap(null);
    camp16Marker.setMap(null);
    camp25Marker.setMap(null);
  };

  $('.book-img').on('mouseenter', (event) => {
    $(event.target).addClass('z-depth-5');
  });
  $('.book-img').on('mouseleave', (event) => {
    $(event.target).removeClass('z-depth-5');
  });

  const $xhr = $.getJSON('https://aqk5q11wx9.execute-api.us-east-1.amazonaws.com/test');

  $xhr.done((data) => {
    setMapMarkers(data);

    const showCamp = function(camp, $target, campNumber) {
      resetCampMarkers();

      if (campNumber === '14') {
        camp14Marker.setMap(map);
      } else if (campNumber === '15') {
        camp15Marker.setMap(map);
      } else if (campNumber === '16') {
        camp16Marker.setMap(map);
      } else if (campNumber === '25') {
        camp25Marker.setMap(map);
      }

      $('.camp-name').removeClass('active-button');
      $target.addClass('active-button');

      $('.camp-info').fadeOut(500, () => {
        $('.camp-info>h3').text(camp.name);
        $('.size').text(camp.size);
        $('.location').text(camp.location);
        $('.open-since').text(camp.openSince);
        createDetails(camp.details);
        createTestimonials(camp.testimonials);
        $('.satellite, .modal-image').attr({
          src: `img/camp-${campNumber}.png`
        });
        $('.satellite, .modal-image').attr({
          alt: `A photo of Camp ${campNumber}`
        });
        fadeInContent();
      });
      fadeOutContent();
    };

    $('.camp-buttons').on('click', (event) => {
      const $target = $(event.target);

      $('.map-dialog').fadeOut(100, () => {
        const campNumber = $target.text().trim().slice(-2);
        showCamp(data[`camp${campNumber}`], $target, campNumber);
      });
    });
  });

  $xhr.fail(() => {
    Materialize.toast('Something went wrong. Please try again', 4000);
  });
})();
