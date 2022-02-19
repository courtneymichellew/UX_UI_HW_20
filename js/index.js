console.log("Your js file is loaded!");

$(document).ready(function(){
    /*! Fades in page on load */
    $('#aboutMe').css('display', 'none');
    $('#aboutMe').fadeIn(6000);
});

var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
    $('img#logo').hover(sourceSwap, sourceSwap);
});



console.log("Your function did it!");