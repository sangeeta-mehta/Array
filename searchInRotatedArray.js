let arr= [4,5,6,7,0,1,2], target = 3
function searchInRotatedArray(nums, target) {
    let result=0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == target) {
            result = i
            break
        } else {
            result = -1
        }
    }
    console.log(result);
}
searchInRotatedArray(arr,target)