

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const unitNumber = updateNumber('case-input',true);
    updateTotalPrice('case-price',unitNumber,59);
    totalCartPrice();
    
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const unitNumber = updateNumber('case-input',false);
    updateTotalPrice('case-price',unitNumber,59);
    totalCartPrice();
})