/**
 * Created by luqingying on 2018/5/17.
 */
/*$("#jiaoshishenqin").hide();
$("#result-table").hide();
$("#borrow-situation").hide();*/

$(function() {
    $.ajax({
        url: "",
        type: "POST",
        success: function (result) {
            $("id-name").html(result.name + "(" + result.id + ")");
        }
    });
  /*  $("#apply").click(function () {
        $("#jiaoshishenqin").hide();
        $("#result-table").hide();
        $("#zhaojiaoshi").show();
    });

    $("#result").click(function () {
        $("#jiaoshishenqin").hide();
        $("#zhaojiaoshi").hide();
        $("#result-table").show();
    });*/

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
    /*教室搜索*/
    $("#search_btn").click(function () {
        $("#zhaojiaoshi").show();
        $("#jiaoshishenqin").hide();
        $("#result-table").hide();
        $("#borrow-situation").hide();
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
                $("#classrooms").empty();
                $.each(result, function (index, item) {
                    var room =  teach_build + area + floor + item.room ;
                    $("#classrooms").append("<div class='col-sm-2 col-xs-6'><a href='#'><div class='classroom'>"+ room +"</div></a></div>");
                });
            }
        });
    });
    /*、、教室搜索*/


/*教室借用情况*/
   $("#classrooms .classroom").on("click",function () {
     /*  $("#classrooms .classroom").each(function() {
           console.log($(this).index());
       });*/
       alert("lalal");
       $("#zhaojiaoshi").hide();
       $("#jiaoshishenqin").hide();
       $("#result-table").hide();
       $("#borrow-situation").show();
       var rooms = $(".classroom").html();
       $("#borrow-situation caption").html(rooms + "教室使用情况");
       $.ajax({
           url: "/getApplicationListByRoom",
           type: "POST",
           data:
               {
                   "room" : rooms
               },
           success: function (result) {
               $("#borrow-situation tbody").empty();
               $.each(result, function (index, item) {
                   $("#borrow-situation tbody").append("<tr><td>"+ item.faculty +"</td><td>"+ item.time +"</td></tr>");
               });
           }
       });
   })


    /*、、、教室借用情况*/


    /*填写申请表按钮点击*/
    $("#complete-apply-btn").click(function () {
        $("#zhaojiaoshi").hide();
        $("#borrow-situation").hide();
        $("#result-table").hide();
        $("#jiaoshishenqin").show();
        $("#apply-classroom").html( $("#borrow-situation caption").html().replace('教室使用情况',''));
    })
    /*、、填写申请表按钮点击*/

    /*我的申请点击*/
    $("#result").click(function () {
        $("#zhaojiaoshi").hide();
        $("#jiaoshishenqin").hide();
        $("#borrow-situation").hide();
        $("#result-table").show();
        $.ajax({
            url: "",
            type: "POST",
            success: function (result) {
                $("#result-table tbody").empty();
                $.each(result, function (index, item) {
                    $("#result-table tbody").append("<tr><td>" + item.faculty + "</td><td>" + item.classroom + "</td><td>" + item.class_start + "到" + item.class_end + "</td><td>"+ item.state +"</td><td>"+ item.date +"</td></tr>");
                });
            }
        });
    });
    /*我的申请点击*/

    $("#submit").click(function () {
        var unit,teacher,telephone,participant,number,room_apply,reason,apply_date,time_start,time_end;
        unit = $("#unit").val();
        teacher = $("#teacher").val();
        telephone = $("#tel").val();
        participant = $("#attendee").val();
        number = $("#numbers").val();
        room_apply = $("#apply-classroom").html();
        reason = $("#reason").val();
        apply_date = $("#year").val() + $("#month").val() + $("#date").val();
        time_start = $("#start-hour").val() + ":" + $("start-minute").val();
        time_end =  $("#end-hour").val() + ":" + $("end-minute").val();
        $.ajax({

            url: "/",
            type: "POST",
            data:
                {
                    "unit" : unit,
                    "teacher" : teacher ,
                    "telephone": telephone,
                    "participant":participant,
                    "number":number,
                    "room_apply":room_apply,
                    "reason":reason ,
                    "apply_date":apply_date,
                    "time_start":time_start,
                    "time_end":time_end
                },
            success: function (result) {
              alert("提交成功！")
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



    $("#return").click(function () {
        $("#jiaoshishenqin").hide();
        $("#zhaojiaoshi").show();
    });




    $(".cancel").click(function () {
        if(confirm("确定撤销？")){
            $(this).parent().parent().hide();
        }
    });




/*end of $(document).ready  */
});

