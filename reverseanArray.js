let arr = [1,2,6,3,4,5,9] 
// let arr = [4, 5, 1, 2] 
function reverseAnArray(arr ) {
    let temp, j=arr.length-1;
    for (let i = 0; i < arr.length / 2; i++){
        temp = arr[j];
        arr[j] = arr[i]
        arr[i] = temp
        j--
    }

    console.log(arr);
}
reverseAnArray(arr)