$(document).ready(function () {
    $('#head').hover(function () {
        $('#menu').show("slide", {direction: "left" }, "slow");
        }, function () {
        $('#menu').hide("slide", {direction: "left" }, "slow");
    });
});