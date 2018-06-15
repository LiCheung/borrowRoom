/**
 * Created by luqingying on 2018/5/20.
 */
$("#jiaoshishenqin").hide();
$("#zhaojiaoshi").hide();
$("#application-content").hide();
$(".rooms").hide();
$(document).ready(function() {
    $.ajax({
        url: "",
        type: "POST",
        success: function (result) {
            $("id-name").html(result.name + "(" + result.id + ")");
        }
    });

    $("#search_btn").click(function () {
        $("#zhaojiaoshi").show();
        $("#jiaoshishenqin").hide();
        $("#result-table").hide();
        $("#borrow-situation").hide();
        $(".classroom").empty();
        $(".rooms").hide();
        var teach_build = $("#teach_build").val();
        var area = $("#area").val();
        var floor = $("#floor").val();
        $.ajax({
            url: "/getClassroomList",
            type: "POST",
            data:
                {
                    "building" : teach_build,
                    "area" : area,
                    "floor" : floor
                },
            success: function (result) {

                $.each(result, function (index, item) {
                    var room =  teach_build + area + floor + item.room ;
                    $(".rooms").eq(index).show();
                    alert($(".rooms").eq(index).html());
                    $(".classroom").eq(index).html(room);
                });
            }
        });
    });
});