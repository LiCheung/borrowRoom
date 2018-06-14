/**
 * Created by luqingying on 2018/5/17.
 */
$("#jiaoshishenqin").hide();
$("#result-table").hide();

$(document).ready(function() {
    $("#apply").click(function () {
        $("#jiaoshishenqin").hide();
        $("#result-table").hide();
        $("#zhaojiaoshi").show();
    });

    $("#result").click(function () {
        $("#jiaoshishenqin").hide();
        $("#zhaojiaoshi").hide();
        $("#result-table").show();
    });

   /* $("#search_btn").click(function () {
        var teach_build = $("#teach_build").val();
        var area = $("#area").val();
        var floor = $("#floor").val();
        for(var i=1;parseInt(i)<= 5;i++)
        {
            var r = complet_room_num(i);
            var room =  teach_build + area + floor + r ;
            $("#classrooms").find(".classroom").eq(i-1).html(room);
        }
    });*/
        /*      var n = parseInt(rooms());
         var code = '';
      for(var i=1;parseInt(i)<= n;i++){
            /!*alert(i+"he"+n);*!/
            var r = complet_room_num(i);
            code = code + "<div class='col-sm-2 col-xs-6'><a href='#'><div class='classroom'>"+ teach_build + area + floor + r +"</div></a></div>";
        }
        $("#classrooms").html(code);*/

    $("#search_btn").click(function () {
        var teach_build = $("#teach_build").val();
        var area = $("#area").val();
        var floor = $("#floor").val();
        $.ajax({
            url: "/getClassroomList",
            type: "GET",
            data:
                {
                    "teaching-buildign" : teach_build,
                    "area" : area,
                    "floor" : floor
                },
            success: function (result) {
                $("#classrooms").empty();
                $.each(result, function (index, item) {
                    var room =  teach_build + area + floor + item.room ;
                    $("#classrooms").append("<div class='col-sm-2 col-xs-6'><a href='#'><div class='classroom'>"+ room +"</div></a></div>");
                });
            }
        });
    });

   /* function rooms() {
        return 5;
    }*/
    function complet_room_num(i) {
        if(i<10)
        {
            i = '0'+ i;
        }
        return i;
    }

    $("#classrooms .classroom").click(function () {
        room_num = $(this).html();
        $("#zhaojiaoshi").hide();
        $("#jiaoshishenqin").show();
        $("#apply-classroom").html(room_num);
    });

    $("#return").click(function () {
        $("#jiaoshishenqin").hide();
        $("#zhaojiaoshi").show();
    });


    $("#submit").click(function () {
        $("#apply").removeClass("active");
        $("#result").addClass("active");
        var unit,room_apply,use_time,apply_state,apply_time;
        unit = $("#unit").val();
        room_apply = room_num;
        use_time = $("#week_numm").val() + $("#week").val() + $("#class_start").val() + "到" + $("#class_end").val();
        apply_state = "未审批";
        apply_time = new Date().toLocaleString( );
      /*  alert(unit + room_apply + use_time + apply_state + apply_time);*/
        $("#jiaoshishenqin").hide();
        $("#result-table").show();
        $("#result-table tbody").append("<tr> <td>" + unit + "</td> <td>" + room_apply + "</td><td>" + use_time + "</td><td>未审批<button class='btn btn-default cancel'>撤销</button></td><td>" + apply_time + "</td></tr>")
    });

    $(".cancel").click(function () {
        if(confirm("确定撤销？")){
            $(this).parent().parent().hide();
        }
    });




/*end of $(document).ready  */
});

