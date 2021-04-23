let cabType = localStorage.getItem("cabSelected");
let kms = localStorage.getItem("DistanceToTravel");
let journeyDate = localStorage.getItem("JourneyDate");
let pickTime = localStorage.getItem("PickUpTime");
let dob = localStorage.getItem("DateOfBirth");
let age = findAge(dob);
const gst = 7;
let totalCalculatedPrice = calculatePrice();
let printBtn = document.getElementById('printBill');
let payBtn = document.getElementById('payBill');

document.getElementById('cabType').innerHTML = cabType;
document.getElementById('distanceToTravel').innerHTML = kms;
document.getElementById('travelDate').innerHTML = journeyDate;
document.getElementById('pickUpTime').innerHTML = pickTime;
document.getElementById('age').innerHTML = age;
document.getElementById('gst').innerHTML = gst;

checkSeniorCitizen(age,totalCalculatedPrice);
//Function to find Age.
/**
 * This function finds the age based on date of birth.
 * @param {*} dob 
 */
function findAge(dob){
    let birthYear = new Date(dob).getFullYear();
    // let currDate = new Date();
    let currYear = new Date().getFullYear();
    let age = currYear - birthYear;
    return age;
}

//Function to  Calculate Price.
/**
 * This function calculates the price.
 */
function calculatePrice(){
    let price = parseInt(localStorage.getItem("CalculatedPrice"));
    let totalPrice = calculateGstPrice(price);
    let roundedPrice = Math.round(totalPrice);
    if(isPeakHour(pickTime)) 
        return roundedPrice + 0.0125;
    return roundedPrice;
}

//Function to calculate gst price.
/**
 * This function calculates the gst price.
 * @param {*} billPrice 
 */
function calculateGstPrice(billPrice){
    let bPrice = Number(billPrice);
    let calculatedPrice = bPrice + (bPrice * (gst / 100));
    return calculatedPrice;
}

/**
 * This function checks user is a senior citizen or not based on his/her age.
 * @param {*} age 
 * @param {*} totalCalculatedPrice 
 */
function checkSeniorCitizen(age, totalCalculatedPrice){
    if(age < 60){
        document.getElementById('price').innerHTML = totalCalculatedPrice;
    }
    if(age >= 60){
        document.getElementById('seniorCitizen').innerHTML = "50% discount applied";
        document.getElementById('price').innerHTML = totalCalculatedPrice/2;
    }
}

//click event for print the bill.
/**
 * Event for clicking the print button.
 */
printBtn.addEventListener("click", function(){
    printBtn.hidden = false;
    if(!printBtn.hidden){
        printBtn.hidden = true;
    }
    window.print();
});
//peak hour
/**
 * This function do check is it a peak hour or not
 * @param {*} pickTime 
 */
function isPeakHour(pickTime){
    let time = new Date(pickTime);
    let hour = time.getHours();
    console.log(hour);
    // peak hours 5pm to 7pm
    if(hour >= 17 && hour <= 19) return true;
    return false;
}