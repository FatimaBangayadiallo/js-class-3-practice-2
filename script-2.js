class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(this.name + ' speak');
    }

}
let per = new Human('Fatima', 25);
per.talk();
class Man extends Human {

    talk() {
        console.log(this.name + ' speak');
    }
}
let man = new Man('salma');
man.talk();