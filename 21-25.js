// /////question no 1/////////

// let firstName= prompt("what's your name?" );
// let lastName= prompt("what's your last name");
// let fullName=  firstName + lastName;
// if(fullName === firstName + lastName ){
//     alert("welcome " + "    "  + fullName )
// }
// else{
//   alert("good bye")
// }

/////////question no 2//////////

// let userInput=prompt("what is your favourite mobile phone model?")
// let length=userInput.length
// document.write("My favourite mobile phone is :" + userInput +"<br>")
// document.write("Length of string is : " + length)

// //////question no 3 ///////
// let word="Pakistani";
// document.write(" string :  Pakistani " +"<br>")
// let index= word.indexOf("n") 
// document.write(" Index of 'n' is " +  index)

///////question no 4 //////
// let word="Hello World"
// document.write("string :  Hello World  " +"<br>")
// let index = word.lastIndexOf("l")
// document.write("last index of 'l' is " + index)

// //////question no 5/////
// let string="Pakistani"
// let Character=  string.charAt(3)
// document.write("  string : Pakistani " +"<br>")
// document.write("  Character at index '3' is " + Character )

// /////queation no 6///////
// let firstName=" Rabiya "
// let lastName=" Imtiaz "

// let fullName= firstName.concat(lastName)
// document.write(fullName)

// /////question no 7///////
// let city="Hyderabad"
// let replace=city.replace("Hyder", "Islam")
// document.write("City : Hyderabad" + "<br>")
// document.write("After replacement :" + replace)

// /////queation no 8//////////
// let message= "Ali and Sami are best friends. They play cricket and football together."
// let replace= message.replaceAll("and", "&")
// document.write("  Message   : " + message +"<br>" +"<br>")
// document.write("  After replacement   :  " + replace)


////////question no 9////////
// let num="472"
// let type= typeof num;
// document.write("  value :  " + num + "<br>"+ "  Type :  " + type);
// let num= +"472"
// let type= typeof num;
// document.write("  value :  " + num + "<br>"+ "  Type :  " + type);

// ////////question no 10///////
// let userInput=prompt("Enter your favourite snackes!")
// upperCase= userInput.toUpperCase()
// document.write(" userinput : " + userInput + "<br>")
// document.write(" Uppercase : " +  upperCase)


// ///////question no 11///////

//  let userInput=prompt("Enter your favorite language!")
//  userInput = userInput.toLowerCase().split(" ");
// for(var i = 0; i<userInput.length; i++){
//   userInput[i] = userInput[i][0].toUpperCase() + userInput[i].slice(1);
// }
// document.write(userInput.join(" "));

// ///////question no 12////////
// let num= 35.36
// let without = num.toString().replace(".", ""); 
// document.write("Number : " + num + "<br>")
// document.write("Result : " + without)

// ///////question no 13//////////


// ////copied from chatgpt////

// const specialSymbols = ['@', '.', ',', '!'];

// function isValidUsername(username) {
//   for (let i = 0; i < specialSymbols.length; i++) {
//     if (username.includes(specialSymbols[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// function getUserInput() {
//   const username = prompt('Enter your username:');
//   if (!isValidUsername(username)) {
//     alert('Please enter a valid username without special symbols [@ . , !].');
//     getUserInput(); // Recursively prompt for input until a valid username is entered
//   } else {
//     console.log('Username:', username);
//   }
// }

// getUserInput();


// ///////question no  14 ///////
// let items = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC bakery. What do u want to Sir/Ma'am ?");
// let flag= false
// for (let i = 0; i < items.length; i++){
// if(userInput == items[i] ){
//   document.write(items[i]  +   "  is <b>available</b> at index  " +    i   + " in our Bakery ")
//   flag= true
// }
// }
// if (flag == false){
//   document.write(" we are sorry. " +   userInput   + "  is <b> not available</b> in our bakery")
// }

// //////question no 15 //////

/////create varaiable/////
// let ascii_of_0 = 49;
// let ascii_of_small_a = 97;
// let ascii_of_capital_A = 65;

// let pass = +prompt("enter a password");

// // //checking length/////
// let flag= false;
// if(pass.length < 6){
//   flag=true;
// }

// // ///checking numbers////
// let count=0
// for(let i= 1;i <pass.length;i++){
//   let pass_1= pass.charCodeAT(i);
//   for(let j = ascii_of_0; j< 58; j++){
//     if(pass_1 === j){
//       count += 1
//     }
//   }
// }

// // //checking small alphabets////
// let count_1=0
// for(let i= 0;i <pass.length;i++){
//   let pass_1= pass.charCodeAT(i);
//   for(let j = ascii_of_small_a; j< 123; j++){
//     if(pass_1 === j){
//       count_1 += 1
//     }
//   }
// }
// // ///checking capital alphabets//
// let count_2=0
// for(let i= 0;i <pass.length;i++){
//   let pass_1= pass.charCodeAT(i);
//   for(let j = ascii_of_capital_A; j< 91; j++){
//     if(pass_1 === j){
//       count_2 += 1
//     }
//   }
// }

// // ///checking for index 0///
// let count_3=0
// let pass_1= pass.charCodeAT(0);
// for(let i= ascii_of_0; i < 58; i++){
  
//   if(pass_1 === i){
//      count_3 += 1
//      }
// }

// if(flag === true && count === 0){
//   prompt("your password' length is smaller than 6 \n does not contain number \n enter a new password")
// }
// else if(flag === true && count_1 === 0){
//   prompt("your password length is smaller than 6 \n does not contain small alphabets \n enter a new password")
// }
// else if(flag === true && count_3 >= 1){
//   prompt("your password length is smaller than 6 \n first index is a number \n enter a new password")
// }
// else if(count==0 && count_1 === 0){
//   prompt("does not contain number \n does not contain small alphabets \n enter a new password")
// }
// else if(  count_1 === 0 && count_3 >= 1){
//   prompt("does not contain number\n first index is a number \n enter a new password")
// }
// else if( count_1 === 0 && count_3 >= 1){
//   prompt("does not contain small alphabets\n first index is a number \n enter a new password")
// }
// else if(flag === true){
//   prompt("your password length is smaller than 6 \n  enter a new password")
// }
// else if( count === 0){
//   prompt("does not contain number\n enter a new password")
// }
// else if( count_1 === 0){
//   prompt("does not contain small alphabets\n  enter a new password")
// }
// else if( count_3 >= 1){
//   prompt("first index is a number \n enter a new password")
// }


// /////question no 16 ////////
// let string= "University of Karachi"
// let arr = string.split('')

// document.write(arr[0] +"<br>")
// document.write(arr[1] +"<br>")
// document.write(arr[2] +"<br>")
// document.write(arr[3] +"<br>")
// document.write(arr[4] +"<br>")
// document.write(arr[5] +"<br>")
// document.write(arr[6] +"<br>")
// document.write(arr[7] +"<br>")
// document.write(arr[8] +"<br>")
// document.write(arr[9] +"<br>")
// document.write(arr[10] +"<br>")
// document.write(arr[11] +"<br>")
// document.write(arr[12] +"<br>")
// document.write(arr[13] +"<br>")
// document.write(arr[14] +"<br>")
// document.write(arr[15] +"<br>")
// document.write(arr[16] +"<br>")
// document.write(arr[17] +"<br>")
// document.write(arr[18] +"<br>")
// document.write(arr[19] +"<br>")
// document.write(arr[20] +"<br>")

// ////question no 17//////
// let userInput= prompt("enter your country!")
// let lastChar = userInput.charAt(userInput.length - 1);
// document.write("userInput  : " + userInput +"<br>")
// document.write("Last char of userinput  : " + lastChar)


///////question no 18///////
// let text="The quick brown fox jumps over the lazy dog";
// let count=1;

// for(let i =0; i< text.length; i++){
//   if (text.slice(i, i + 3) === "the") 
//    count += 1  
  
// }
// document.write(" Text : " +  text +  "<br>");  
// document.write("There are "+  count + " occurence(s) of word 'the"  )