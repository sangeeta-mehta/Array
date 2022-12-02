let arr=[-2,1,-3,4,-1,2,1,-5,4]
// let arr=[-2,-1]
function maxSubArray(arr) {
    let curr = 0
    let sum=arr[0];
    for (let i = 0; i < arr.length; i++){
        curr += arr[i]
        console.log(curr,"curr");
        if (sum < curr) {
            sum = curr
        console.log(sum,"sum");

        }
        if (curr <= 0) {
            curr =0
        }
        console.log( "---------------", sum, curr);
    }
    console.log(sum);

}
maxSubArray(arr)