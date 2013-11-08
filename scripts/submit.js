/* jshint browser: true, jquery: true */
/* global define: true */

define([ 'jquery', 'jquery.validate' ], function( $ ) {
    'use strict';

    $('#speaker_submission').validate({
        debug: true
    });
});
