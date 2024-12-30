const firebaseConfig = {
    apiKey: "AIzaSyAlgU9p3naEyTb5Jok2u35MIrrzOKiVkUo",
    authDomain: "contactform-54e26.firebaseapp.com",
    databaseURL: "https://contactform-54e26-default-rtdb.firebaseio.com",
    projectId: "contactform-54e26",
    storageBucket: "contactform-54e26.appspot.com",
    messagingSenderId: "1055855183573",
    appId: "1:1055855183573:web:71fafe003f42d49e37845c"
  };
  firebase.initializeApp(firebaseConfig);
  
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var Name = getElementVal("input");
    var Email = getElementVal("input1");
    var Organization = getElementVal("input2");
    var Contact_Number = getElementVal("input3");
    var Region = getElementVal("region");
    var Inquiry_Type = getElementVal("type");
    var Message = getElementVal("input4");

  
    saveMessages(Name, Email, Organization, Contact_Number, Region,Inquiry_Type, Message);
    document.getElementById('alert').style.display = 'block';
        document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (Name, Email, Organization, Contact_Number, Region,Inquiry_Type, Message) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      Name: Name,
      Email: Email,
      Organization: Organization,
      Contact_Number: Contact_Number,
      Region: Region,
      Inquiry_Type: Inquiry_Type,
      Message: Message
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };








