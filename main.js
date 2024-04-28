(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 0
            }, 1500, 'easeInOutExpo');
        }
    });
    
    
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);

/*Yaha Game code hai*/
let turn=0;
var audio=new Audio('audio.mp3');
function reload(){
    location.reload()
}
Array.from(document.getElementsByClassName("box")).forEach((e)=>{
    e.addEventListener("click", function click(){
        if(turn%2==0){
            e.innerHTML=0;
            audio.play();
        }
        else{
            e.innerHTML="X";
            audio.play();
        }
        turn+=1;
    })

})

let arr=[0,1,2,3,4,5,6,7];
let vals=[[], [], [], [], [], [],[],[]];
let state="false";
arr.forEach((i)=>{
    Array.from(document.getElementsByClassName(i)).forEach((e)=>{
        e.addEventListener("click", ()=>{
            let z=e.innerHTML;
            vals[i].push(z);
            if(vals[i].length==3){
                console.log(vals[i]);
                if(vals[i][0]==vals[i][1] & vals[i][1]==vals[i][2]){
                    console.log(z+"won");
                    document.getElementById("row1").innerHTML=z+"  won";
                    state="won";
                    setTimeout(reload, 3000);
                    
                    
                }
            }

        })
    })
})
