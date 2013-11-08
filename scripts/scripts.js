/* jshint browser: true, jquery: true */

$(function() {
    'use strict';
    
    $('header :header').hover(function() {
        $( this ).addClass('tada animated');
    }, function() {
        $( this ).removeClass('tada animated');
    });
    
    $('#new_subscriber').validate({
        debug: true
    });
    
    $('#speaker_submission').validate({
        debug: true
    });
});