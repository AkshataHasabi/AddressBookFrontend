export class Addressbookdata {
    fName:String;
    lName:String;
    phoneNumber:String;
    email:String;
    address:String;
    city:String;
    state:String;
    zipCode:String;
    country:String;
    constructor( fName:String,lName:String,phoneNumber:String, email:String, address:String,city:String, state:String,zipCode:String,country:String){
        this.fName = fName;
        this.lName = lName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country= country;
    }
}
