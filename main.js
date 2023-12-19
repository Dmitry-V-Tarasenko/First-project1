$(document).ready(function () {
    $("#loginLink").click(function (event) {
        event.preventDefault();
        $(".overlay").fadeToggle("fast");
    });

    $(".overlayLink").click(function (event) {
        event.preventDefault();
        var action = $(this).attr('data-action');

        $("#loginTarget").load("ajax/" + action);

        $(".overlay").fadeToggle("fast");
    });

    $(".close").click(function () {
        $(".overlay").fadeToggle("fast");
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27 && $(".overlay").css("display") != "none") {
            event.preventDefault();
            $(".overlay").fadeToggle("fast");
        }
    });
});


const showDialog = document.querySelector('.show-dialog-button');
const dialogBox = document.querySelector('.dialog-box');
const closeDialog = document.querySelector('.close-dialog-button');
showDialog.addEventListener('click', () => {
  dialogBox.showModal();
});
closeDialog.addEventListener('click', () => {
  dialogBox.close();
});
