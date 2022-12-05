let nums =[2,4,18,22,22]
function containduplicate(nums) {
    let count=0
    for (let i = 0, j = 1; i < nums.length; i++){
        console.log(i, j);
        j=i+1
        while (j < nums.length) {
            console.log(nums[j],nums[i],count);
            if (nums[j] == nums[i]) {
                count +=1
                break;
            }
            j++
        }

        if (count > 0) {
         break
        }
        console.log("----------");
    }
    if (count > 0) {
        console.log("true");
    } else {
        console.log("false");
    }
    
}
containduplicate(nums)