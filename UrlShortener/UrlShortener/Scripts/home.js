function submitURL() {
    var inputUrl = $(".link-creation-input").val();
    var shortenedURL = "";

    if (validateURL(inputUrl)) {

        $.ajax({
            type: "POST",
            url: "/Home/SetUrl",
            dataType: "text",
            data: { 'inputURL': inputUrl },
            async: false,
            success: function (data) {
                shortenedURL = window.location.href + data;
            },
        });

        $(".origin-link").html(inputUrl);
        $(".short-link").html('<a href="' + shortenedURL + '" title="' + shortenedURL + '" target="_blank">' + shortenedURL + '</a>');
        $('.shortened-link').css('display', 'block');
    }
    else {
        alert("Invalid URL")
    }
}

function validateURL(value) {
    return /(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}