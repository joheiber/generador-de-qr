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

    $("#download-btn").on("click", function () {

        const canvas = $("#qr-container canvas")[0]
        const img = canvas.toDataURL("image/png")

        var link = document.createElement('a');
        link.href = img;
        link.download = 'qr-code.png';
        link.click();
    })
    $("#share-btn").on("click", function () {
        const canvas = $("#qr-container canvas")[0]
        canvas.toBlob(function (blob) {
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item]).then(function () {
                Swal.fire({
                    title: "se a opiado en portapapales",
                    color: "#F2F5F9",
                    background: "#364153",
                    confirmButtonColor: "#3662E3",
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }

                })
            }, function (err) {
                console.error("No se pudo copiar la imagen: ", err);
            });
        });
    })

    function esValidaURL(url) {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }
});