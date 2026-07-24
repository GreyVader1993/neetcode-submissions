class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const INT_MIN = -2147483648
        const INT_MAX = 2147483646
        let revnumber = 0
        while(x !== 0){
            let remainder = x%10
            x = Math.trunc(x / 10)
            revnumber = revnumber * 10 + remainder
            if(revnumber < INT_MIN || revnumber > INT_MAX){
                return 0
            }
        }
        return revnumber
    }
}
