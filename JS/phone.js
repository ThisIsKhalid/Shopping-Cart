/*

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-numbrer-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-numbrer-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    const newPhoneNumber = previousPhoneNumber - 1;
    phoneNumberField.value = newPhoneNumber;
})

*/
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-numbrer-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);

    // const phoneTotalPrice = newPhoneNumber * 1219;
    // const phoneTotalElement = document.getElementById('phone-price');
    // phoneTotalElement.innerText = phoneTotalPrice;
    updatePhonePrice(newPhoneNumber);

    // calculate subtotal
    // const currentPhonePrice = getTextElementById('phone-price');
    // const currentCasePrice = getTextElementById('case-price');
    // const currentSubTotal = currentPhonePrice + currentCasePrice;

    // const currentSubTotalElement = document.getElementById('subtotal-amount');
    // currentSubTotalElement.innerText = currentSubTotal;
    calculateSubTotal();
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);

    // const phoneTotalPrice = newPhoneNumber * 1219;
    // const phoneTotalElement = document.getElementById('phone-price');
    // phoneTotalElement.innerText = phoneTotalPrice;
    updatePhonePrice(newPhoneNumber);
    calculateSubTotal();
})