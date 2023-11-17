/**
 * @param {Function} fn
 * @return {Function}
 */
// callCount: 실제 함수가 실행된 횟수

let callCount = 0;
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = args.join(',');
        if(cache.has(key)){
            return cache.get(key);
        }
        callCount+=1;  
        const value = fn.apply(this, args);
        cache.set(key, value);
        return value;
    }
}

function sum(a, b) {
    return a + b;
}

function factorial(n) {
    return n <= 1 ? 1 : (n * factorial(n - 1))
}
function fib(n){
    return n <= 1 ? 1 : fib(n - 1) + fib(n - 2)
}
const memoizedSum = memoize(sum);
const memoizedFactorial = memoize(factorial);
const memoizedFib = memoize(fib);

console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5

console.log(memoizedFib(5)); // Output: Computing fib, 8
console.log(memoizedFib(5)); // Output: 8

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));

console.log(callCount)

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */