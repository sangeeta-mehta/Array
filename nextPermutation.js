let arr = [1, 2, 3,6,5,4]
// // let arr = [5,4,7,5,3,2]
// // let arr = [1,1]
// let arr = [2,4,1,7,5,0]
// function nextPermutation(nums) {
//     let i = nums.length - 1;
//     //  get place where have to change 

//     while (nums[i - 1] >= nums[i]) {
//         i--
//     }
//     console.log();




//     if (i == 0) {
//         let temp, j=nums.length-1;
//         for (let i = 0; i < nums.length / 2; i++){
//             temp = nums[j];
//             nums[j] = nums[i]
//             nums[i] = temp
//             j--
//         }
    
//     } else {
//         if (nums[i - 1] < nums[i]) {
//             i = i-1
//         }

//         let j = nums.length - 1;
//         while (nums[j] <= nums[i]) {
//             j--
//         }

//         let temp = nums[i]
//         nums[i] = nums[j]
//         nums[j] = temp

//         //revrse
//         let p = nums.length - 1
//         let start = i + 1

//         while (start < p) {
//             let temp = nums[start]
//             nums[start] = nums[p]
//             nums[p] = temp
//             start++
//             p--
//         }

//     }
    
//     console.log(nums);
    
// }
// nextPermutation(arr)


function reverseArray(arr, start, end) {
    while (start < end) {
      arr[start] = arr[start] ^ arr[end];
      arr[end] = arr[start] ^ arr[end];
      arr[start] = arr[start] ^ arr[end];
      start++;
      end--;
    }
    return arr;
  }
  
  var nextPermutation = function(nums) {
       let i, j;
  
    for (i = nums.length - 1; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
        break;
      }
    }
  
    // if there is no i then reverse the array
    if (i < 0) {
     reverseArray(arr,0,arr.length - 1)
    } else {
      for (j = nums.length - 1; j > i; j--) {
        if (nums[j] > nums[i]) {
          break;
        }
      }
  
      // swapping i and j
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
  
      // reversing the array from i + 1 to arr`s length
      reverseArray(nums, i + 1, nums.length - 1);
    }
    console.log(arr);
  };
  nextPermutation(arr)