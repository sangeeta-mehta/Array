// find minimum and maximum number in an array
function findMaxMin(arr) {
    let maxnum = arr[0], min =arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min=arr[i]
        } else if (arr[i] > maxnum) {
            maxnum = arr[i]
        }
    }
    console.log(arr, min, maxnum);
}
// findMaxMin([3,5,4,1,9])
findMaxMin([-2, 1, -4, 5, 3])


//  find sum of minimum and maximum number in an array
function findMaxMin(arr) {
    let maxnum = arr[0], min =arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min=arr[i]
        } else if (arr[i] > maxnum) {
            maxnum = arr[i]
        }
    }
    console.log( min+ maxnum);
}
findMaxMin([3,5,4,1,9])
// findMaxMin([-2, 1, -4, 5, 3])