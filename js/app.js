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

    var styles = [
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
  var setMapMarkers = function(camps) {
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

  var fadeInContent = function() {
    $('.camp-info').fadeIn(500);
    $('.facts').fadeIn(500);
    $('.testimonials').fadeIn(500);
    $('.satellite-photo').fadeIn(500);
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

  $('.book-img').on('mouseenter', (event) => {
    $(event.target).addClass('z-depth-5');
  });
  $('.book-img').on('mouseleave', (event) => {
    $(event.target).removeClass('z-depth-5');
  });

  const $xhr = $.getJSON('https://aqk5q11wx9.execute-api.us-east-1.amazonaws.com/test');

  $xhr.done((data) => {
    setMapMarkers(data);

    const showCamp14 = function(camp14Info, $target) {
      camp14Marker.setMap(map);
      camp15Marker.setMap(null);
      camp16Marker.setMap(null);
      camp25Marker.setMap(null);

      $('.camp-name').removeClass('active-button');
      $target.addClass('active-button');

      $('.camp-info').fadeOut(500, () => {
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
      camp14Marker.setMap(null);
      camp15Marker.setMap(map);
      camp16Marker.setMap(null);
      camp25Marker.setMap(null);

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
      camp14Marker.setMap(null);
      camp15Marker.setMap(null);
      camp16Marker.setMap(map);
      camp25Marker.setMap(null);

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
      camp14Marker.setMap(null);
      camp15Marker.setMap(null);
      camp16Marker.setMap(null);
      camp25Marker.setMap(map);

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

    $('.camp-buttons').on('click', (event) => {
      const $target = $(event.target);

      $('.map-dialog').fadeOut(100, () => {
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

  $xhr.fail(() => {
    Materialize.toast('Something went wrong. Please try again', 4000);
  });
})();
