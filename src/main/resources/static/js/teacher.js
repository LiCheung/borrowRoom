/**
 * Created by luqingying on 2018/5/20.
 */
$(document).ready(function() {

    $(".refuse").click(function () {/*alert("lalala");*/
        $(this).parent().html("已审批" + "<button class='btn btn-danger'>拒绝</button>");
    });
    $(".agree").click(function () {
        $(this).parent().html("已审批" + "<button class='btn btn-success'>同意</button>");
    });
  /*  alert($(".approving").length);
    $("#approving-num").html($(".approving").length);*/
});