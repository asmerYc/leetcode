function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            console.log(this.age);
            console.log(this);
        }

        innerFunc();

    }
}

// 如果你想修改this的指向为当前的Person， 常规改法，保留this

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        const that = this;

        // this is accessible
        console.log(this.age);

        function innerFunc() {

            // this refers to the global object
            console.log(that.age);
            console.log(that);
        }

        innerFunc();

    }
}

// 箭头函数改法
function Person() {
    this.name = 'Zhangsan';
    this.age = 18;
    this.sayName = function() {
        console.log(this.age);
        const innerFunc =() => {
            console.log(this.age);
            console.log(this);
        }
        innerFunc();
    }
}

let x = new Person();
x.sayName();


