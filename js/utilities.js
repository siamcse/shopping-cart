function updateNumber(elementId,isIncreased){
    const inputField = document.getElementById(elementId);
    const previousNumber = parseInt(inputField.value);
    let newNumber;
    if(isIncreased === true){
        newNumber = previousNumber + 1;
    }
    else{
        newNumber = previousNumber - 1;
    }
    if(newNumber>=0){
        document.getElementsByClassName('common-minus').disabled = true;
    }
    else{
        document.getElementsByClassName('common-minus').removeAttribute('disabled');
    }
    inputField.value = newNumber;
    return newNumber;
}

function updateTotalPrice(priceId,unitNumber,unitPrice){
    const previousPriceElement = document.getElementById(priceId);
    
    previousPriceElement.innerText = unitPrice * unitNumber; 
}
