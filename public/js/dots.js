var DotGenerator = (function($) {
    'use strict';

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomRGB() {
        var r = randInt(0, 255);
        var g = randInt(0, 255);
        var b = randInt(0, 255);

        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);

        return '#' + r + g + b;
    }

    function DotGenerator(interval, $container) {
        // Dots per second
        this.interval = interval * 1000;
        this.$container = $container;
        this.$dotContainer = $('<div>')
            .addClass('dots-container')
            .appendTo($container);
    }

    DotGenerator.prototype.generateDots = function() {
        var _this = this;

        if (_this.id) return;

        _this.addAndRemoveDots(_this.$container, _this.$dotContainer);
        _this.id = setInterval(function() {
            _this.addAndRemoveDots(_this.$container, _this.$dotContainer);
        }, _this.interval);
    };

    DotGenerator.prototype.stop = function() {
        if (this.id) clearInterval(this.id);
    };

    DotGenerator.prototype.addAndRemoveDots = function($container, $dotContainer) {            
        var r2 = randInt(50, 100);

        var x = randInt(r2, $container.width() - r2);
        var y = randInt(r2, $container.height() + r2);

        var $dot = $('<div>');
        $dot.addClass('translucent-dot');
        $dot.css('background-color', randomRGB());
        $dot.css('width', r2 + 'px');
        $dot.css('height', r2 + 'px');
        $dot.css('left', x + 'px');
        $dot.css('bottom', y + 'px');

        $dotContainer.append($dot.fadeIn(1000));

        $dot.fadeOut(randInt(2000, 4000), function() {
            $(this).remove();
        });
    };

    return DotGenerator;

})(jQuery);