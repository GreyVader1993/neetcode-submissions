class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const minHeap = new MinPriorityQueue((point) => point[0])

        for(const [x, y] of points){
            const dist = Math.pow(x, 2) + Math.pow(y, 2)
            minHeap.enqueue([dist, x, y])
        }

        const res = []
        for(let i = 0; i < k; i++){
            const [dist, x, y] = minHeap.dequeue();
            res.push([x, y])
        }
        return res
    }
}