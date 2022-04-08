let nums=[1,2,3,4];

function check(nums) {
    let leftarr=[];
    let rightarr=[];
    let solution=[];
    
    for (let i = 0; i < nums.length; i++) {
        if(leftarr.length===0){
            leftarr.push(1)
        }else{
            leftarr.push(leftarr[i-1]*nums[i-1])
        }
        }


    
        for(let i=nums.length-1;i>-1;i--){
            
         if(rightarr.length===0){
            rightarr.push(1)
        }else{console.log(`${rightarr[0]}x${nums[i+1]}`)
            rightarr.unshift(rightarr[0]*nums[i+1])
            
        }
        }

    console.log(leftarr)
    console.log(rightarr)

}