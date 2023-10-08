/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
*/

const MedianofTwoSortedArrays = (nums1, nums2)=>{
    function ordenarArray(arr){
        let newArr = arr
        for(let prev=0; prev<newArr.length-1; prev++){
            for(let next=prev+1; next<newArr.length; next++){
                let aux=newArr[prev];

                if(newArr[next]<newArr[prev]){
                    newArr[prev]=newArr[next];
                    newArr[next] = aux;
                }
            }
        }
        return newArr
    }
    let finalArray = ordenarArray([...nums1, ...nums2])

    if(finalArray.length % 2 == 0){
        return (finalArray[finalArray.length/2-1] + finalArray[finalArray.length/2]) / 2
    }else{
        return (finalArray[finalArray.length/2-0.5])
    }
}