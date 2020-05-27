/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var MIN_VALUE = -2147483648; // -2^31
    var MAX_VALUE = 2147483647; // 2^31 - 1
    var num = x;
    var result = 0;
    while(num){
        var remainder = num%10;
        result = result * 10 + remainder;
        num = x < 0 ? Math.ceil(num/10) : Math.floor(num/10);
        if (MIN_VALUE > result || result > MAX_VALUE) {
            return 0;
        }
    }
    return result;
};
test("test1", ()=>{
    expect(reverse(123)).toBe(321);
});
test("test2", ()=>{
    expect(reverse(-123)).toBe(-321);
});
test("test3", ()=>{
    expect(reverse(120)).toBe(21);
});
test("test4", ()=>{
    expect(reverse(-2147483648)).toBe(0);
});
test("test5", ()=>{
    expect(reverse(-8463847412)).toBe(-2147483648);
});
test("test6", ()=>{
    expect(reverse(-9463847412)).toBe(0);
});
test("test7", ()=>{
    expect(reverse(8463847412)).toBe(0);
});
test("test8", ()=>{
    expect(reverse(9463847412)).toBe(0);
});
test("test9", ()=>{
    expect(reverse(7463847412)).toBe(2147483647);
});
