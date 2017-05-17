$(document).ready(function () {

    //jQuery ajax to load JSON data from given URL
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        dataType: "json"
    }).done(function (data) {
        createNewDropDown(data, "container", "Please select id", "dropDown1");
        $('#dropDown1').on("change", function () {
            $('#container2').empty();
            toggleDropdownOnSelectedValue(data, "container2", this.value, "dropDown2");
        });
    });

    /**
     * Function to simply create dropdown
     */
    function createNewDropDown(data, containerId, defaultText, ddId) {
        var newSelect = document.createElement('select');
        var selectHTML = "";

        //Specific condition for first dropdown, is it is having defaultText with "Please select" string
        if (ddId !== "titleBox") {

            if (ddId == "dropDown1") {

                selectHTML += "<option>" + defaultText + "</option>";

            }
            for (var j = 0; j < data.length; j++) {
                selectHTML += "<option value='" + data[j].id + "'>" + data[j].id + "</option>";
            }

        } else {
            for (var j = 0; j < data.length; j++) {
                selectHTML += "<option value='" + data[j].title + "'>" + data[j].title + "</option>";
            }
        }
        newSelect.id = ddId;
        newSelect.innerHTML = selectHTML;
        $('#' + containerId).append(newSelect);
    }

    /**
     * Function to toggle second dropdown list as per even/odd selected value from first dropdown
     */
    function toggleDropdownOnSelectedValue(data, containerId, selectedValue, ddId) {

        var myNewArray = [];

        if (parseInt(selectedValue) % 2 === 0) {
            // creating new array with all even numbers for even selected value
            var even = function (num) {
                return num.id % 2 === 0;
            };
            myNewArray = data.filter(even);

        } else {
            // creating new array with all odd numbers for odd selected value
            var odd = function (num) {
                return num.id % 2 !== 0;
            };
            myNewArray = data.filter(odd);
        }

        // Reusing createDropDown function to create second dropdown
        createNewDropDown(myNewArray, containerId, selectedValue, ddId);
        createTitleDD(data, myNewArray, containerId, selectedValue);
    }

    /*Function to creat text area
    */
    function createTextArea(data, containerId, selectedValue, textAreaId) {
        if (selectedValue % 2 === 0) {
            var text = function (num) {
                return num.id === parseInt(selectedValue);
            };
            textArr = data.filter(text);
            var newtextArea = document.createElement('textarea');
            var textAreaHTML = "";
            textAreaHTML += textArr[0].body;
            newtextArea.id = textAreaId;
            newtextArea.rows = "4";
            newtextArea.cols = "50";
            newtextArea.disabled = true;
            newtextArea.innerHTML = textAreaHTML;
            $('#' + containerId).append(newtextArea);

        }
    }

    /**
     * Function to create title dropdown
     */

    function createTitleDD(data, myNewArray, containerId, selectedValue) {


        var myNewArrayForTitle = [];
        var title = function (num) {
            return num.id === parseInt(selectedValue);
        };
        myNewArrayForTitle = myNewArray.filter(title);
        createNewDropDown(myNewArrayForTitle, containerId, myNewArrayForTitle[0].title, "titleBox");
        createTextArea(data, "container2", selectedValue, "ta1");
        $('#dropDown2').on("change", function () {
            $("#titleBox").remove();
            $("#ta1").remove();
            var value = this.value;
            var title = function (num) {
                return num.id == value;
            };
            myNewArrayForTitle = myNewArray.filter(title);
            createNewDropDown(myNewArrayForTitle, containerId, myNewArrayForTitle[0].title, "titleBox");
            createTextArea(data, "container2", selectedValue, "ta1");
        });
    }

});