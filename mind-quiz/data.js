let questions = [
    "你做事是一個值得信賴的人嗎？",
    "你個性溫和嗎？",
    "你有活力嗎？",
    "你善解人意嗎？",
    "你凡事願意在主的愛裡忍耐嗎？",
    "你平時多常讀靈修的書?",
    "做事認真且正直嗎？",
    "你乃是竭力追求啊?？",
    "你覺得聚會享受嗎?",
    "你剛強嗎？",
    "你時時在靈裡禱告呼求嗎?",
    "你時時牧養小羊嗎?",
    "你與弟兄姊妹相處覺得喜樂嗎?",
    "你是否積極主動？",
    "你害羞嗎？",
    "你謙卑柔和嗎?",
    "你鎮定嗎？",
    "你勇於學習嗎？",
    "你時常覺得喜樂嗎?",
    "你時時覺得感謝嗎?",
    "你注意細節嗎？",
    "你信靠神嗎?",
    "你喜愛神的福音嗎?",
    "你願意花時間到主面前嗎？",
    "你願意聽從主裡的教訓嗎？",
    "你願意向主認罪悔改嗎？",
    "你令人愉快嗎？",
    "你憐憫嗎?",
    "你親切嗎？",
    "你願意為主改變嗎?",
];
 

 
let fiveIndex = [
    "不同意",
    "有點同意",
    "差不多",
    "同意",
    "非常同意"
];

let respond=function(x){
    console.log("enter"+ x);
    switch(x){
        case 30:
            $("#Result").append(result[0]);
                break;
        case 60:
            $("#Result").append("<br>"+result[1]);
                break;
        case 90:
           $("#Result").append("<br>"+result[2]);
                break;
        case 120:
            $("#Result").append("<br>"+result[3]);
                break;
        case 150:
            $("#Result").append("<br>"+result[4]);
                break;
    }
}
let result = [
    "加油~可能是缺少禱告，沒有真的經歷主的愛和慈祥，操練多一點的親近祂，想必就能更加的有屬靈成長和喜樂喔~",
    "不用灰心，在人凡事不能，但在主凡事都能，只要更多的願意倚靠祂，自然而然就會又更多的成長的!",
    "位在中間段，不上也不下，這是最危險的，要更多的警醒，不然可能就會邁向衰微了~一定要繼續清新呼求主的人竭力追求!",
    "在基督裡，成長是至關重要的，因為這是關係到整個基督身體的健全，所以仍要在愛裡竭力追求才行~",
    "恭喜你屬靈程度達到一定的程度，想必你一定是與時時主同行的人，願主使你也把這份恩典分享給其他的人"
];
