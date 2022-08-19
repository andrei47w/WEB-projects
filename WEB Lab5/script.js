function overlay_on() {
    document.getElementById("overlay").style.display = "block";
}

function overlay_off() {
    document.getElementById("overlay").style.display = "none";
}

$(function () {
    $("#openBtn").click(function () {
        overlay_on()

        $("#window").dialog({
            modal: true,
            buttons: {
                Submit: function () {
                    $(this).dialog('close');
                    overlay_off()

                    const output = document.getElementById("output");
                    output.value = $('#input1').val() + $('#input2').val() + $('#input3').val() + $('#input4').val();
                }
            }
        });
    });
})
