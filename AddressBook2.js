class AddressBook {
    
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
        console.log("inside a constructor");
    }

    //getter
    
    get firstName(){return  this._firstName;}
    get secondName(){return this._secondName;}


    set firstName(firstName){
    let firstNameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
      if (firstNameRegex.test(firstName)){
        this._firstName=firstName;
      }
      else throw "First Name is Incorect";
    }
    set secondName(secondName){
      let secondNameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (secondNameRegex.test(secondName)){
          this._secondName=secondName;
        }
        else throw "Second Name is Incorect";
      }
  

  
     
    toString(){
      return "Fullname:"+this.firstName + " "+ this.lastName+ "\n "+"Adress:"+this.address + "\n "+ "City:"+this.city+"\n"+"State: "+this.state+"\n "+"Zip: "+this.zip+"\n"+"Email :"+ this.email+"\n "+"Phone Number:"+this.phoneNumber;
  }
}

let addressBook = new AddressBook("Basila", "Noushad", "WEELS", "Kottayam", "Kerala", "1234", 12345, "basilanoushad92@gmail.com");
//console.log(addressBook.toString());
try{
  addressBook.firstName="mark";
  console.log(addressBook.toString());
}
catch(e){
  console.error(e);
}
try{
  addressBook.secondName="noushad";
  console.log(addressBook.toString());
}
catch(e){
  console.error(e);
}

