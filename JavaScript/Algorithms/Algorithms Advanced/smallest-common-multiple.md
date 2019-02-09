###Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

```
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}


smallestCommons([1,5]); //60
```
* The first, basic solution requires over 2,000 loops to calculate the test case `smallestCommons([1,13])`, and over 4 million loops to calculate `smallestCommons([1,25])`. This solution evaluates `smallestCommons([1,13])` in around 20 loops and smallestCommons([1,25]) in 40, by using a more efficient algorithm.
* Make an empty array range.
* All numbers between the given range are pushed to range using a `for` loop.
* The next block of code implements the Euclidean algorithm, which is used for finding smallest common multiples.