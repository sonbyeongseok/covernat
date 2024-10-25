$(document).ready(function () {
    let Swiper = new Swiper('.swiper2', {
        slidesPerView:1,
        centeredSlides: true,
        loop: true,
        grabCursor:true,
        spaceBetween: 100,
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
        autoplay:{ delay: 3000 },
    });
});

$(document).ready(function () {
    let i = 0;
    let m = 0;
    let count = $(".main_img>li").length;
    let swiper = new Swiper('.swiper', {
        slidesPerView:3,
        centeredSlides: true,
        loop: true,
        grabCursor:true,
        spaceBetween: 100,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        autoplay:{ delay: 3000 },
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
});
$(document).ready(function (){
    $("#header").mouseenter(function () {
        $("#header").stop().animate({"height" :"213px"});
        $(".sub").stop().fadeIn();
    });
    $("#header").mouseleave(function () {
        $("#header").stop().animate({"height" :"143px"});
        $(".sub").stop().fadeOut();
    });
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
