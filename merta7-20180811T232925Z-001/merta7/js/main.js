
$(document).ready(function(){
    $('.open-menu').click(function(){
        $('.menu2').css({"width":"60%",})
        $('.side-menu-header').css({"left":"40%",})
        $(this).toggle();
        $('.side-menu-headerspan').toggle();

    });
    $('.close-menu').click(function(){
        $(this).parent().css({"width":"0",})
        $('.side-menu-header').css({"left":"0",})
        $('.open-menu').toggle();
        $('.side-menu-header span').toggle();
    });


    $('.opinions .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        rtl:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            }
        }
    })



    $('.app-screens .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        rtl:true,
        nav:true,
        dots:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        navText:[" " ," "],
        responsive:{
            0:{
                items:1
            }
        }
    })


});

    //main  owl-carousle
    // $('.app-screens .owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     rtl:true,
    //     nav:true,
    //     dots:false,
    //     autoplay:true,
    //     autoplayTimeout:3000,
    //     navText:[" " ," "],
    //     responsive:{
    //         0:{
    //             items:1
    //         }
    //     }
    // })

    //product  owl-carousle
        // scroll down 



    // $('#print').click (function(){
    //     var x =$(this).attr('class');
    //     $('.image-section .' + 'x').alert("lll")
    // });
    // css("display","inline-block").parent().parent().siblings().css("display","none");


    //product  owl-carousle
    // $('.with-us .owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     rtl:true,
    //     nav:false,
    //     dots:true,
        // autoplay:true,
        // autoplayTimeout:3000,
//         responsive:{
//             0:{
//                 items:1
//             },
//             400:{
//                 items:2
//             },
//             700:{
//                 items:3
//             },
//             1100:{
//                 items:4
//             }
    
//         }
//     });
    
// });

// $(document).ready(function(){
//     $('.move_down a ,.about-header').click (function(){
//         $('html, body').animate({
//             scrollTop: $("#about").offset().top
//         }, 1000);
//         return false;
//     });

//     $('.contact').click (function(){
//         $('html, body').animate({
//             scrollTop: $(".upfooter").offset().top
//         }, 2000);
//         return false;
//     });

//     $('.blog-header').click (function(){
//         $('html, body').animate({
//             scrollTop: $(".our-blog").offset().top
//         }, 2000);
//         return false;
//     });


// });


//scroll background color of navbar
$(window).scroll(function() {
    var scrollVal = $(this).scrollTop();
 if ( scrollVal > 250) {
     
     $('.side-menu .side-menu-header').css({'background-color':'#43a2a4'});
 }
   else{
       
     $('.side-menu .side-menu-header').css({'background-color':'transparent'});
   }
 
});
// AOS.init({
//     offset: 100,
//     duration: 500,
//     easing: 'ease-in-quad',
//     delay: 0,
//   });
//     //fancy box
//     $('.various').fancybox({
//         padding : 10,
//         openEffect  : 'fade'
//     });
  


