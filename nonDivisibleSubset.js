/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    // Write your code here
    let arr = [];
    let maxSubset = 0;
    for(let i=0; i<s.length-2; i++) {
        for(let j=i+1; j<=s.length-1; j++) {
            if((s[i] + s[j])%k != 0) {
                if(!arr.includes(s[i])) {
                    arr.push(s[i]);
                }
                if(!arr.includes(s[j])) {
                    arr.push(s[j]);
                }
            }
        }
        console.log(`arr = ${arr}`);
        if(arr.length >= maxSubset) {
            maxSubset = arr.length;
        }
        arr.length = 0;
    }
    return maxSubset;
}
let s = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436];
let k = 7;
console.log(nonDivisibleSubset(k, s));
