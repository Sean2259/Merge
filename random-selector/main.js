$(document).ready(function(){
    $("#random-pic").hide();
    $("input").click(function(){
        $("#random-pic").show();
        let listnumber=$("#choices li").length;
        let randompic= Math.floor(Math.random()*listnumber);
        $("#random-result").text($("#choices li").eq(randompic).text());
        $("#random-pic").attr("src",file[randompic]);
    });
});