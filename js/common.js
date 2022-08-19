function getTextElentValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
      subTotalElement.innerText = value;
}

function calculateSubTotal(){
      //  calculate total
      const currentPhoneTotal =  getTextElentValueById('phone-total');
      const currentCaseTotal =  getTextElentValueById('case-total');
      
      const currentSubTotal = currentPhoneTotal + currentCaseTotal ;
     

      setTextElementValueById('sub-total', currentSubTotal);

//     //   calculate Tax
    const taxAmount = (currentSubTotal * 0.1).toFixed(2) ;
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}