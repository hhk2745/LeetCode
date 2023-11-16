
var TimeLimitedCache = function() {
    this.cacheMap = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const hasKey = this.cacheMap.has(key);
    if(hasKey){
        clearTimeout(this.cacheMap.get(key).intervalId);
    }
    const intervalId = setTimeout(()=>{
        this.cacheMap.delete(key);
    }, duration)
    this.cacheMap.set(key, {value, intervalId});
    return hasKey;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cacheMap.has(key) ? this.cacheMap.get(key).value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cacheMap.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */