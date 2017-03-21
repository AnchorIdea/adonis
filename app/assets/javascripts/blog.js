$(document).ready(function(){
    var div = $(".circle-nav-element-sm");
    $(document).one('scroll', function(){
        div.animate({left: '80px'}, "slow");
        div.addClass('active');
    });
    $(".circle-nav-element-sm").on('click',function() {
        if (div.hasClass('active')) {
            div.removeClass('active');
            $(".sm-menu-bar").show();
        } else {
            div.addClass('active');
            $(".sm-menu-bar").hide();
        }
    });
    $("#sm-menu a").on('click',function() {
        location.reload();
    });    
});
    