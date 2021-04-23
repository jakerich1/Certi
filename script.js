$(document).bind('mobileinit',function(){
    $.mobile.changePage.defaults.changeHash = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
});

$(function () {
    $("#draggable").draggable({
        revert: true,
        axis: "x"
    });
});


