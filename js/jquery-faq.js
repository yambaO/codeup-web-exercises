// let invisibleStyles = {
//     'visibility': 'hidden'
// };
// $('.invisible').css(invisibleStyles);

// $(document).ready(function (){
//     $('button').click(function (event){
//         event.preventDefault();
//      $('dd').toggleClass('invisible')
//     })
// })


// $('dt').on('click','dt' , function (){
//     $(this).next().fadeToggle();
// })

// $('button').on('click', function(){
//    $('dd').toggleClass('invisible');
// });

$(document).on('click', 'dt', function(){
    $(this).toggleClass('highlight');
    $(this).next().fadeToggle();
});

$(".button-li").on("click", function(event){
    $('ul').each(function(){
        $(this).children('li').last().css('background-color', '#FF0');
    })
})

$('h3').on('click', function(event){
    let $nextUl = $(this).next();
  $nextUl.find('li').css('font-weight', 'bold');

})
$('li').on('click', function(event){
    $('ul').each(function(){
        $(this).children('li').first().css('color', 'blue');
    })
})

// $('.swap-btn').on('click', function(){
//     let btn = $(this).attr('id');
//     switch(btn){
//         case 'leftBtn'
//     }
// })