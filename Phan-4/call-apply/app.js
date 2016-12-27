var obj = {
    name: "Mai Hoa",
    sayHello : function(param1, param2){
        console.log(`Hello ${this.name}`);
        console.log("Params: ", param1, param2);
    }
}

obj.sayHello("Xin chao", "2016");
// lam thay doi ngu canh cua this

// truyen vao day tham so
obj.sayHello.call({name: "Yen Phuong"}, "Xin chao", "2017");
// truyen vao mang tham so
obj.sayHello.apply({name: "Yen Phuong"}, ["Xin chao", "2018"]);