$(function () {
    $(".btn-automation").click(function () {
        var id = $(this).attr('id').replace(/ /g, "%20");
        var url = "http://192.168.2.115/rest/nodes/" + id + "/cmd/";

        var test = $(this).css("background-color");
        if (test == "rgb(0, 128, 0)") {
            url += "DOF"
            $(this).css("background-color", "");
            $(this).css("color", "");
        }
        else {
            url += "DON"
            $(this).css("background-color", "green");
            $(this).css("color", "white");
        }

//        $.ajax({
//            url: url,
//            method: "GET",
//            crossDomain: true,
//            headers: {
//                "accept": "application/json;odata=verbose"
//            },
//            success: function (data) {
//            },
//            error: function (err) {
//                alert("Error");
//            }
//        });
    });

    $(".btn-automation-momentary").click(function () {
        var id = $(this).attr('id').replace(/ /g, "%20");
        var url = "http://192.168.2.115/rest/nodes/" + id + "/cmd/DON";

        $.ajax({
            url: url,
            method: "GET",
            crossDomain: true,
            headers: {
                "accept": "application/json;odata=verbose"
            },
            success: function (data) {
            },
            error: function (err) {
                alert("Error");
            }
        });
    });

    $(".btn-pioneer").click(function () {
        var ip = $(this).attr('data-ip');
        var cmd = $(this).attr('data-cmd');
        var url = "http://" + ip + "/EventHandler.asp?WebToHostItem=" + cmd;

        $.ajax({
            url: url,
            method: "GET",
            headers: {
                "accept": "application/json;odata=verbose"
            },
            success: function (data) {
            },
            error: function (err) {
                alert("Error");
            }
        });
    });
});
