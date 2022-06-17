export class Addressbookdata {
    firstName:String;
    lastName:String;
    phoneNumber:String;
    email:String;
    address:String;
    city:String;
    state:String;
    zipCode:String;
    country:String;
    constructor( firstName:String,lastName:String,phoneNumber:String, email:String, address:String,city:String, state:String,zipCode:String,country:String){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country= country;
    }
}
