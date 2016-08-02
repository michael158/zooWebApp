/**
 * Created by Kupletsky Sergey on 17.10.14.
 *
 * Material Sidebar (Profile menu)
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this sidebar in Bootstrap (v3) projects. HTML-markup like Navbar bootstrap component will make your work easier.
 * Dropdown menu and sidebar toggle button works with JQuery and Bootstrap.min.js
 */

// Sidebar toggle
//
// -------------------
$(document).ready(function() {
    var overlay = $('.sidebar-overlay');
    var sidebar = $('#sidebar');

    $('.sidebar-toggle').on('click', function() {
        sidebar.toggleClass('open');
        if ((sidebar.hasClass('open'))) {
            overlay.addClass('active');
        } else {
            overlay.removeClass('active');
        }
    });

    $('.wrapper').on('click', function () {
        if (!(sidebar.hasClass('sidebar-fixed-left') || sidebar.hasClass('sidebar-fixed-right')) && sidebar.hasClass('open')) {
            sidebar.removeClass('open');
            overlay.removeClass('active');
        }
    });

    $('.sidebar-nav li').on('click', function(){
        sidebar.removeClass('open');
        overlay.removeClass('active');
    });

    overlay.on('click', function() {
        $(this).removeClass('active');
        $('#sidebar').removeClass('open');
    });

});


