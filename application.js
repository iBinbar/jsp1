$(document).ready(function (){
    var drawGrid = function(j){
        var n = Math.sqrt(j)
        console.log(n)
        console.log(n*22);
        $('.container').width(n*22).height(n*222);
        var i = 0
        for (i = 0; i < j ;i++) {
            $('.container').append('<div></div>');
            $('.container').children().addClass('gridItem');
            $('.gridItem').hover(function (){
                $(this).addClass('highlight');
            });
        }
    }
    $('#size').click(function(){
        $('.container').empty();
        var big = prompt('Enter the desired number of cubes');
        drawGrid(big);
        });
});