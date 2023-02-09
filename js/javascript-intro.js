
//============================================comment==================================

// this is a comment
//and I start again

//======================================Variables and data type ===================================================
let var1 = true;
let var2 = 478548.01
let var3 = "hello codeup"
let var4 = "356321.01"
let var5 = "2" + "2"
let var6 = 'single quote string'
let var7 ="jason's been drinking"
let var8 = `it wouldn't matter if I "used" single or double`
let var9 = 123
let var10 = false
let var11 = 'true'

let var13;// undefined
let var14 ='I like Yamba\'s sweater'
let var15;
let var16 = -4346;
let var17;
let var18 = "Logged in user";

let userName = "jason";
let nameIdontlike = "jason";

let myShoes = "Ariats";
const myName = 'Jason';
myShoes = "Chanclas";
console.log(userName == nameIdontlike);

//=====================================================Notes=======================================
// "2" == 2 // this works
// "2" === 2 // this won't work
// !== // loose comparison
// !== // strict comparison

// myBankAccount = myBankAccount + 1
myBAnkAccount += 1;

//============================================Working with string=====================================
let pie = 3.14;
pie = pie.toFixed(1); // pie = 3.1

//convert the number to a string with method toFixed
let price = '$'+ 21.50.toFixed(2);
console.log(price);

// convert a string to a number
let students = "24";
students = parseInt(students);
console.log(students);

//==================================Manipulate strings=======================================
let user = "jason";
let dontLike = "Jason";
let message = " i dont't like you! go away!";
if (user.toLowerCase() === dontLike.toLowerCase()){
    message;
}
else


// replace a string
let discordName = "[YOLO]Jason";
discordName = discordName.toLowerCase();
discordName = discordName.replace("[yolo]" ,"");


//split a string
discordName = discordName.split("]");

// counting character with method length
console.log(discordName.length);

// position of a character

let stringPosition = discordName.indexOf("s");

//
let discordName ='[YoloBlob]Jason';
let guildCharEnd = discordName.indexOf(']') + 1;
let guildName = discordName.substring(0, )


