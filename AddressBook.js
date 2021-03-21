const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX = RegExp('^[a-zA-z]{3,}$');
const ZIP_REGEX = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
const PHONE_NUMBER_REGEX = RegExp('^(0/91)?[6-9][0-9]{9}$'); 
const EMAIL_REGEX=RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
let addressBookArray=new Array();

class AddressBook{
    // properties
    
    constructor(...params){
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phoneNumber=params[6];
        this.email=params[7]
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        if(NAME_REGEX.test(firstName)){
            return this._firstName=firstName;
        }
        else throw( "first name is incoorect");
    }



    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        if(NAME_REGEX.test(lastName)){
            return this._lastName=lastName;
        }
        else throw( "last name is incoorect");
    }

    get address(){
        return this._address;
    }

    set address(address){
        if(ADDRESS_REGEX.test(address)){
            return this._address=address;
        }
        else throw (" address is Incorrect ")
    }

    get city(){
        return this._city;
    }

    set city(city){
       if(ADDRESS_REGEX.test(city)){
        return this._city=city;
       }
       else throw ("City is Incorrect");
    }

    get state(){
        return this._state;
    }

    set state(state){
        if(ADDRESS_REGEX.test(state)){
            return this._state=state;
        }
        else throw ("state is Incorrect");
    }

    get zip(){
        return this._zip;
    }

    set zip(zip){
        if(ZIP_REGEX.test(zip)){
            return this._zip=zip;
        }
        else throw ("Zip is Incorrect");
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber){
        if(PHONE_NUMBER_REGEX.test(phoneNumber)){
            return this._phoneNumber=phoneNumber;
        }
        else throw ("Phone number is Incorrect");
    }

    get email(){
        return this._email;
    }

    set email(email){
        if(EMAIL_REGEX.test(email)){
            return this._email=email;
        }
        else throw ("Email is Incorrect");
    }

    toString(){
        return 'firstName ',this.firstName,' lastName ',this.lastName, ' city ',this.city,' phoneNumber ',
        this.phoneNumber,' emial ',this.email,'address',this.address,'state',this.state,'zip',this.zip;
    }


}

try{
    let contact= new AddressBook("Arun","Pragada","Narendrapuram","Rajahmundry","AndhraPradesh",533294,7995426,"arunpragada@gmail.com");
    addressBookArray.push(contact);
    let contact1= new AddressBook("Kiran","Pedapati","Narendrapuram","Rajahmundry","AndhraPradesh",533294,9885919,"kiranpedapati@gmail.com");
    addressBookArray.push(contact1);
    console.log(addressBookArray);

}
catch(e){
    console.error(e);
}
const showContact=(firstName)=>{
    for (let contact of addressBookArray) {
        if(contact.firstName===firstName){
            return contact;
        }
    }
}
//UC_4
let requiredContact=showContact("Kiran");
console.log('requiredContact  ',requiredContact);

function editContact(firstName, updatedContact, updatedValue) {

    let person=showContact(firstName);

    switch (updatedContact) {
        case "address":
             let address = updatedValue;
            return person.address = address;
        case "city": 
            let city = updatedValue;
             return person.city = city;
        case "state": 
            let state = updatedValue;
             return person.state = state;
        case "zip": 
            let zip = updatedValue;
           return person.zip = zip;
        case "phoneNumber":
            let phoneNumber = updatedValue;
            return person.phoneNumber = phoneNumber;
        case "email": 
            let email = updatedValue;
             return person.email = email;
        default:
            throw "Invalid updatedContact";
    }
}

try{
    let updatedContact=editContact("Aru ","phoneNumber",799542);
    console.log('updatedContact ',updatedContact);
    console.log(addressBookArray);
}catch(e){
    console.error(e);
}

//UC_5
const deleteContact=(firstName)=>{
   let contact=showContact(firstName);
   if(contact==="undefined") throw"contact not present";
    addressBookArray.forEach(contact => {
        if(contact.firstName==firstName){
            addressBookArray.pop(contact);
        }
    });
    return contact;
}
try{
let deletedContact=deleteContact("Kiran");
console.log('deletedContact ',deletedContact);
console.log(addressBookArray);
}
catch(e){
    console.log(e);
}
//UC_6

try{
    let contact= new AddressBook("Kiran","Pedapati","Narendrapuram","Rajahumndry","AndhraPradesh",533294,700004,"nbhaskar@gmail.com");
    addressBookArray.push(contact);
    let contact1= new AddressBook("Bhaskar","Navvuluri","KingPur","Nellore","AndhraPradesh",515234,988581,"kiranpedapati@gmail.com");
    addressBookArray.push(contact1);
}
catch(e){
    console.error(e);
}
let sizeOfContact=addressBookArray.length;
let reduceCount=addressBookArray.reduce(count=>count+1,0);
console.log(sizeOfContact,reduceCount);
//UC_7
console.log(addressBookArray);

const addNewContact=(newContact)=>{
    addressBookArray.filter(person=>{
        if(person.firstName===newContact.firstName) throw ("Person exist");
        else addressBookArray.push(newContact) ;
    })
    return newContact;
}


let newContact= new AddressBook("Srinath","Tikkisetti","Elakolanu","Rajahmundry","AndhraPradesh",515235,747033,"srinath@gmail.com");
try{
let contactAddedIs=addNewContact(newContact);
console.log('contactAddedIs ',contactAddedIs)
}
catch(e){
    console.log(e);
}
//UC_8

const checkPersonExist=(firstName, city)=> {
      let contact=showContact(firstName);
      let result=false;
      addressBookArray.filter(contact=>{
          if(contact.city===city){
              result=true;
          }
      })
      return result;
}
try{
    let findExists=checkPersonExist("Arun","hundupur");
    console.log('findExists ',findExists);
}catch(e){
    console.log(e);
}

//UC_9
const showContactByPlace=(place)=>{
    let contact=new Array();
    addressBookArray.filter(checkByPlace=>{
        if(checkByPlace.city===place || checkByPlace.state===place){
            contact.push(showContact(checkByPlace.firstName));
        }
    })
    return contact;
}

let contactByPlace=showContactByPlace("AndhraPradesh");
console.log('contactByPlace ',contactByPlace);
//UC_10
const countOfPersonsByPlace=(place)=>{
    let result=showContactByPlace(place);
    let result1=addressBookArray.filter(check=>check.city===place || check.state===place).reduce(count=>count+1,0);
    return (result1);
}

let countByplace=countOfPersonsByPlace("AndhraPradesh");
console.log(countByplace);

//UC_11
const sortContactsByAlphabetical=()=>{
    addressBookArray.sort((a, b)=>{
        if(a.firstName < b.firstName) { return -1; }
        if(a.firstName > b.firstName) { return 1; }
        return 0;
    })
    return addressBookArray;
}

console.log(sortContactsByAlphabetical());

//UC_12
const sortContactsOfZip=()=>{
    addressBookArray.sort((a, b)=>{
        if(a.zip < b.zip) { return -1; }
        if(a.zip > b.zip) { return 1; }
        return 0;
    })
    return addressBookArray;
}

console.log(sortContactsOfZip());