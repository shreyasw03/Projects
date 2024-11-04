var gene  = document.querySelector("#firstPassword")
var geno = document.querySelector("#secondPassword")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
 var passwordLength = 14;
 var generate = "";
 var generato = "";
 for (var i = 0; i <= passwordLength; i++){
     var randomNumber = Math.floor(Math.random()*characters.length);
     generate += characters[randomNumber];
 }
  for (var j = 0; j <= passwordLength; j++){
     var randomNumbor = Math.floor(Math.random()*characters.length);
     generato += characters[randomNumbor];
 }
  function generator(){
 gene.textContent = generate
  geno.textContent = generato
 }