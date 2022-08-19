
function updateCaseNumber(isIncreased){
    const caseInputField = document.getElementById('case-input');
    const previousCaseNumber = parseInt(caseInputField.value);
    let newCaseNumber;
    if(isIncreased === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    if(newCaseNumber<=0){
        document.getElementById('btn-case-minus').disabled =true;
    }
    else{
        document.getElementById('btn-case-minus').removeAttribute('disabled');
    }
    caseInputField.value = newCaseNumber;
    return newCaseNumber;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const caseNumber = updateCaseNumber(true);
    const previousCasePriceElement = document.getElementById('case-price');
    
    previousCasePriceElement.innerText = 59 * caseNumber;
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const caseNumber = updateCaseNumber(false);
    const previousCasePriceElement = document.getElementById('case-price');
    
    previousCasePriceElement.innerText = 59 * caseNumber;
})