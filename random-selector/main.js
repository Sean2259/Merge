let detail;
$(document).ready(function(){
    $("#more").hide();
    $("#click").click(function(){
        $("#more").hide();
        $(".col-sm").show();
        let val=$("#book-choice").val();
        console.log(val);
        switch(val){
            case "讀經類":
         
                 randompic= Math.floor(Math.random()*8);
                $("#img1").attr("src",bible[randompic][0]);
                $("#result-1").text(bible[randompic][1]);
                detail=bibleDetail[randompic];
                    break;
            case "福音類":
                    randompic = Math.floor(Math.random()*8);
                
                $("#img1").attr("src",gospel[randompic][0]);
                $("#result-1").text(gospel[randompic][1]);
                detail=gospelDetail[randompic];
                    break;
            case "造就類":
                    randompic = Math.floor(Math.random()*8);
     
                $("#img1").attr("src",attainment[randompic][0]);
                $("#result-1").text(attainment[randompic][1]);
                detail=attainmentDetail[randompic];
                    break;
            case "教會與侍奉類":

                    randompic = Math.floor(Math.random()*8);
                $("#img1").attr("src",church[randompic][0]);
                $("#result-1").text(church[randompic][1]);
                detail=churchDetail[randompic];
                    break;
            case "其他類":

                    randompic = Math.floor(Math.random()*8);
      
                $("#img1").attr("src",others[randompic][0]);
                $("#result-1").text(others[randompic][1]);
                detail=othersDetail[randompic];
                    break;
        }
    })
    $("#btn").click(function(e){
        console.log(detail);
        $("#btn").attr("href",detail);
    });

});