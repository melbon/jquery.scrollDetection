/*
 * May 2015
 * scrollDetection 1.0.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * MIT license
 */
$.scrollDetection = function(options) {
    var settings = $.extend({
        scrollDown: function() {},
        scrollUp: function() {}
    }, options);

    var scrollPosition = 0;
    $(window).scroll(function () {
        var cursorPosition = $(this).scrollTop();
        if (cursorPosition > scrollPosition) {
            settings.scrollDown();
        }
        else if (cursorPosition < scrollPosition) {
            settings.scrollUp();
        }
        scrollPosition = cursorPosition;
    });
};