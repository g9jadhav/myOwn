$(document).ready(function () {
    var JSONData = [];
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        dataType: "json"
    }).done(function (data) {
        console.log(data);
    });

});