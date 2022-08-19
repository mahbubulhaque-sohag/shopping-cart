function updatePhoneNumber(isIncrease){


    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumbeString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumbeString);

    let newPhoneNumber;
    if(isIncrease == true){
        newPhoneNumber = previousPhoneNumber + 1 ;
        phoneNumberField.value = newPhoneNumber; 
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1 ;
        phoneNumberField.value = newPhoneNumber;
    }
    
    return newPhoneNumber;
  
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219 ;
    const phonetotalElement = document.getElementById('phone-total');
    phonetotalElement.innerText = phoneTotalPrice;
}



// phoneNumber and phone price increasing part

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    
    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumbeString = phoneNumberField.value;
    // const previousPhoneNumber = parseInt(phoneNumbeString);

    // const newPhoneNumber = previousPhoneNumber + 1 ;
    // phoneNumberField.value = newPhoneNumber;

    // const newPhoneNumber = updatePhoneNumber(true);

    // update phone price non functional
    // const phoneTotalPrice = newPhoneNumber * 1219 ;
    // const phonetotalElement = document.getElementById('phone-total');
    // phonetotalElement.innerText = phoneTotalPrice;

    //  calculate total
    // const phoneTotalElement = document.getElementById('phone-total');
    // const currentPhoneTotalString = phoneTotalElement.innerText;
    // const currentPhoneTotal = parseInt(currentPhoneTotalString);
      //  calculate total
    //   const currentPhoneTotal =  getTextElentValueById('phone-total');
    //   const currentCaseTotal =  getTextElentValueById('case-total');
    //   const currentSubTotal = currentPhoneTotal + currentCaseTotal ;
    //   const currentTotal = document.getElementById('sub-total');
    //   currentTotal.innerText = currentSubTotal;

     const newPhoneNumber = updatePhoneNumber(true);
     updatePhoneTotalPrice(newPhoneNumber);
     calculateSubTotal();

    
})

// phoneNumber and phone price  decreasing part


document.getElementById('btn-phone-minus').addEventListener('click', function(){

    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumbeString = phoneNumberField.value;
    // const previousPhoneNumber = parseInt(phoneNumbeString);

    // const newPhoneNumber = previousPhoneNumber - 1 ;
    // phoneNumberField.value = newPhoneNumber;

    // const newPhoneNumber =  updatePhoneNumber(false);

    // update phone price non functional
    // const phoneTotalPrice =  newPhoneNumber * 1219;
    // const phonetotalElement = document.getElementById('phone-total');
    // phonetotalElement.innerText = phoneTotalPrice;

      //  calculate total
    //   const currentPhoneTotal =  getTextElentValueById('phone-total');
    //   const currentCaseTotal =  getTextElentValueById('case-total');
    //   const currentSubTotal = currentPhoneTotal + currentCaseTotal ;
    //   const currentTotal = document.getElementById('sub-total');
    //   currentTotal.innerText = currentSubTotal;

    
    const newPhoneNumber =  updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
    

})