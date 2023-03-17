// window.onload = function() {
//     alert('The DOM has finished loading!');
// }
//

// id Selector
let contents = $('#title').html();
alert(contents);
$('#title').css('text-decoration','black  underline')

//class Selector
// $(".codeup").css('border', '1px solid red');

$(".codeup").css({
    'border': '1px solid red',
    'width': 'fit-content',
    'padding': '4px',
    'border-radius': '5px',
    'margin-bottom': '3px',
    'background-color': 'gray',
    'color': 'white'
});

// Element Selectors

$('li').css({
    'font-size': '20px',
    'color' : 'blue'
});

// multiple selector

$('*').css({
    'font-family' : 'Fantasy,sans-serif'
})

