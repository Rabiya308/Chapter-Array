// ///////question no 1 ////////
// let rightNow = new Date();
// document.write(rightNow)

// ////question no 2 ///////
// let monthNames = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November", "December"];
// let now = new Date();
// let theMonth = now.getMonth();
// let nameOfcurrentMonth = monthNames[theMonth]
// alert(" Current month " + nameOfcurrentMonth)

// /////question no 3 //////
// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let now = new Date();
// let theDay = now.getDay();
// let nameOfToday = dayNames[theDay]
// alert("Today is " + nameOfToday)


////question no 4 ///////
// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let now = new Date();
// let theDay = now.getDay();
// let nameOfToday = dayNames[theDay]

// if(theDay ===  nameOfToday){
//   alert("It's  fun day")
// }
// else{
//   alert("It's boring")
// }


// ////question no 5 ///////
// let monthDays = [30];
// let now = new Date();
// let theMonth = now.getMonth();
// let numberOfcurrentMonth = monthDays[theMonth]
// if(numberOfcurrentMonth === 15){
// alert("First fifteen days of the month " )
// }
// else{
//   alert("Last days of the month ")
// }


// /////question no 6/////
// let today = new Date()
// let miliSec = today.getTime()
// let minutes = today.getMinutes() 
// document.write("Current date " + today  + "<br>")
// document.write("Elapsed milliseconds since jan 1 ,1970  : " + miliSec + "<br>")
// document.write("Elapsed minutes since jan 1 ,1970  : " + minutes + "<br>")


// /////question no 7 //////
// let hours = new Date();
// let currentHrs = hours.getHours();
// if(currentHrs === 12){
//   alert("It's AM")
// }
// else{
//   alert("It's PM")
// }



// ////question no 8 /////////
// let LaterDate = new Date("Dec 31 ,2020")
// alert("Later Date  : " + LaterDate)


///////question no 9 ///////
// let today = new Date();
// let startingDate = new Date("june 18 ,2015")

// let msToday = today.getTime();
// let msStardingdate = startingDate.getTime()

// let msDiff = msStardingdate - msToday;
// let dDiff = msDiff / (1000 * 60 * 60 * 24)
// dDiff = Math.floor(dDiff);
// alert(dDiff + "  days have passed since 1st ramazan 2015 ")


// ////question no 10 //////
// let today = new Date();
// let refrenceDate = new Date("dec 5 ,2015")
// let Tseconds = today.getSeconds()
// let refrenceSec = refrenceDate.getSeconds();
 
// let elapsed = Tseconds -  refrenceSec ;

// sDiff = elapsed  / 1000;



// document.write( "on refrence date"  +   refrenceDate  + "<br>")
// document.write(sDiff + " seconds had  passed since begining of 2015 ")


// /////question no 11 /////
// let today = new Date();
// let getHours = new Date();
// getHours.setHours( getHours.getHours() - 1)

// document.write(" Current date  : " + today + "<br>")
// document.write("1 hour ago it was " + getHours )


// ////question no 12 ///////
// let today = new Date();
// let newDate = new Date("dec 5 ,2015")
// newDate.setFullYear( newDate.getFullYear() - 100 );
// document.write(" Current date  : " + today + "<br>")
// document.write("100 years back it was "+ newDate  )


// ///////question no 13 ///////
// let userInput = +prompt("enter your age")
// let date = new Date();
// date =( date.getFullYear()- userInput) 
// alert("your age is " + userInput)
// alert("your birth year is " + date)


// //////question no 14 /////////
let customerName = "ABC customer"
let month = "February"
let numOfunits = 410;
let chaPerunit = 16;
netAmount = numOfunits * chaPerunit;
let latePayment = 350;
GrossAmount = netAmount - latePayment;
document.write(" <b> K-Electric Bill </b>   <br> ")
document.write(" Customer Name  : " + customerName + "<br>")
document.write("  Month :  " +  month +"<br>" )
document.write("  Number of units :  " + numOfunits  + "<br>")
document.write("  Charges per unit  : " + chaPerunit + "<br>" +  "<br>" +  "<br>")
document.write(" Net amount payable (within due date) : " + netAmount +  "<br>" )
document.write(" Late payment surcharge : "  +  latePayment + "<br>")
document.write(" Gross amount payable (after due date) :  " + GrossAmount     + "<br>")
