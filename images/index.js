$(document).ready(function () {
    let i = 0;
    let count = $(".main_img>li").length;
    let m = $(".mens_inlist>li").index();

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
    
    $(".mens_contlist>li").stop().fadeOut();
    $(".mens_contlist>li").eq(m).stop().fadeIn();
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

$(".mens_inlist>li").click(function () {
    let m = $(".mens_inlist>li").index();
    $(".mens_contlist>li").stop().fadeOut();
    $(".mens_contlist>li").eq(m).stop().fadeIn();
});
$(".womens_inlist>li").click(function () {
    let w = $(".womens_inlist>li").index();
    $(".womens_contlist>li").stop().fadeOut();
    $(".womens_contlist>li").eq(w).stop().fadeIn();
});
});
$(document).ready(function () {
    $(".acc_list").bxSlider({
        pager:false,
        controls:true,
        slideWidth: 600,
        slideMargin: 15,
        moveSlides: 1,
        maxSlides: 3,
        minSlides: 1,
        autoHover:true,
    });
})
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
