//////// chapter 12 till 14 /////

// question no 1 //////
// let input= +prompt("Enter a number or uppercase or lowercase letter")

// if(input >= 65 && input <= 90){
//   alert("uppercase letter")
// }

// else if(input >= 97 && input <= 122){
//   alert("lowercase letter")
// }

// else{
//   alert("Not a letter")
// }


// question no 2 ////
// let firstNum= +prompt("enter a number")
// let secondNum= +prompt("enter a number")
// if(firstNum > secondNum){
//   alert("firstnumber is larger")
// }
// else if(firstNum < secondNum){
//   alert("secondnumber is larger")
// }
// else{
//   alert("Both numbers are equal")
// }


// question no 3 /////
// let input= +prompt("select a number")
// let x = input;
// if( x < 0){
//   alert("your number is negative",x)
// }
// else if( x > 0){
//   alert("your number is positive",x)
// }
// else {
//   alert("the number you select is zero",x)
// }


// question no 4 ////
// let vowels= prompt("select a character")
// let x= vowels
// if(x == "a" || x == "e"|| x == "i" || x == "o" || x == "u"){
//    document.write("true")
// }
// else{
//   document.write("false")
// }


// question no 5 ///
//  
// function verifyPassword(){
// let pw= document.getElementById("pswd").value;
// if(pw == ""){
//   document.getElementById("message").innerHTML="**please enter your password!"
//   return false;
// }
// if(pw < 8){
//   document.getElementById("message").innerHTML="**password length must be atleast 8 character."
//   return false;
// }
// else{
//   document.getElementById("message").innerHTML="**password is correct!"
//   return false;
// }
// }
//////// structure of password validation in index.html ///////////


// question no 6 //////

// let hour= 13;
// if (hour < 18){
//  document.write ("Good day")
// }
// else{
//   document.write ("Good evening")
// }


// question no 7 ////
// let input= +prompt("enter time in 24 hours \n clock format like: 1900=7pm")
// if (input >= 000 && input < 1200){
//   alert("Good Morning")
// }
// else if (input >= 1200 && input < 1700){
//   alert("Good Afternoon")
// }
// else if (input >= 1700 && input < 2100){
//   alert("Good Evening")
// }
// else if (input >= 2100 && input <= 2359){
//   alert("Good Night")
// }
// else{
//   alert("Invalid input")
// }


// ////////chapter no 15 till 16 ///////
// question no 1
// let first_Arr= []

// question no 2 ////
// let myArray=new Array()

// question no 3 ////
// let arr=["Hello world!"]
// console.log(arr);

// question no 4 ////
// let arr =[1,2,3]
// console.log(arr);

// question no 5 ///
// let arr=[true,false]
// console.log(arr);

// question no 6 ///
// let arr=["Welcome",2,"SMIT",true]
// console.log(arr);

// question no 7 /////
// let Qarr=new Array()
// let count=0
// Qarr[0]= "SSC"
// Qarr[1]="HSC"
// Qarr[2]="BCS"
// Qarr[3]="BS"
// Qarr[4]="BCOM"
// Qarr[5]="MS"
// Qarr[6]="M.phil"
// Qarr[7]="PhD"
// for(i=0;i<Qarr.length;i++){
// document.write(++count+")" + Qarr[i]+"<br>")
// }


// question no 8 ////
// let studentName=["michael","john","tony"]
// let marks=[320,230,480]
// let total=[500]

// percentage1=(320*100/total)
// percentage2=(230*100/total)
// percentage3=(480*100/total)

// document.write("Score of Micheal is"+ marks[0]+". Percentage :"+percentage1+"%"+"<br>")
// document.write("Score of John is"+ marks[1]+". Percentage :"+percentage2+"%"+"<br>")
// document.write("Score of Tony is"+ marks[2]+". Percentage :"+percentage3+"%")


// question no 9 /////
// let colors=["red","orange","pink","blue"]
// document.write(colors +"<br>")

// let userfav=prompt("what color do you want to add start of the array?")
// colors.unshift(userfav)
// document.write("updated array"+"<br>"+colors+"<br>")


// let userfav=prompt("what color do you want to add last of the array?")
// colors.push(userfav2)
// document.write("updated array"+"<br>"+colors+"<br>")

// let userfav=prompt("what color do you want to add start of the array? choose two colors!")
// colors.unshift(userfav)
// document.write("updated array"+"<br>"+colors+"<br>")

// colors.shift("red")
// document.write("updated array"+"<br>"+colors+"<br>")

// colors.pop("blue")
// document.write("updated array"+"<br>"+colors+"<br>")

// let userfav=prompt("which  color name you want to add?")
// let index=+prompt("which index do you want to add color?")
// colors.splice(index,0,userfav)
// document.write("updated array"+"<br>"+colors+"<br>")



// let =+prompt("how many colors  you want to delete?")
// let index=+prompt("which index do you want to delete color?")
// colors.splice(index,0,userfav)
// document.write("updated array"+"<br>"+colors+"<br>")


// question no 10 //
// let scores=[320,230,480,120];
// document.write("Scores of Students" + ":"+ scores +"<br>")
// scores.sort();
// console.log(scores);
// document.write("Ordered Scores of Students" + ":"+ scores)

// // question no 11//
// let cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities List" + ":" + cities +"<br>"+"<br>");
// let selectedCities=cities.slice(2,5);
// document.write("selected City Nmaes" + ":" + selectedCities);


// question no 12////
// let Arr=["This","is","my","cat"];
// document.write("Array" +":"+ Arr +"<br>"+"<br>");
// let string =Arr.join('')
// document.write("String"+":"+ string);


// question no 13 ///
// let devices=["Keyboard", "Mouse","Printer","Monitor"]
// let out;
// document.write("Devices" + ":"+ devices +"<br>")
// out=devices.shift()
// document.write("Out" +":"+ "<br>"+ out +"<br>")
// out=devices.shift()
// document.write("Out" +":"+ "<br>"+ out +"<br>")
// out=devices.shift()
// document.write("Out" +":"+ "<br>"+ out +"<br>")
// out=devices.shift()
// document.write("Out" +":"+ "<br>"+ out +"<br>")


// question no 14///

// let devices=["Keyboard", "Mouse","Printer","Monitor"]
// let out;
// document.write("Devices" + ":"+ devices +"<br>")
// out=devices.pop()
// document.write("Out" +":"+ "<br>"+ out +"<br>")
// out=devices.pop()
// document.write("Out" +":"+ "<br>"+ out +"<br>")
// out=devices.pop()
// document.write("Out" +":"+ "<br>"+ out +"<br>")
// out=devices.pop()
// document.write("Out" +":"+ "<br>"+ out +"<br>")


// question no 15 ////
// let phoneList = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
// let index = 0;
//  document.write('<select>')
//  document.write('<option>' + phoneList[index++] + '<option>')
//  document.write('<option>' + phoneList[index++] + '<option>')
//  document.write('<option>' + phoneList[index++] + '<option>')
//  document.write('<option>' + phoneList[index++] + '<option>')
// document.write('<option>' + phoneList[index++] + '<option>')
// document.write('<option>' + phoneList[index++] + '<option>')
// document.write('<select>')
