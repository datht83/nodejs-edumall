var Emitter = require("events");
var event_config = require("./config");
var emitter = new Emitter();

emitter.on(event_config.BAD_SCORE, function(){
    console.log("Một môn nào đó bị điểm kém !!");
});
emitter.on(event_config.BAD_SCORE, function(){
    console.log("Đã có điểm kém , cần thông báo phụ huynh !");
});

// có 1 bảng điểm
var scores = [10,4];
for(var s of scores){
    if(s < 5){
        console.log("diem thap qua", s);
        emitter.emit(event_config.BAD_SCORE);
    }
}