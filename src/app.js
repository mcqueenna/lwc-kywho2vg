import { LightningElement } from 'lwc';
export default class Demo extends LightningElement {

  show = true;

  text = 'This text came from a JS prop';
  handleChange(event){
    this.button = document.getElementById("myid");

    this.text = event.target.value;
    console.log(this.text);
    console.log(this.button);
  }





}

let a = 1;

// this is ObjectLiteralNotation - but it's a one time object.
const bike = {
  gears: 10,
  currentGear: 3,
  changeGear: function(direction, changeBy) {
    if (direction === 'up') {
      this.currentGear += changeBy;
    } else {
      this.currentGear -= changeBy;
    }
  }
}

console.log(bike.gears); // 10
console.log(bike.currentGear); //3
bike.changeGear('up', 1);
console.log(bike.currentGear); //4


// $ can be defined any way you want - in my case it had been defined in the jQuery library.
let $ = function(a) {
  console.log(a);
}


$('test');

//you can add new variables to an object at any time.
bike.newvar = 6;
console.log(bike.newvar);


bike.transmission = {front: [30, 32], rear:[2,4,6,8]};
bike.frontIndex = 1;
bike.rearIndex = 2;

bike.ratio = function() {

  console.log('front index: ' + this.frontIndex);
  console.log('front teeth: ' + this.transmission.front[this.frontIndex]);

}

bike.ratio();




// use of function: this creates an object construstor:
function cbike(a, b) {
  //this is a constructor, for an object called a cbike
  //essentially like a class
  console.log('log from inside the constructor');
}

let bikeFunc = function(a, b) {
  //functions do NOT need to return something.
}


// what i don't know is: 
// can the contents of an object constructor : function cbike(a, b) 
// be the same as the contents of of a function : cbike function(a,b)


let temp2 = cbike();


bikeFunc();


cbike();


















