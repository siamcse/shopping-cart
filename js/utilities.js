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

function getTextElementById(elementId){
    const totalPriceElement = document.getElementById(elementId);
    const totalPrice = parseInt(totalPriceElement.innerText);
    return totalPrice;
}

function totalCartPrice(){
    const phonePrice = getTextElementById('phone-price');
    const casePrice = getTextElementById('case-price');

    const subTotalElement = document.getElementById('sub-total');
    const subTotalPrice = phonePrice + casePrice;
    subTotalElement.innerText = subTotalPrice;

    //tax price 10%
    const taxPrice = parseFloat((subTotalPrice * 0.15).toFixed(2));
    //set tax price
    document.getElementById('tax-total').innerText = taxPrice;
    //set total amount
    const totalAmount = subTotalPrice + taxPrice;
    document.getElementById('total-amount').innerText = totalAmount;

}
//checkout button
document.getElementById('check-out').addEventListener('click',function(){
    alert('এখনো তোমার iPhone📱 কিনার বয়স হয় নাই বাবু👶')
})
