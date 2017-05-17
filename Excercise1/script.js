$(document).ready(function () {
    var JSONData = [];

    //jQuery ajax to load JSON data from given URL
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        dataType: "json"
    }).done(function (data) {
        createNewDropDown(data, "container", "Please select id", "dropDown1");
    });

    /**
     * Function to simply create dropdown
     */
    function createNewDropDown(data, containerId, defaultText, ddId) {
        var newSelect = document.createElement('select');
        var selectHTML = "";
        
        //Specific condition for first dropdown, is it is having defaultText with "Please select" string
        if (ddId == "dropDown1") {

            selectHTML += "<option>" + defaultText + "</option>";

        }
        for (var j = 0; j < data.length; j++) {
            selectHTML += "<option value='" + data[j].id + "'>" + data[j].id + "</option>";
        }
        newSelect.id = ddId;
        newSelect.innerHTML = selectHTML;
        $('#' + containerId).append(newSelect);
    }

});