function Emitter(){
    this.events = {};
}
// khi nao xay ra su kien
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
// xu ly su kien do ntn
Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();//duyet mang va goi mang
        })
    }
}

module.exports = Emitter;