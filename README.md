# Prueba-Crehana

## CASO 1

My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

## CASO 2

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
Input to the function is guaranteed to be a single string.

Examples

Valid inputs:
1.2.3.4
123.45.67.89

Invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

## CASO 3

Write an algorithm that will get the value of the key of a object, it has a default value if the key not exists.
const value = getIn(obj, path, defaultValue)

example:
var object = { ‘a’: [{ ‘b’: { ‘c’: 3 } }] };
getIn(object, ‘a.b.c’, ‘default’);
// => ‘default’
confidencialidad - base (2)
var object2 = {a: { b: { c: 3 } } };
getIn(object2, ‘a.b.c’, 5);
// => 3
getIn(object2, ‘a.b.d’, 5) ;
// => 5