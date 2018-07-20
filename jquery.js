$(document).ready(function(){
    
    $('select').formSelect();

    // Open Message Container
    $('#message-toggle').click(function() {
        $('.messages-container').addClass("slide-messages-in");
        $('.messages-container').addClass("show-messages");
    });

    // Close Message Container
    $('#close-message').click(function() {
        $('.messages-container').removeClass("slide-messages-in");
        $('.messages-container').addClass("slide-messages-out");
        setTimeout(function() {
            $('.messages-container').removeClass("show-messages");
            $('.messages-container').removeClass("slide-messages-out");
        }, 500);
    });

    // Disable Notification frequency input after unselecting notifications
    $('#notifications').click(function() {
        // If unchecked then disable
        this.checked ? 
        $(".frequency-select input").prop("disabled", false) : 
        $(".frequency-select input").prop("disabled", true);
    });

});