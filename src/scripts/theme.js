window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
// =require slate/a11y.js
// =require slate/cart.js
// =require slate/utils.js
// =require slate/rte.js
// =require slate/sections.js
// =require slate/currency.js
// =require slate/images.js
// =require slate/variants.js

// Vendor
// =require vendor.js

/*================ Sections ================*/
// =require sections/product.js

/*================ Templates ================*/
// =require templates/customers-addresses.js
// =require templates/customers-login.js

$(document).ready(function() {

  $('.navbar-brand').on('mouseover mouseout touchstart touchstop', function() {
    $('#gumbit').toggleClass('popped');
  })

  $('.featured-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true
  });

  // $('.featured-products-slider').slick({
  //   slidesToShow: 3,
  //   // slidesToScroll: 1,
  //   arrows: true,
  //   adaptiveHeight: true,
  //   responsive: [{
  //     breakpoint: 1224,
  //     settings: {
  //       slidesToShow: 3,
  //       infinite: true
  //     }
  //   }, {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 5,
  //       infinite: true
  //     }
  //   }, {
  //     breakpoint: 320,
  //     // settings: "unslick" // destroys slick
  //     settings: {
  //       slidesToShow: 3,
  //       infinite: true
  //     }
  //   }]
  // });

  $('.product-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    asNavFor: '.product-image-thumbnails'
  });

  $(".product-image-thumbnails").slick({
    asNavFor: '.product-image-slider',
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 1224,
      settings: {
        slidesToShow: 8,
        infinite: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        infinite: true
      }
    }, {
      breakpoint: 320,
      // settings: "unslick" // destroys slick
      settings: {
        slidesToShow: 3,
        infinite: true
      }
    }]
  });

  // Interactions

  // $('.newsletter-banner-image').on('click touchstart', function() {
  //   $("html, body").animate({scrollTop: 0}, 'fast');
  //   return false;
  // });

  // Defaults

  // Color of the month... turn the last part of title blue? I tried, not working :/ must give up now bye
  // function getColorText(str) {
  //     return str.split(':')[1];
  // }
  // var text = $('#shopify-section-1525234644885 h2 text');
  // var first = $('#shopify-section-1525234644885 h2 text');
  // var second = $('#shopify-section-1525234644885 h2 text');
  // document.getElementById('#shopify-section-1525234644885').innerHTML = first + `<span>${second}</span>`;
  // console.log(text, first, second);

  var sections = new slate.Sections();
  sections.register('product', theme.Product);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Target tables to make them scrollable
  var tableSelectors = '.rte table';

  slate.rte.wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  var iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  slate.rte.wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper'
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }
});
