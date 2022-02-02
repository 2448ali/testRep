$(window).on("scroll", function() {
        if($(window).scrollTop() > window.innerHeight -30) {
            $(".header").addClass("active");
        } else {
           $(".header").removeClass("active");
        }
});