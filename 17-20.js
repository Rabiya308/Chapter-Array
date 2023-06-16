// ////////chapter 17 till 20 ////////

// /// question no 1 //////

// let arr= [];

// //question no 2 //////

// let arr=[[0,1,2,3]
//         ,[1,0,1,2]
//         ,[2,1,0,1]];



// for (let i = 0; i < 3; i++){
//     for (let j = 0; j < 4; j++){
//      document.write(arr[i][j]+ '')
//     }
//    document.write("<br>") 
// }
        
// //question no 3 /////

// for (let i = 1; i <=10; i++){
//   document.write(i + "<br>")
// }

// //question no 4 /////

// let table= +prompt("enter a number for table")
// let length= +prompt("enter length for table")
// document.write("Multiplication table of" + "\n"+ "\n"+ table + "<br>")
// document.write("length" + "\n" + length + "<br>")

// for (let i = 1; i <= length; i++){
  
//   document.write(table+ "x" + i + "=" + table*i + "<br>")

// }


// ///question no 5 /////
// let fruits =["apple", "banana", "mango", "orange", 
//   "strawberry"];

//   for (let i = 0; i <fruits.length; i++){
//     document.write(fruits[i] + "<br>")
//   }
//   document.write("<br>")
//   for (let j =0; j < fruits.length; j++){
//     document.write(" Element at index of " +" \n " + j + " is "   +" \n "+  fruits[j] + "<br>")
//   }


// ///question no 6 ///////
// document.write("Counting" +" <br> ")

// for (let i = 1; i <= 15; i++){
  
//   document.write(i + "," +'\n')
// }

// document.write("Reverse Counting" +" <br> ")

// for (let i = 10; i >= 1; i--){
  
//   document.write(i + "," +'\n')
// }

// document.write("Even" +" <br> ")

// for (let i = 0; i <= 20; i++){
  
//   document.write(i++ + "," +'\n')
// }

// document.write("Odd" +" <br> ")

// for (let i = 1; i <= 19; i =i+2){
  
//   document.write(i + "," +'\n')
// }

// document.write("Series" +" <br> ")

// for (let i = 2; i <= 20; i=i+2){
  
//   document.write(i + "k" + "," +'\n')
// }

// //question no 7 /////

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

////question no 8//////

// let num= [24, 53, 78, 91, 12]
//  largest= num [0];
// document.write(" Array Items " + "  :  " + num  + "  <br> ")

// for (let i= 0; i < num.length; i++){
//   if ( largest < num[i]){
//    largest= num[i]
//   }
  
// }
// document.write("  The largest number is  "  +   largest)


// ///question no 9///////
// let num= [24, 53, 78, 91, 12]
// smallest= num [0];
// document.write(" Array Items " + "  :  " + num  + "  <br> ")

// for (let i= 0; i < num.length; i++){
//   if ( smallest > num[i]){
//    smallest= num[i]
//   }
  
// }
// document.write("  The smallest number is  "  +   smallest)


/////question no 10 ////////

// for (let i = 1; i <= 100; i++){
//   if (i % 5 == 0){
//     document.write(i + "<br>")
//   }
  
// }
