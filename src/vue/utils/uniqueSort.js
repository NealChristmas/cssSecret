function uniqueSort(arr){
  let complexArr=[]
  let itemArr=[]
  let i=0
  arr.forEach((item,index,arr)=>{
    itemArr=[]
    let copyArr=_clone(arr)
    copyArr.splice(index,1)
    itemArr.push(item)
    copyArr.forEach((item2,index2,arr2)=>{
      let middle=[]
      copyArr=_clone(arr2)
      if(index2==0){
        middle.push(...copyArr)
      }else{
        middle.push(...copyArr.reverse())
      }
      complexArr.push(itemArr.concat(middle))
    })

  })
  return complexArr
}
// function uniqueSort(arr){
//   let copyArr=[]
//   let complexArr=[]
//   let itemArr=[]
//   arr.forEach((item2,index2,arr2)=>{
//     itemArr=[]
//     copyArr=_clone(arr2)
//     if(index2==0){
//       itemArr.push(...copyArr)
//     }else{
//       itemArr.push(...copyArr.reverse())
//     }
//     complexArr.push(copyArr)
//   })
//   return complexArr
// }
console.log(uniqueSort(["a","b","c"]))

function _clone(arr){
  let copyArr=[]
  arr.forEach(item=>{
    copyArr.push(item)
  })
  return copyArr
}
