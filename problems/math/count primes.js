/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    
    //assume all numbers are prime numbers until n in an isPrime array
    //do a loop until sqrt(n)
    //if current number is prime in the loop, set the multiples of our current number to be false in isPrime array
    
    if(n<=1){
        return 0
    }
    
    //possible question: what if the question asks you to also include number n
    const isPrime = Array(n).fill(true)
    isPrime[0] = false
    isPrime[1] = false
    
    const mx = Math.ceil(Math.sqrt(n))
    
    //possible question, why don't we have a "primeCount" variable that gets incremented in the if condition
    for(let i = 2;i<=mx;i++){
        if(isPrime[i]){
            for(let multipleOfI = i*i; multipleOfI<n; multipleOfI+=i){
                isPrime[multipleOfI] = false
            }
        }
    }
    
    return isPrime.reduce((acc,currentValue)=>currentValue==true?acc+1:acc)
};