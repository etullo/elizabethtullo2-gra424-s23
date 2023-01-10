$(document).ready(function(){
    /*
We're finding the element and hiding it here
    */
    $('nav').hide();

    // Setup our click function
    $('.menu-button').click(function(){
        $('nav').slideToggle();
    });
});