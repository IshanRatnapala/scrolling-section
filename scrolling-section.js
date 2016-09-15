define([
    'jquery',
    'utility',
    'mCustomScrollbar',
    'jquery/ui'
], function($, utility) {
    'use strict';

    $.widget('drgz.scrollingSection', {
        options: {
            axis:"y",
            mouseWheel:{ enable: true },
            scrollInertia: 250,
            theme:"dark",
            disableForMobile: false
        },

        _create: function () {
            var self = this;

            if (self.options.disableForMobile && utility.isMobile()) {
                return;
            }
            self.element.mCustomScrollbar(self.options);

            /* TODO disable for mobile responsive behaviour */
        }
    });

    return $.drgz.scrollingSection;
});
