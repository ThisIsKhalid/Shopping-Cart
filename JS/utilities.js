function getTextElementById(elementId){
    const phoneTotalPrice = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalPrice.innerText;
    const currentPhonePrice = parseInt(currentPhoneTotalString);
    return currentPhonePrice;
}
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal(){
    const currentPhonePrice = getTextElementById('phone-price');
    const currentCasePrice = getTextElementById('case-price');
    const currentSubTotal = currentPhonePrice + currentCasePrice;

    // const currentSubTotalElement = document.getElementById('subtotal-amount');
    // currentSubTotalElement.innerText = currentSubTotal;
    setTextElementValueById('subtotal-amount', currentSubTotal);

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('total-amount', finalAmount);


}