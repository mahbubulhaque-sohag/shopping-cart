function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;

    if(isIncrease == true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
    
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    // non-functional code
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberFieldString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberFieldString);

    // const newCaseNumber = previousCaseNumber + 1;

    // caseNumberField.value = newCaseNumber;
    // console.log( previousCaseNumber)

  
    // update price with quantity non-functional
    // const caseTotalPrice = newCaseNumber * 59 ;

    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText =caseTotalPrice;

    // functional code
    const newCaseNumber = updateCaseNumber(true);
    updateTotalPrice(newCaseNumber);
    calculateSubTotal();

})

function updateTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59 ;

    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText =caseTotalPrice ;
}




document.getElementById('btn-case-minus').addEventListener('click', function(){
     // non-functional code
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberFieldString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberFieldString);

    // newCaseNumber = previousCaseNumber - 1 ;

    // caseNumberField.value = newCaseNumber;

    // update price with quantity non-functional
    // const caseTotalPrice = newCaseNumber * 59 ;

    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText =caseTotalPrice ;

    // functional code
    const newCaseNumber = updateCaseNumber(false);
    updateTotalPrice(newCaseNumber);
    calculateSubTotal();
})
