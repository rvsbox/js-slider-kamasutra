// конструктор
function Dog(name) {
    this.name = name;
    this.voice = function () {
        console.log("Hey, my name is " + this.name);
    }
}

// объект
let dog2 = {
    name: "Kolli",
    voice: function () {
        console.log("Hov, my name is " + this.name);
    }
}

let chauchau = new Dog("Laika");
let buldog = new Dog("Bobik");

chauchau.voice();
buldog.voice();
dog2.voice();