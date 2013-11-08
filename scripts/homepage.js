/* jshint browser: true, jquery: true */
/* global define: true */

define([ 'jquery', 'jquery.validate' ], function( $ ) {
    'use strict';
    
    $('#new_subscriber').validate({
        debug: true
    });
});
