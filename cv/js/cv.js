pageNav();

function pageNav() {
    var $navBtn = $('#nav a');
    var index = 0;

    var $wrap = $('#wrap');
    var pageHeight = $(window).height();

    var pageNum = $('section').eq(this.length - 1).attr('class').substr(-1);

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
            eventScroll(y1 - y2);
        });
    }

    function eventScroll(e) {
        if ($wrap.is(':animated')) {
            return;
        }

        var direction;

        if (e.wheelDeltaY) {
            if (e.wheelDeltaY > 0) {
                direction = "up";
            } else {
                direction = "down";
            }
        }

        if (e.keyCode) {
            if (e.keyCode == 38) {
                direction = "up";
            } else if (e.keyCode == 40) {
                direction = "down";
            }
        }

        if (typeof e === "number") {
            if (e < 0) {
                direction = "up";
            } else {
                direction = "down";
            }
        }

        if (index === 0 && direction == "up") {
            index = 0;
        } else {
            if (direction == "up") {
                index--;
            } else if (direction == "down") {
                index++;
            }

            if (index == pageNum) {
                index = 0;
            }
        }

        pageScroll(index);
    }

    function pageScroll(index) {
        $navBtn.removeClass('active')
            .eq(index).addClass('active');

        $wrap.stop(true, false).animate({
            top: -index * pageHeight
        }, 900);
    }
}
