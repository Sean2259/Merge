$(document).ready(function(){
    resettable();
    $("#courseset").change(function(){
        let date=document.getElementById("courseset").value;
        console.log(date);
        let splitdate=date.split("-");
        console.log(splitdate);
        console.log(typeof(splitdate));
        startDay(splitdate[1],splitdate[2]);
        resettable();
    })  
});

