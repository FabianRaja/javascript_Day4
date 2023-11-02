//Return median of two sorted arrays of the same size
//using anonymous function


const array1=[2,4,5,1,3];
const array2=[9,7,10,8,6];


(function(nums1, nums2){
  const merged = [...nums1, ...nums2].sort((a, b) => (a - b));
  console.log(merged);
  const n = merged.length;
  if (n % 2 === 0) {
     console.log((merged[n / 2 - 1] + merged[n / 2]) / 2);
     //         5               6  =11      /2   =  5.5                 
  }else{
    console.log(merged[Math.floor(n / 2)]);
  }
})(array1,array2);
