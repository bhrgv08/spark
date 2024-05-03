jQuery(document).ready(function ($) {
  $('.about-us-drop').click(
    function(){
       if($('.inner-menu1').hasClass('d-none')){
           $('.inner-menu1').removeClass('d-none');
       }
       else{
           $('.inner-menu1').addClass('d-none');
       }
       $('.inner-menu2').addClass('d-none');
       $('.inner-menu3').addClass('d-none');
    }
);
$('.take_action-drop').click(
  function() {
      if ($('.inner-menu0').hasClass('d-none')) {
          $('.inner-menu0').removeClass('d-none');
      } else {
          $('.inner-menu0').addClass('d-none');
      }
      $('.inner-menu2').addClass('d-none');
      $('.inner-menu1').addClass('d-none');
      $('.inner-menu3').addClass('d-none');
  }
);
$('.our-work-drop').click(
   function(){
      if($('.inner-menu2').hasClass('d-none')){
          $('.inner-menu2').removeClass('d-none');
      }
      else{
          $('.inner-menu2').addClass('d-none');
      }
      $('.inner-menu1').addClass('d-none');
      $('.inner-menu3').addClass('d-none');
   }
);

$('.event-drop').click(
  function(){
     if($('.inner-menu3').hasClass('d-none')){
         $('.inner-menu3').removeClass('d-none');
     }
     else{
         $('.inner-menu3').addClass('d-none');
     }
     $('.inner-menu2').addClass('d-none');
     $('.inner-menu1').addClass('d-none');
  }
);



  $(".homeslider").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 2000,
  });
  $(".prosli").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
  });
  $("body, h1, h2, h3, h4, h5, h6, p").jfontsize({
    btnMinusClasseId: "#jfontsize-m",
    btnDefaultClasseId: "#jfontsize-d",
    btnPlusClasseId: "#jfontsize-p",
    btnMinusMaxHits: 1,
    btnPlusMaxHits: 5,
    sizeChange: 5,
  });
  $(".helpage-facts ul.nav").tabCollapse();
  $(".toggle-btn").click(function (e) {
    e.stopPropagation();
    $("#navbar").show().toggleClass("open");
    $(".toggle-btn").toggleClass("active");
    $("body").toggleClass("no-scroll");
    $(".bg-overlay").toggleClass("active");
  });
  $(".bg-overlay").click(function () {
    $("body").removeClass("no-scroll");
    $(".toggle-btn, .bg-overlay").removeClass("active");
    $("#navbar").removeClass("open");
  });
  $(".mega-dropdown li").removeClass("dropdown");
  $(".mega-dropdown .dropdown-header").addClass("col-sm-6");
  $(".mega-dropdown .dropdown-header ul").addClass("fiftywid");
  $(".mega-dropdown .fiftywid").removeClass("dropdown-menu");
  $(".more-content").readmore({
    speed: 300,
    collapsedHeight: 55,
    heightMargin: 15,
    moreLink:
      '<a href="javascript:void();" class="read-more-contect">More <i class="fa fa-angle-down" aria-hidden="true"></i></a>',
    lessLink:
      '<a href="javascript:void();" class="less-more-contect">Less <i class="fa fa-angle-up" aria-hidden="true"></i></a>',
    embedCSS: true,
    blockCSS: "display: block; width: 100%;",
    startOpen: false,
    blockProcessed: function () {},
    beforeToggle: function () {},
    afterToggle: function () {},
  });
  var Wwidth = $(window).width();
  if (Wwidth < 768) {
    $(".footer-nav, .menu-about-us-menu-container").hide();
    $(
      ".footer-nav1, .menu-welfare-development-menu-container, .menu-rights-entitlements-programs-menu-container"
    ).hide();
    $(".footer-title.active").addClass("active").next().show();
    $(".footer-title").click(function () {
      $(this)
        .toggleClass("active")
        .parent()
        .find(".footer-nav, .menu-about-us-menu-container")
        .slideToggle("fast");
      return false;
    });
    $(".footer-title1.active").addClass("active").next().show();
    $(".footer-title1").click(function () {
      $(this)
        .toggleClass("active")
        .parent()
        .find(
          ".footer-nav1, .menu-welfare-development-menu-container, .menu-rights-entitlements-programs-menu-container"
        )
        .slideToggle("fast");
      return false;
    });
    $(".moreshow").readmore({
      speed: 300,
      collapsedHeight: 75,
      heightMargin: 15,
      moreLink:
        '<a href="javascript:void();" class="read-more-contect">More <i class="fa fa-angle-down" aria-hidden="true"></i></a>',
      lessLink:
        '<a href="javascript:void();" class="less-more-contect">Less <i class="fa fa-angle-up" aria-hidden="true"></i></a>',
      embedCSS: true,
      blockCSS: "display: block; width: 100%;",
      startOpen: false,
      blockProcessed: function () {},
      beforeToggle: function () {},
      afterToggle: function () {},
    });
  }
  $(".modal").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });
  var tri = $("body").find('[data-toggle="modal"]');
  tri.click(function () {
    var theModal = $(this).data("target"),
      videoSRC = $(this).attr("vid"),
      videotitle = $(this).attr("title"),
      videoSRCauto = videoSRC + "?autoplay=1&rel=0";
    $("#fsModal").find(".modal-title").text(videotitle);
    $(theModal + " iframe").attr("src", videoSRCauto);
    $(theModal + " button.close").click(function () {
      $(theModal + " iframe").attr("src", videoSRC);
    });
  });
  var bor = $("body").find('[data-toggle="modal"]');
  bor.click(function () {
    var borModal = $(this).data("target"),
      bortitle = $(this).attr("title");
    bordesc = $(this).attr("data-desc");
    (borSRC = $(this).attr("data-img")),
      (borcont = $(this).next("#borcont").html());
    $("#member-modal").find(".modal-title").text(bortitle);
    $("#member-modal").find(".modaldesc").text(bordesc);
    $(borModal + " img").attr("src", borSRC);
    $("#member-modal").find(".borcon").html(borcont);
  });
});
