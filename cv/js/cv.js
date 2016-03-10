pageNav();

function pageNav() {
    var $navBtn = $('#nav a');
    var index = 0;
    var $wrap = $('#wrap');
    var pageHeight = -$(window).height();

    $navBtn.click(function() {
        index = $navBtn.index(this);
        pageScroll(index);
        return false;
    });

    document.onmousewheel = eventScroll;

    document.onkeydown = eventScroll;

    touchEvent();

    function touchEvent() {
        var y1, y2;

        document.addEventListener("touchstart", function(e) {
            y1 = e.touches[0].pageY;
        });

        document.addEventListener("touchmove", function(e) {
            y2 = e.touches[0].pageY;
        });

        document.addEventListener("touchend", function() {
            var y = y1 - y2;
            eventScroll(y);
        });
    }

    function eventScroll(event) {
        var direction = -event.wheelDeltaY || (event.keyCode - 39) || event;

        if (index === 0 && direction < 0) {
            index = 0;
        } else {
            if (direction < 0) {
                index--;
            } else if (direction > 0) {
                index++;
            }

            if (index == 5) {
                index = 0;
            }
        }

        pageScroll(index);

    }

    function pageScroll(index) {
        $navBtn.removeClass('active')
            .eq(index).addClass('active');
        $wrap.css('top', index * pageHeight);
    }
}
