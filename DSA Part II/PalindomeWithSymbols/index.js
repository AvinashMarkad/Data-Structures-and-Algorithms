function isAlphaNumeric(char) {
    return /^[a-z0-9]$/i.test(char);
}
function PalindromeWithSymboles(str) {
    let st = 0;
    let end = str.length - 1;

    while (st < end) { 
        while (st < end && !isAlphaNumeric(str[st])) {
            st++;
        }
        while (st < end && !isAlphaNumeric(str[end])) {
            end--;
        }
        if(str[st].toLowerCase() !== str[end].toLowerCase()) {
            return false;
        }
    }
    return true;
}


console.log(PalindromeWithSymboles("Madam")); // true
console.log(PalindromeWithSymboles("A man, a plan, a canal: Panama")); // true
console.log(PalindromeWithSymboles("Not a palindrome")); // false