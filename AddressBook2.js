class AddressBook {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
        console.log("inside a constructor");
    }

    //getter
    get fullName(){
        console.log('inside getter');
        console.log('++++++++++++++++++++++++++++++++++++');
        return this.firstName + " "+ this.lastName;
    }
    get fullAddress(){
        return this.address + " "+this.city+" "+this.state+" "+ this.zip;
    }
    get contactDetails(){
        return  "Email :"+ this.email+"\n "+"Phone Number:"+this.phoneNumber;
    }

    
}

let addressBook = new AddressBook("Basila", "Noushad", "WEELS", "Kottayam", "Kerala", "1234", 12345, "basilanoushad92@gmail.com");
console.log("Full Name\n",addressBook.fullName);
console.log("Full Address;\n",addressBook.fullAddress);
console.log("Contact Details : \n",addressBook.contactDetails);

