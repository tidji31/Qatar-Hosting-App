$(document).ready(function() {
    //change the background color of the nav bar (small devices)
    $("#toggler").click(function() {
        if ($(window).scrollTop() <= 200) {
            if ($("#navbarSupportedContent").is(":visible") == false) {
                $(".navig").css(
                    "background",
                    "linear-gradient(to left, #385bc9,#2e417d)"
                );
            } else {
                $(".navig").css("background", "");
            }
        }
    });
    //change the background color of the nav bar (if scrolling)
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            $(".navig").css(
                "background",
                "linear-gradient(to left, #385bc9,#2e417d)"
            );
        } else {
            $(".navig").css("background", "");
        }
    });
    //show button <read more> for discription when the mouse is over OR clicked in the main class
    var classes = ["1", "2", "3", "4", "5", "6"];
    $.each(classes, function(i, c) {
        $("." + c).click(function() {
            $("[id^=bmore]").hide();
            $("#bmore" + c).toggle();
        });
        $("." + c).mouseover(function() {
            $("[id^=bmore]").hide();
            $("#bmore" + c).toggle();
        });
    });
    // owl carousel paraméters  using (owl.carousel.js)
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        responsiveRefreshRate: 200,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 5,
                nav: false,
                loop: false,
            },
        },
    });
    // Wrap every letter in a span
    var textWrapper = document.querySelector(".h1titleh");
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );

    anime
        .timeline({ loop: true })
        .add({
            targets: ".h1titleh .letter",
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i + 1),
        })
        .add({
            targets: ".h1titleh",
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 7000,
        });
    // Animate (AOS.js) On Scroll
    $(window).scroll(function() {
        $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
        AOS.init({
            duration: 1800,
            easing: "ease-in-out-back",
        });
    });

    // show contact us form
    $("#contact").click(function() {
        $("#Modal_Edit").modal("show");
    });
    // hide contact us form
    $("#close").click(function() {
        //$('#Modal_Edit').attr('class', 'modal fade');
        $("#Modal_Edit").hide();
        //$('.modal-backdrop fade show').atrr('clas', 'modal-backdrop fade');
        $(".modal-backdrop").remove();
        location.reload();
    });
});