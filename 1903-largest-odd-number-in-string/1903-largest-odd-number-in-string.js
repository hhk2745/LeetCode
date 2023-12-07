/**
 * @param {string} num
 * @return {string}
 */
// var largestOddNumber = function(num) {
//     // odd number
//     if(num % 2 > 0){
//         return num;
//     }
    
//     // No odd numbers
//     let oddNumbers = [];
//     for(let i=0; i < num.length; i++){
//         const target = num.substr(i,1);
//         if(target % 2 > 0){
//             oddNumbers.push(target);
//         }
//     }
    
//     if(oddNumbers.length < 1){
//         return "";
//     }

//     // largest-valued odd
//     return `${Math.max(...oddNumbers)}`;
    
// };

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    if (parseInt(num.slice(-1)) % 2 === 1) return num;
    let i = num.length - 1;
    while (i >= 0) {
        const n = parseInt(num[i]);
        if (n % 2 === 1) return num.slice(0, i + 1);
        i--;
    }
    return "";
};