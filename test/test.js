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

function stringPush() {
  customersArray.forEach((i) =>
    //      console.log(`A`),
    logic()
  );
}

function logic() {
  console.log(`1 2`);

  /*
if (typeof customersArray(i)=='string'){
customersArray.push();
}
 */
}

let newRay=[`orange`];

function stringPushv2() {
  for (let i = 0; i < customersArray.length; i++) {
    if (typeof customersArray[i] == `string`) {
      console.log(customersArray[i] + " is put at  element " + i);
        let objN={};
        objN[`name`]=customersArray[i];
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

//checkCustomersArray();
//stringPushv2();
