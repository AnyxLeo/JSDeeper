
/**Ternary operator */
/** If a costumer has more than 100 points,
 * they are a 'gold' customer, otherwise,
 * they are a 'silver' costumer.
 */

 let points = 110;
 let type = points > 100 ? 'gold' : 'silver';

 console.log(type);

 /**Logical AND (&&) */
 //Returns TRUE if both operands are TRUE
//  console.log(true && true);
//  console.log(false && true);
//  console.log(true && false);
//  console.log(false && false);

 let higIncome = true;
 let goodCreditScore = true;
 let eligibleForLoan = higIncome && goodCreditScore;

 console.log(eligibleForLoan);

 /**Logical AND (||) */
 //Returns TRUE if one of the operands are TRUE
//  console.log(true || true);
//  console.log(false || true);
//  console.log(true || false);
//  console.log(false || false);

higIncome = false;
goodCreditScore = true;
eligibleForLoan = higIncome && goodCreditScore;

console.log('Elegible',eligibleForLoan);

/**NOT (!) */

let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);

