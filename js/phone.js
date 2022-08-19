
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const unitNumber = updateNumber('phone-input',true);
    updateTotalPrice('phone-price',unitNumber,1219)
})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const unitNumber = updateNumber('phone-input',false);
    updateTotalPrice('phone-price',unitNumber,1219)
})