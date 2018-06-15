/**
 * Created by luqingying on 2018/5/20.
 */
$("#jiaoshishenqin").hide();
$("#zhaojiaoshi").hide();
$("#application-content").hide();
$("#result-table").hide();
$(".rooms").hide();

$(document).ready(function() {
    $.ajax({
        url: "",
        type: "POST",
        success: function (result) {
            $("id-name").html(result.name + "(" + result.id + ")");
        }
    });

    /*申请列表点击*/
    $("#result").click(function () {
        $("#result-table").show();
        $("#result").addClass("active");
        $("#add_room").removeChild("active");
        $("#search_room").removeChild("active");
        $.ajax({
            url: "/",
            type: "POST",
            success: function (result) {
                $("#result-table tbody").empty();
                $.each(result, function (index, item) {
                    if(item.state == "已通过"){
                    $("#result-table tbody").append("<tr id='result-table-tr"+ item.id +"' class='result-table-tr'><td>" + item.faculty + "</td><td>" + item.classroom + "</td><td>" + item.time_start + "到" + item.time_end + "</td><td class='approved'>"+ item.state +"</td><td>"+ item.date +"</td><td><a href='#'>详情</a></td></tr>");
                    }
                    else if(item.state == "未通过"){
                        $("#result-table tbody").append("<tr id='result-table-tr"+ item.id +"' class='result-table-tr'><td>" + item.faculty + "</td><td>" + item.classroom + "</td><td>" + item.time_start + "到" + item.time_end + "</td><td class='approving'>"+ item.state +"</td><td>"+ item.date +"</td><td><a href='#'>详情</a></td></tr>");
                    }
                    else{
                        $("#result-table tbody").append("<tr id='result-table-tr"+ item.id +"' class='result-table-tr'><td>" + item.faculty + "</td><td>" + item.classroom + "</td><td>" + item.time_start + "到" + item.time_end + "</td><td>"+ item.state +"</td><td>"+ item.date +"</td><td><a href='#'>详情</a></td></tr>");
                    }
                });
            }
        });
    })



    $(".result-table-tr").click(function () {
        $("#application-content").show();
        $("#jiaoshishenqin").hide();
        $("#zhaojiaoshi").hide();
        $("#result-table").hide();
        $(".rooms").hide();
        $.ajax({
            url: "/",
            type: "POST",
            data:{
                "id" : id
            },
            success: function (result) {
                $("#result-table tbody").empty();
                $.each(result, function (index, item) {
                    $("#result-table tbody").append("<tr id='result-table-tr"+ item.id +"' class='result-table-tr'><td>" + item.faculty + "</td><td>" + item.classroom + "</td><td>" + item.time_start + "到" + item.time_end + "</td><td>"+ item.state +"</td><td>"+ item.date +"</td><td><a href='#'>详情</a></td></tr>");
                });
            }
        });
    })

    

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