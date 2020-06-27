let inform =[
    "Read Bible",
    "practive drawing",
    "Wednesday grouping!",
    "Read English",
    "Have a rest"
];
let startdate = new Date();

function startDay(startMonth, startDate){
    startdate.setMonth(startMonth-1,startDate);
    startdate.setHours(0);
    startdate.setMinutes(0);
    startdate.setSeconds(0);
}
startDay(2,21);

function resettable(){
    $("#schedule").empty();
    $("#schedule").append(
        "<tr><th>場次</th><th>日期</th><th>時間</th><th>課程內容<th></tr>");
        let y=Math.floor(Math.random()*inform.length);
        let onedaymilliontime= 24*60*60*1000;
for(let x=0;x<inform.length;x++){
    if(y>=inform.length){
        y=0;
    }
    y+=1;
    let classdate= new Date(startdate.getTime()+7*x*onedaymilliontime);
    let specially='<tr>'
    if(inform[y]=='Wednesday grouping!'){
        specially="<tr style='background-color:lightyellow;'>"
    }
    $("#schedule").append(
        specially+
        "<td>"+(x+1)+"</td>"+
        "<td>"+classdate.toLocaleDateString().slice(5)+"</td>"+
        "<td>"+inform[y]+"</td>"+
        "</tr>"
    );
}
}  