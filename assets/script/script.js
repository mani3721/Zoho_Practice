
$(document).ready(function(){

    // navbar active
    $('.nav-link').click(function(){
        $(this).parent('.nav-list').addClass('active').siblings().removeClass('active')
    })

// update Mouse Position
$('.section-hero').on("mousemove", function(e){
    $('.card-img').each(function(){
        let value = 250;
        const val = $(this).data('value');
        const X = (e.clientX * val) / value;
        const Y = (e.clientY * val ) / value;
        $(this).css({'--mouse-x': `${X}px`, '--mouse-y':  `${Y}px`});
    })
})

// infinite scrolling
    $('.scroll-content').each(function(){
        $(this).attr("data-animated", true).find(".scroll-container").children().clone().attr("data-hidden", true).appendTo($(this).find(".scroll-container"));
        const item =$(this).find('.scroll-item');
        $(item).on("mouseover", function() {
            $('.scroll-container').css('animation-play-state', 'paused');
        }).on("mouseleave", function() {
            $('.scroll-container').css('animation-play-state', 'running');
        });
       
    })


// update Mouse Position
$('.service-card-container').on('mousemove', function(e){
    $('.service-card').each(function(){
        const rect =  this.getBoundingClientRect()
        const clientX =  e.clientX - rect.left;
        const clientY =  e.clientY - rect.top;
        $(this).css({"--mouse-x":`${clientX}px`, "--mouse-y":`${clientY}px`})
    })
})


})

