$(document).ready(function() {
  var windowHeight = $(window).height();

  /* window resize */
  $(window).on('resize', function() {
    windowHeight = $(window).height();
    $('#index').height(windowHeight);
  });

  /* scroll fix header */
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > windowHeight) {
      $('#site_header').addClass('fixed');
    } else {
      $('#site_header').removeClass('fixed');
    }
  });

  /* fixed header navigation */
  $('#site_header').on('click', 'a', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    if (Modernizr.history) {
      history.pushState(null, null, target);
    }
    $('html, body').animate({
      scrollTop: target != '#about' ? $(target).offset().top - $('#site_header').height() : $(target).offset().top
    }, 600);
  });

  /* start browse */
  $('#start_browse').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 600);
  });

  /* about carousel */
  $('#carousel_about').carouFredSel({
    circular: false,
    infinite: false,
    auto: false,
    items:  1,
    pagination: {
      container: '#pagination_about',
      anchorBuilder: function(nr) {
        return '<a class="pagi-item" href="#' + nr + '">' + nr + '</a>';
      }
    }
  });

  /* recruit carousel */
  $('#tab_recruit').carouFredSel({
    circular: false,
    infinite: false,
    direction: 'up',
    auto: false,
    items:  1,
    pagination: {
      container: '#tab_nav_recruit',
      anchorBuilder: function() {
        return '<a class="tab-item">' + $(this).data('categ') + '</a>';
      }
    }
  });

  /* init bootstrap modal */
  $('.jobs_list').on('click', 'a', function() {
    var article = $(this).attr('data-detail'),
        title = $(this).text();
    $('#modal_jobs_title').text(title);
    $(article).removeClass('hide').siblings('.job_detail').addClass('hide');
    $('#modal_jobs').modal();
  });

  $('.recruit_detail').on('click', function() {
    var detail = $(this).attr('data-detail'),
        title = $(detail).data('title');
    $('#modal_recruit_detail_title').text(title);
    $(detail).removeClass('hide').siblings('.recruit_detail_content').addClass('hide');
    $('#modal_recruit_detail').modal();
  });

  /* init skrollr */
  if (!('ontouchstart' in document.documentElement)) {
    skrollr.init();
  }
});
