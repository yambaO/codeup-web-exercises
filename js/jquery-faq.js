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

$('.swap-btn').on('click', function(){
    let btn = $(this).attr('id');
    let $commonParent = $(this).parents('.row');
    let $images = $commonParent.find('img');
    let imgSources = [];
    $images.each(function(){
        let srcValue = $(this).attr('src');
        imgSources.push(srcValue);
    });
    console.log($images[0]);
    console.log('Image Source Array => ', imgSources);
    switch(btn) {
        case "leftBtn":
            // do the logic for left btn
            $($images[0]).attr('src', imgSources[1]);
            $($images[1]).attr('src', imgSources[0]);
            console.log('clicked leftBtn')
            break;
        case "middleBtn":
            // do the logic for middle btn
            let randomNum = randomNumber(1, 2);
            if (randomNum === 1) {
                //go left
                $($images[1]).attr('src', imgSources[0]);
                $($images[0]).attr('src', imgSources[1]);
            } else {
                //go right
                $($images[1]).attr('src', imgSources[2]);
                $($images[2]).attr('src', imgSources[1]);
            }
            console.log('clicked middleBtn')
            break;
        case "rightBtn":
            // do the logic for right btn
            console.log('clicked rightBtn')
            $($images[2]).attr('src', imgSources[1]);
            $($images[1]).attr('src', imgSources[2]);
            break;
    }
});