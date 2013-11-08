/* jshint browser: true, jquery: true */
/* global define: true */

define([ 'jquery', 'jquery.validate', 'general' ], function( $ ) {
    'use strict';
    
    $('#new_subscriber').validate({
        debug: true
    });
});
