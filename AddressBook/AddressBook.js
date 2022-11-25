console.log("<<<< Welcome To Address Book System >>>>");
class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName(){
        return this.fName;
    }

    get lastName(){
        return this.lName;
    }

    get address(){
        return this.address1;
    }

    get city(){
        return this.city1;
    }

    get state(){
        return this.state1;
    }

    get zip(){
        return this.zip1;
    }

    get phoneNumber(){
        return this.phoneNum;
    }

    get email(){
        return this.email1;
    }

    set firstName(firstName){
        this.fName = firstName;
    }

    set lastName(lastName){
        this.lName = lastName;
    }

    set address(address){
        this.address1 = address;
    }

    set city(city){
        this.city1 = city;
    }

    set state(state){
        this.state1 = state;
    }

    set zip(zip){
        this.zip1 = zip;
    }

    set phoneNumber(phoneNumber){
        this.phoneNum = phoneNumber;
    }

    set email(email){
        this.email1 = email;
    }
    toString(){
        return "First_Name : "+ this.firstName + ", Last_Name : "+ this.lastName +", Address : "+this.address +", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone_Number : "+ this.phoneNumber + ", Email : "+ this.email;
    }
}

let contact = new Contact("shivani", "kumari","xyz","abc", "Lucknow",654512, 8765443545, "shivani@gmail.com");
console.log(contact.toString());