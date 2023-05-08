/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

/*function appendAndDelete(s, t, k) {
    // Write your code here
    function areSame(s, t) {
        let flag = 1;
        let i = 0;
        while (flag) {
            if (i >= s.length || i >= t.length) {
                return i;
            }
            if (s[i] != t[i]) {
                flag = 0;
                return i;
            }
            i++;
        }
    }
    let diffIndex = areSame(s, t);
    if (diffIndex == s.length && s.length < t.length) {
        return 'Yes';
    }
    let sReduce = s.length - diffIndex;
    let tAppend = t.length - diffIndex;

    if ((sReduce + tAppend) <= k) {
        return 'Yes';
    }
    else {
        return 'No';
    }
}
let s = "abc";
let t = "abcdef";
let k = 0;
console.log(appendAndDelete(s, t, k));
*/


function appendAndDelete(s, t, k) {
    // Write your code here
    function areSame(s, t) {
        let flag = 1;
        let i = 0;
        while (flag) {
           /* if (i == s.length) {
                return i;
                flag = 0;
            }*/
            if (i >= t.length) {
                return i;
                flag = 0;
            }
            if (i >= s.length) {
                return i;
                flag = 0;
            }
            if (s[i] != t[i]) {
                flag = 0;
                return i;
            }
            i++;
        }
    }
    let diffIndex = areSame(s, t);
    /*if (diffIndex == s.length) {
        return 'Yes';
    }*/
    let sReduce = s.length - diffIndex;
    let tAppend = t.length - diffIndex;

    if ((sReduce + tAppend) <= k) {
        return 'Yes';
    }
    else {
        return 'No';
    }
}
let s = "abcd";
let t = "abcdert";
let k = 10;
console.log(appendAndDelete(s, t, k));