$(document).ready(function () {
    // Task 1
    $("#mark").css("background", "yellow");

    // Task 2
    $(".gone").click(function () {
        $(this).slideUp();
    });

    // Task 3
    $("#dclick").dblclick(function () {
        $(this).slideUp();
    });

    // Task 4
    $(".hide-btn").click(function () {
        $("p").hide();
    });

    $(".show-btn").click(function () {
        $("p").show();
    });

    $(".toggle-btn").click(function () {
        $("p").fadeToggle();
    });

    // Task 5
    $("#button-box").click(function () {
        $(".box").animate({
            width: "300px",
            height: "300px",
            marginLeft: "150px",
            borderWidth: "10px",
            opacity: 0.5
        });
    });

    // Task 6
    $("#callback").click(function () {
        $(".gone").slideToggle("slow", function () {
            alert("The slide toggle effect has completed.");
        });
    });

});