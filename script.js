//1//
const array = [5, 4, 3, 2, -1, -10];

let positive = array.filter((element) => element > 0);
let total = positive.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);


//2//

const array2 = ["html", "css", "javascript", "react", "css" , "javascript", "python"];

let items = array2.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
      } else {
        accumulator[currentValue] = 1;
      }
      return accumulator;
    }, []);
console.log(items);

//3//

class Cars {
    constructor(brand, model, speed = 0, motion = "მანქანა გაჩერებულია") {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
        this.motion = motion;
    }
  
    check_motion() {
      if (this.speed > 0) {
        this.motion = "მანქანა მოძრაობს";
      } else {
        this.motion = "მანქანა გაჩერებულია";
      }
    }
  
    brake(element) {
        this.speed -= element;
        this.check_motion;
      }

    accelerate(element) {
      this.speed += element;
      this.check_motion;
    }
    emergency_brake() {
      this.speed = 0;
      this.check_motion;
    }
    status() {
      return `${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია : ${this.motion}`;
    }
  }
  
  const Cars1 = new Cars("Ford", "Mustang");
  Cars1.accelerate(150);
  Cars1.check_motion();
  
  console.log(Cars1.status());

  //4//


  function addAsync(x, y) {
    return new Promise((resolve, reject) => {
      if (
        x !== undefined && y !== undefined 
        &&  
        typeof x == "number" &&  typeof y == "number"
      ) {
        resolve(x*y);
      } else {
        reject("Reject");
      }
    });
  }
  
  addAsync(10,2)
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));
  
    addAsync("a","b")
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));