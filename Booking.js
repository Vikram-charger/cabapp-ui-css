let journeyDate = document.getElementById('journeyDate');
let pickTime = document.getElementById('pickUpTime');
let dob = document.getElementById('dateOfBirth');
// let isSeniorCitizen = document.getElementById('isSeniorCitizen');
let bookBtn = document.getElementById('bookBtn');

setValidDate(); //calling this function first

/**
 * This function sets the today date and time as journey date and pick up time as default journey date as the page refreshes.
 */
function setValidDate() {
    let date = new Date();
    let todayDate = date.toJSON().substr(0, 10);
    let currentTime = date.toLocaleTimeString().substr(0,5);
    
    journeyDate.setAttribute('value', todayDate);
    journeyDate.setAttribute('min', todayDate);
    pickTime.setAttribute('value', currentTime);
}
/**
 * This function gets the trip details from the user and stores it in the local storage.
 */
function getTripDetails() {
    event.preventDefault();
    let travelDate = journeyDate.value;
    let pickUpTime = pickTime.value;
    let dateOfBirth = dob.value;
    let isSeniorCitizen = document.getElementById('isSeniorCitizen').checked;
    let getGender = document.querySelector('input[name="gender"]:checked').value;

    localStorage.setItem("JourneyDate", travelDate);
    localStorage.setItem("PickUpTime", pickUpTime);
    localStorage.setItem("DateOfBirth", dateOfBirth);
    if (isSeniorCitizen == "on") localStorage.setItem("isSeniorCitizen", true);
    else localStorage.setItem("isSeniorCitizen", false);
    localStorage.setItem("Gender", getGender);
    window.location.assign("Bill.html");
}