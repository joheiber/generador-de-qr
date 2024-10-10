$(document).ready(function () {

    $("#qr-form").on("submit", function (event) {
        event.preventDefault();
        url =  $('#qr-input').val()

        if (url !== "" ) {
            if (esValidaURL(url) ) {
                
            } else {
                
            }
        } else {
            Swal.fire({
                title: "Auto close alert!",
                color:"#F2F5F9",
                background:"#364153",
                confirmButtonColor:"#3662E3",
            });
        }
    });

    function esValidaURL(url) {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }
});