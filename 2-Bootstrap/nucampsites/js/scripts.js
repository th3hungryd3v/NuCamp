// JQuery script for the Play/Pause Buttons to work 
// JQuery Ready Method
// Shorthand of $( document).ready(function(){});
$(function() {
    // Modal Triggers
    $("#reserveButton").click(function() { // When the #reserveButton is clicked it will:  
        $("#reserveModal").modal("show"); // Show the #reserveModal
    });
    $("#loginButton").click(function() { // When the #loginButton is clicked it will:
        $("#loginModal").modal("show"); // Show the #loginModal
    });
    // Sets the carousel to cycle every 2 seconds, Default is 5000 (5 seconds)
    $(".carousel").carousel({
        interval: 2000
    });
    // Attaches the matching ID to a click event which is #carouselPause
    $("#carouselButton").click(function() {
        // if this button is clicked, check the child nodes("i element") to see if it has a class(.hasClass("className") of "fa-pause"
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            // if it does, then we know the carousel is currently playing, So clicking on pause, will pause the carousel
            $(".carousel").carousel("pause");
            // when the pause button (#carouselButton) is clicked:
            // remove the i element child node that has the class of fa-pause(pause button)
            $("#carouselButton").children("i").removeClass("fa-pause");
            // And replace (add) it with the same element (i) child node but with a different class(font-awesome play button) to display the play button
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            // otherwise, we know the carousel is currently paused and the play button(fa-play) is displayed and clicking the visible play button will start cycling the carousel again while changing to a pause button
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause")
        }
    });

});