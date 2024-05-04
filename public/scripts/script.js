// carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

var owl = $(".owl-carousel");
owl.owlCarousel();
$(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".customPrevBtn").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
