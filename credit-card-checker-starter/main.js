// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
/* 
Function to validate a given credit card number
This function ses the Luhn algorithm for the validation process
*/

const validateCred = (arr) => {
    let checkArr = arr.map((x) => x);//Create a copy of the array to avoid modifying the original array(slice creates a shallow copy)
    let sum = 0;
    let toDouble = false; //This bool value is used to determine if the current digit should be doubled or not
    for(let x=checkArr.length-1; x>= 0; x--){
        
        if(toDouble){
            checkArr[x] *= 2;
            if(checkArr[x] > 9){
                checkArr[x] -= 9;
            }
        }
        sum += checkArr[x];
        //Toggle the toDouble value since in the luhn algorithm, every other digit is doubled
        toDouble = !toDouble;
    }
    //The credit card number is only valid if the sum determined is a multiple of 10
    if ((sum % 10) === 0) {
        
        return true;
     
    }
    
    return false;
    
    
}
// function to find and return invalid credit card numbers
const findInvalidCards = (cards) =>{
    let invalidCards = cards.filter((card) => !validateCred(card));//filters out the invalid cards into a new array
    return invalidCards;
}
    
//Function to identify the companies that issued the invalid credit cards
const idInvalidCardCompanies = (invalidCards) =>{
    let company;
    let companies = [];
    invalidCards.forEach(card => {
        switch(card[0]){//the first digit of the credit card number identifies the company that issued the card
            case 3:
                company = 'Amex (American Express)';
                break;
            case 4:
                company = 'Visa';
                break;
            case 5:
                company = 'Mastercard';
                break;
            case 6:
                company = 'Discover';
                break;
            default:
                company = 'Company not found';
                console.log("company: " + company);
        }
    
        if(!companies.includes(company) && company !== 'Company not found'){
            companies.push(company);
        }
    });

    return companies;

}

//console.log(validateCred(invalid1));
//console.log(findInvalidCards(batch));

//console.log(idInvalidCardCompanies(findInvalidCards(batch)));



