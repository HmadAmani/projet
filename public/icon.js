/**
 * Created by Amani on 31/03/2016.
 */
$(".icon-container").hover(
    function () {
        $(this).toggleClass("symbol")
            .find(".icon").toggleClass("no");
    });