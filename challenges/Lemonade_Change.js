// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order 
//one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either 
//a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction 
//is that the customer pays $5. Note that you do not have any change in hand at first.
// Given an integer array bills where bills[i] is the bill the ith customer pays, 
//return true if you can provide every customer with the correct change, or false otherwise.
// Example 1:
// Input: bills = [5,5,5,10,20]
// Output: true
// Explanation: 
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.
// Example 2:
// Input: bills = [5,5,10,10,20]
// Output: false
// Explanation: 
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we cannot give the change of $15 back because we only have two $10 bills.
// Since not every customer received the correct change, the answer is false.
function Lemonade_Change(array) {
    var five_Rupees = 0;
    var ten_Rupees = 0;
    for (var i = 0; i < array.length; i++) {
        var arr = array[i];
        if (arr == 5) {
            five_Rupees++;
        }
        else if (arr == 10) {
            if (five_Rupees > 0) {
                five_Rupees--;
                ten_Rupees++;
            }
            else {
                return false;
            }
        }
        else if (arr == 20) {
            if (five_Rupees > 0 && ten_Rupees > 0) {
                five_Rupees--;
                ten_Rupees--;
            }
            else if (five_Rupees >= 3) {
                five_Rupees = five_Rupees - 3;
            }
            else {
                return false;
            }
        }
    }
    return true;
}
console.log(Lemonade_Change([5, 5, 5, 10, 20]));
console.log(Lemonade_Change([5, 5, 10, 10, 20]));
console.log(Lemonade_Change([10, 5, 10, 10, 20]));
// function Lemonade_Change(array: number[]): boolean {
//     let fiveDollar = 0;
//     let tenDollar = 0;
//     for (let i = 0; i < array.length; i++) {
//         let payment = array[i];
//         if (payment === 5) {
//             fiveDollar++;  // Customer paid $5, no change required, just increase $5 bills
//         } else if (payment === 10) {
//             if (fiveDollar > 0) {
//                 fiveDollar--;  // Give one $5 bill as change
//                 tenDollar++;   // Keep the $10 bill
//             } else {
//                 return false;  // If no $5 bills available, can't make change
//             }
//         } else if (payment === 20) {
//             // Prioritize giving one $10 and one $5 as change, if possible
//             if (tenDollar > 0 && fiveDollar > 0) {
//                 tenDollar--;
//                 fiveDollar--;
//             } 
//             // Otherwise, try giving three $5 bills as change
//             else if (fiveDollar >= 3) {
//                 fiveDollar -= 3;
//             } 
//             // If neither is possible, return false
//             else {
//                 return false;
//             }
//         }
//     }
//     return true;  // If we processed all customers successfully, return true
// }
// console.log(Lemonade_Change([5, 5, 5, 10, 20]));  // Output: true
// console.log(Lemonade_Change([5, 5, 10, 10, 20]));  // Output: false
