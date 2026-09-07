class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1])
        let prevEnd = intervals[0][1]
        let count = 0

        for(let i = 1; i < intervals.length; i++){
            let currentStart = intervals[i][0]
            let currentEnd = intervals[i][1]
            if(currentStart < prevEnd){
                count++
            } else {
                prevEnd = currentEnd
            }
        }
        return count 
    }
}
