$(document).ready(function () {
    $('#head').hover(function () {
        $('#menu').show("slide", {direction: "left" }, "slow");
        }, function () {
        $('#menu').hide("slide", {direction: "left" }, "slow");
    });

    $('[data-fancybox]').fancybox({
        protect: true
    });

    $('.a-fancybox').attr("data-caption", function(){
        var details = "<b>" + $(this).attr("title") + "</b><br><em>" + $(this).attr("caption") + "</em>";
        return details;
    });
});