function initAutocomplete() {
  var startInput = document.getElementById('start-location');
  var endInput = document.getElementById('destination');

  new google.maps.places.Autocomplete(startInput);
  new google.maps.places.Autocomplete(endInput);
}

function selectTab(element) {
  document
    .querySelectorAll('.tab-btn')
    .forEach((tab) => tab.classList.remove('active'));
  element.classList.add('active');
}

$(document).ready(function () {
  $('.service-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});
