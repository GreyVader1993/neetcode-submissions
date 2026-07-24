/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const start = intervals.map((x) => x.start).sort((a,b) => a - b)
        const end = intervals.map((x) => x.end).sort((a,b) => a - b)

        let res = 0
        let count = 0

        let st = 0
        let en = 0

        while(st < intervals.length){
            if(start[st] < end[en]){
                st++
                count++
            } else {
                en++
                count--
            }
            res = Math.max(res, count)
        }
        return res
    }
}
