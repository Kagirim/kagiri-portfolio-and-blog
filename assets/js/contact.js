$(function () {
    $('.form-mf').validator();

    $('.form-mf').on('submit', function (e) {
        if(!e.isDefaultPrevented()){
            var url = "contact.php";

            $.ajax({
                type: 'POST',
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" arial-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('.form-mf').find('.messages').html(alertBox);
                        $('.form-mf')[0].reset();
                    }
                }
            });
            return false;
        }
    });

})