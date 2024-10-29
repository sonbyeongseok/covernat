$(document).ready(function () {
    let i = 0;
    let m = 0;
    let count = $(".main_img>li").length;
    let swiper = new Swiper('.swiper', {
        slidesPerView:1,
        centeredSlides: true,
        loop: true,
        grabCursor:true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        autoplay:{ delay: 3000 },
        breakpoints: {
        
            768: {
            slidesPerView: 2,  //브라우저가 768보다 클 때
            spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,  //브라우저가 1024보다 클 때
            spaceBetween: 50,
            },
        },
    });


setInterval(function(){
    if(i == count-1){
        i=0;
    }else{ i++;}
    $(".main_img>li").stop().fadeOut();
    $(".main_img>li").eq(i).stop().fadeIn();
    $(".new_slide").stop().animate({"margin-left":"-36%"},function(){
        $(".new_slide>li:first-child").appendTo(".new_slide");
        $(".new_slide").css({"margin-left":"-18%"});
    });
    
    // $(".mens_contlist>li").stop().fadeOut();
    // $(".mens_contlist>li").eq().stop().fadeIn();
}, 3000);

$(".newcont_prev").click(function(){
    $(".new_slide").stop().animate({"margin-left":"0%"},function(){
        $(".new_slide>li:last-child").prependTo(".new_slide");
        $(".new_slide").css({"margin-left":"-18%"});
    });
});
$(".newcont_next").click(function(){
    $(".new_slide").stop().animate({"margin-left":"-36%"},function(){
        $(".new_slide>li:first-child").appendTo(".new_slide");
        $(".new_slide").css({"margin-left":"-18%"});
    });
});


    $("#header").mouseenter(function () {
        $("#header").stop().animate({"height" :"213px"});
        $(".sub").stop().fadeIn();
    });
    $("#header").mouseleave(function () {
        $("#header").stop().animate({"height" :"143px"});
        $(".sub").stop().fadeOut();
    });


// $(".mens_inlist>li").click(function () {
//     let list = $(this).index();
//     $(".mens_contlist>li").stop().fadeOut();
//     $(".mens_contlist>li").eq(list).stop().fadeIn();
//     $(".mens_inlist>li").removeClass("active");
//     $(".mens_inlist>li").eq(list).addClass("active");
// });

// $(".newcont_prev").click(function(){
//         $(".new_slide").stop().animate({"margin-left":"0%"},function(){
//             $(".new_slide>li:last-child").prependTo(".new_slide");
//             $(".new_slide").css({"margin-left":"-20%"});
//         });
// });
});

