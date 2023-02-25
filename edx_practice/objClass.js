
    //Code here is about Classes, setters and getters

      let quantity=0;

      class Person {
        constructor(fullName, givenName, familyName, age, race) {
          this.fullName = fullName;
          this.givenName = givenName; // "normal name"
          this._familyName = familyName; // starts with "_"
          this.age = age;
          this.race = race;
        }

        printf(item){
          console.log(item);
        }

        get familyName() {
          return this._familyName;
          //return this._familyName.toUpperCase();
        }

        set familyName(newName) {
          // validation could be checked here such as
          // only allowing non numerical values
          this._familyName = newName;
        }

        makefullName() {
          this.fullName = this.givenName + " " + this._familyName;
          console.log(this.fullName);
        }

        walk() {
          return this.givenName + " " + this._familyName + " is walking.";
        }
     }

    //  let p1 = new Person("", "Michel", "Buffa");




      //console.log(p1.familyName); // will display BUFFA in the devtool console
      // this willa call implicitly get familyName();
      //    p1.familyName = "Smith"; // this will call implicitly set familyName('Smith');
 
