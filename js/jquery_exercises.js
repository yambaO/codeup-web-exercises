// window.onload = function() {
//     alert('The DOM has finished loading!');
// }
//

// id Selector
// let contents = $('#title').html();
// alert(contents);
// $('#title').css('text-decoration','black  underline')
//
// //class Selector
// // $(".codeup").css('border', '1px solid red');
//
// $(".codeup").css({
//     'border': '1px solid red',
//     'width': 'fit-content',
//     'padding': '4px',
//     'border-radius': '5px',
//     'margin-bottom': '3px',
//     'background-color': 'gray',
//     'color': 'white'
// });

// Element Selectors

// $('li').css({
//     'font-size': '20px',
//     'color' : 'blue'
// });
//
// // multiple selector
//
// $('*').css({
//     'font-family' : 'Fantasy,sans-serif'
// })

$('#title').click(
    function() {
        $(this).css('background-color', '#FF0');
    },
);

$('.codeup').dblclick(
    function() {
        $(this).css('font-size', '18px');
    },
);

$('.shopping-item1').hover(
    function() {
        $(this).css('background-color', 'red');
    },
    function() {
        $(this).css('background-color', '#FFF');
    }
);