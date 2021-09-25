const first=document.querySelector("#one");
const butn=document.querySelector("#btn")
const message=document.querySelector("#msg")
const get=document.querySelector("#btnTwo")


// butn.addEventListener("click",saveNewPerson)
// saveNewPerson()
// async function saveNewPerson() {
    
 
//       const Person = Parse.Object.extend("Person");
//     const person = new Person();
    
//       person.set("name", first.value)
//       person.set("age", 28);
    
//     try {
//       let result = await person.save()
//     //  msg.innerText ='New object created with objectId: ' + result.id
//       let a=result.id
//       return a
//       } catch(error) {
//         msg.innerText  ='Failed to create new object, with error code: ' + error.message
//       }
// }
   

  
  // Reading your First Data Object from Back4App
  
  // retrievePerson()
  get.addEventListener("click",updatePlayer)
  async function updatePlayer() {
    //Retrieve your Parse Object
    const Person = Parse.Object.extend("Person");
    const player = new Person();
    //set the object
    player.set('objectId','iJFUhyAk5d');
    //define the new values
    // player.set("age", 27);
    // player.set("name", first.value);
    try{
        //Save the Object 
        let result = await player.destroy();
        alert('Object updated with objectId: ' + result.id);
    }catch(error){
        alert('Failed to update object, with error code: ' + error.message);
    }
}