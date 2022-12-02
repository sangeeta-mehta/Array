// let arr=[-2,1,-3,4,-1,2,1,-5,4]
let arr=[1]
function maxSubArray(arr) {
    let curr = 0
    let sum=0, newArr = [];
    for (let i = 0; i < arr.length; i++){

        curr += arr[i]

        if (sum < curr) {
            sum = curr
        }

        if (curr < 0) {
            curr = 0
        }

    }
    console.log(sum);

}
maxSubArray(arr)