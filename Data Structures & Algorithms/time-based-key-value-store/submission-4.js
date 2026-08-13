class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, [])
        }
        return this.keyStore.get(key).push({value, timestamp})
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.get(key)){
            return ""
        }

        let list = this.keyStore.get(key)
        let firstEl = list[0]

        if(firstEl.timestamp > timestamp){
            return ""
        }

        let left = 0
        let right = list.length - 1

        while(left <= right){
            let mid = Math.floor((left + right) / 2)
            if(list[mid].timestamp === timestamp){
                return list[mid].value
            } else if (list[mid].timestamp <= timestamp){
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return list[left - 1].value
    }
}
