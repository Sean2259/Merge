$(document).ready(function(){
    let currentquiz=null;
    $("#btn").click(function(){
    
    if(currentquiz==null){
        currentquiz=0;
        $("#question").text(questions[0].question);
        $("#option").empty();
        for(let x=0;x<questions[0].answers.length;x++){
            $("#option").append(
                "<input name='option' type='radio' value="
                +"<label>"+questions[0].answers[x][0]+"</label><br><br>"
            );
        }
        $("#btn").attr("value","Next");
    }else{
        $.each(
            $(":radio"),function(i,val){
                if(val.checked){
                    if(isNaN(questions[currentquiz].answers[i][1])){
                        let finalresult=questions[currentquiz].answers[i][1];
                        $("#question").text(finalAnswers[finalresult][0]);
                        $("#option").empty();
                        $("#option").append(finalAnswers[finalresult][1]+"<br><br>");
                        currentquiz=null;
                        $("#btn").attr("value","Restart");
                    }else{
                        currentquiz=questions[currentquiz].answers[i][1]-1;
                        console.log(questions[currentquiz].answers[i][1]-1);
                        console.log(questions[currentquiz].answers[i][1]);
                        $("#question").text(questions[currentquiz].question);
                        $("#option").empty();
                        for(let x=0;x<questions[currentquiz].answers.length;x++){
                        $("#option").append(
                        "<input name='option' type='radio' value="
                         +"<label>"+questions[currentquiz].answers[x][0]+"</label><br><br>"
                        );
                    }
                        $("#btn").attr("value","Next");
                    }
                }
            }
        );
        
    }
    })
})