selectElement = document.querySelector('#cabType');
let kms = document.getElementById('kms');

/**
 * This function gets the user choice of cab.
 */
function SelectCab(){
    event.preventDefault();
    selectedCab = selectElement.options[selectElement.selectedIndex].value;
    traveDistance = kms.value;
    priceTotal = calculatePrice(selectedCab, traveDistance);
    document.getElementById('calculatedPrice').innerHTML = priceTotal;
    localStorage.setItem("cabSelected", selectedCab);
    localStorage.setItem("DistanceToTravel", traveDistance);
    localStorage.setItem("CalculatedPrice", priceTotal);
    //alert("Your preferred cab is"+" "+selectedCab+" "+"for"+" "+traveDistance+" "+"kms");
}

/**
 * This function calculates the estimated price.
 */
function calculatePrice(cabType, kms){
    let perKmPrice = 0;
    if(cabType == "MICRO"){
        perKmPrice= 10;
    }
    if(cabType == "MINI"){
        perKmPrice= 15;
    }
    if(cabType == "PRIME"){
        perKmPrice= 20;
    }
    price = perKmPrice * kms;
    return price;
}