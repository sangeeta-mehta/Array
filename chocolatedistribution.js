let arr=[7, 3, 2, 4, 9, 12, 56], n=3
function chocolatedistribution(arr, n) {
    arr.sort(function (a, b) { return a - b })
    let min = Number.MAX_VALUE
    for (let i = 0; i < arr.length; i++){
        if (arr[i + n - 1] - arr[i] < min) {
            min = arr[i + n - 1] - arr[i]
        }

    }
    console.log(min);

}
chocolatedistribution(arr, n)