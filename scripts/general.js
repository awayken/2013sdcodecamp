/* jshint browser: true, jquery: true */
/* global define: true */

define([ 'jquery' ], function( $ ) {
    'use strict';
    
    $('header :header').hover(function() {
        $( this ).addClass('tada animated');
    }, function() {
        $( this ).removeClass('tada animated');
    });
});
