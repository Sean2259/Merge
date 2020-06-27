$("document").ready(function(){
    $("#range").hide();
    $("label").hide();
    $("#Result").hide();
    console.log($("[type=range]").val());
    $("label").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);

    $("[type=range]").change(function(e){
        console.log(e);
        $("label").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);
    })
    
    let sum=0;
    let answers = 0;
    let currentQuiz= 0;
    $("#startbutton").click(function(){ 
        if(currentQuiz==null){
            $("#startbutton").attr("value","開始作答");
            console.log("currentQuiz1:"+currentQuiz);
            $("#range").hide();
            $("label").hide();
            $("#Result").empty();
            $("#Result").hide();
            currentQuiz=0;
        }
        else if(currentQuiz==0){
            console.log("currentQuiz:"+currentQuiz);
            $("#question").append(questions[0]);
            $("[type=range]").toggle();
            $("label").show();
            $("#startbutton").attr("value","next");
            sum++;
            currentQuiz=sum;
        }
        else if(currentQuiz==29){
            let rInt=$("[type=range]").val();
            console.log("rInt:"+rInt);
            let number=parseInt(rInt);
            answers+=number;
            console.log("answer:"+answers);
            $("#question").empty();
            $("[type=range]").toggle();
            $("label").text("平均分數:"+(answers/30));
            respond(answers);
            $("#Result").show();
            $("#startbutton").attr("value","Restart");
            currentQuiz=null;
            sum=0;
            answers=0;
            }
        
        else{
            currentQuiz=sum;
            console.log("currentsum:"+currentQuiz);
            console.log("current:"+currentQuiz);
            sum++;
            $("#question").empty();
            $("#question").text(questions[currentQuiz]);
            $("#range").show();
            $("label").show();
            $("#startbutton").attr("value","next");
            let rInt=$("[type=range]").val();
            console.log("rInt:"+rInt);
            let number=parseInt(rInt);
            answers+=number;
            console.log("answer:"+answers);
        }    
    })
})