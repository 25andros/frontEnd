



let rayInfo = [
  ["alpha", 5, true],
  ["bravo", 7, false],
  ["charlie", 19, true],
];

function pRay(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[0]);
  }
}




let obiN = {
    title:`russell`,
    price: 5.99,
    lang: `eng`,
    }



function pObj({title,price,lang}){

    //console.log(`That is good for: ${obj}`);
    console.log(`That is good for: ${title},${price},${lang}`);
}



let customersArray = [
  "Custy Stomer",
  "C. Oostomar",
  "C.U.S. Tomer",
  3432434,
  "Custo Mer",
  "Custopher Ustomer",
  3432435,
  "Kasti Yastimeur",
];

let frontHalf = ["zack", "75"];
let backHalf = ["address", "ambi"];
let whole = [];
let item = {};

function moveTogether(a, b) {
  whole = a + b;
  console.log(a + b);
}

//Write Your Code here:
function checkCustomersArray() {
  //customersArray.forEach((el)=>
  for (let i = 0; i < customersArray.length; i++) {
    if (typeof customersArray[i] != "string") {
      console.log(`Type error: ${customersArray[i]} should be a string!`);
    }
    //console.log(`you be good ${cumstomersArray[el]}`);
  }
}
/*
function stringPush() {

  customersArray.forEach((i) =>
      (
      console.log(customersArray[i] + " is put at  element " + i)
          )
        let objN={},
        objN[`name`]=customersArray[i],
        newRay.push(objN),
      )
 );
}
*/

function logic() {
  console.log(`1 2`);

  /*
if (typeof customersArray(i)=='string'){
customersArray.push();
}
 */
}

let newRay = [`orange`];

function stringPush() {
  for (let i = 0; i < customersArray.length; i++) {
    if (typeof customersArray[i] == `string`) {
      u;
      objN[`name`] = customersArray[i];
      newRay.push(objN);

      //newRay.push(`apple`);
      //newRay.push(customersArray[i]);
      //customersArray.push(`Apple`);
      //customersArray.push(customersArray[i]);

      //console.log(`a`);
      //newRay = cuspush(`a`);
      continue;
    }
    console.log(customersArray[i] + " has not been put in to element");
    //customersArray.pop();
  }
}
