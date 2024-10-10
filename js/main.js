$(document).ready(function () {

    $("#qrcode").empty();
    

    $("#qr-form").on("submit", function (event) {
        event.preventDefault();
        url = $('#qr-input').val()

        if (url !== "") {
            if (esValidaURL(url)) {
                $("#qrcode").empty();
                var qrcode = new QRCode(document.getElementById("qr-code"), {
                    text: `${url}`,
                    width: 128,
                    height: 128,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H
                });
                $("#div-container").show()
                $("#qr-tablero").hide()
            } else {
                Swal.fire({
                    title: "URL invalido!",
                    color: "#F2F5F9",
                    background: "#364153",
                    confirmButtonColor: "#3662E3",
                })
            }
        } else {
            Swal.fire({
                title: "URL invalido!",
                color: "#F2F5F9",
                background: "#364153",
                confirmButtonColor: "#3662E3",
            })
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