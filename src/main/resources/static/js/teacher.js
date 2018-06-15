/**
 * Created by luqingying on 2018/5/20.
 */
$("#add-room-form").hide();
$("#zhaojiaoshi").hide();
$("#application-content").hide();
$("#result-table").hide();
$(".rooms").hide();
/*$(".result-table-tr").hide();*/
var applyContentId;
var resultsId = new Array();

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
        $("#jiaoshishenqin").hide();
        $("#zhaojiaoshi").hide();
        $("#application-content").hide();
        $(".rooms").hide();
        $(".result-table-tr").hide();
        $("#result").addClass("active");
        $("#add_room").removeClass("active");
        $("#search_room").removeClass("active");
        $.ajax({
            url: "/getApplicationList",
            type: "POST",
            success: function (result) {
                $(".result-table-tr").empty();
                $.each(result, function (index, item) {
                    resultsId[index] = item.id;
                    if(item.state == "已通过"){
                        $(".result-table-tr").eq(index).html("<td>" + item.faculty + "</td><td>" + item.classroom + "</td><td>" + item.time_start + "到" + item.time_end + "</td><td class='approved'>"+ item.state +"</td><td>"+ item.date +"</td><td><a href='#'>详情</a></td>").show();
                    }
                    else if(item.state == "未通过"){
                        $(".result-table-tr").eq(index).html("<td>" + item.faculty + "</td><td>" + item.classroom + "</td><td>" + item.time_start + "到" + item.time_end + "</td><td class='approving'>"+ item.state +"</td><td>"+ item.date +"</td><td><a href='#'>详情</a></td>").show();
                    }
                    else{
                        $(".result-table-tr").eq(index).html("<td>" + item.faculty + "</td><td>" + item.classroom + "</td><td>" + item.time_start + "到" + item.time_end + "</td><td>"+ item.state +"</td><td>"+ item.date +"</td><td><a href='#'>详情</a></td>").show();
                    }
                });
            }
        });
    })

/*申请列表某一行点击*/
    $(".result-table-tr").click(function () {
        $("#application-content").show();
        $("#add-room-form").hide();
        $("#zhaojiaoshi").hide();
        $("#result-table").hide();
        $(".rooms").hide();
        $("#agree").attr('disabled',false);
        $("#refuse").attr('disabled',false);
        var index = $(this).parent().children().index(this);
        var id = resultsId[index];
        $.ajax({
            url: "/getApplicationListById",
            type: "POST",
            data:{
                "id" : id
            },
            success: function (result) {
                alert("ajax");
                $.each(result, function (index, item) {
                    $("#unit").val(item.faculty);
                    $("#teacher").val(item.teacher);
                    $("#tel").val(item.phone);
                    $("#attendee").val(item.participant);
                    $("#apply-classroom").html(item.classroom);
                    $("#reason").val(item.reason);
                    $("#date").val(item.date);
                    $("borrow-time").val(item.time_start + "到" +item.time_end);
                    applyContentId = item.id;

                });
            }
        });
    })


    $("#agree").click(function () {
        $("#refuse").attr('disabled',true);
        $.ajax({
            url: "/",
            type: "POST",
            data:{
                "id" : applyContentId,
                "state": 已通过
            },
            success: function (result) {
              alert("该申请已同意");
            }
        });
    })
    $("#refuse").click(function () {
        $("#agree").attr('disabled',true);
        $.ajax({
            url: "/",
            type: "POST",
            data:{
                "id" : applyContentId,
                "state": 未通过
            },
            success: function (result) {
                alert("该申请未同意");
            }
        });
    })

    /*侧边栏的添加点击*/
    $("#add_room").click(function () {
        $("#result-table").hide();
        $("#add-room-form").show();
        $("#zhaojiaoshi").hide();
        $("#application-content").hide();
        $(".rooms").hide();
        $("#add_room").addClass("active");
        $("#result").removeClass("active");
        $("#search_room").removeClass("active");
    })


    /*侧边栏的查询
点击*/
    $("#search_room").click(function () {
        $("#result-table").hide();
        $("#add-room-form").show();
        $("#zhaojiaoshi").hide();
        $("#application-content").hide();
        $(".rooms").hide();
        $("#add_room").addClass("active");
        $("#result").removeClass("active");
        $("#search_room").removeClass("active");
    })




    $("#search_btn").click(function () {
        $("#zhaojiaoshi").show();
        $("#add-room-form").hide();
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