//-------------------ex1---------------------

const isAllNumbersOdd = (num) => {
    if (typeof num === 'number') {
        num = num.toString()
    }
    if(num.length === 0){
        return true;
    }
    if(num[0] % 2 ===0 ){
        return false;
    }
    num = num.slice(1);
    return isAllNumbersOdd(num)

}
      
// console.log(isAllNumbersOdd(4211133));
// console.log(isAllNumbersOdd(7791));
// console.log(isAllNumbersOdd(5));
  

//-------------------ex2---------------------

const minPositive = (arr, i=0, minP=Infinity) => {
    if (i === arr.length) {
        return minP >= 0 && minP !== Infinity ? minP : -1;
    }
    minP = (arr[i] >= 0) && (arr[i] < minP) ? arr[i] : minP;
    return minPositive(arr, i+1, minP)
}

// console.log(minPositive([56,-9,87,-23,0,-105,55,1]));
// console.log(minPositive([45,-9,15,5,78]));
// console.log(minPositive([-5,-9,-111,-1000,-7]));


//-------------------ex3---------------------

const violatedIndex = (arr)=>{
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > arr[i+1]) {
          break;
        }
        i += 1;
      }
    
    return arr.indexOf(arr[i+1]);    
}

// console.log(violatedIndex([2,12,15,5]));
// console.log(violatedIndex([-9,-4,-4,3,12,4,5]));

//-------------------ex4---------------------

const removeFirst = (arr,i=0, newArr=[])=>{
  if(i === 0){
    arr.splice(0,1)
  }
  if(i<arr[i]){
    newArr.push(arr[i]);
    return removeFirst(arr, i+1, newArr)
  }
    return newArr;
}

// console.log(removeFirst([5,7,9,10,50]));

//-------------------ex5---------------------

function concatNestedArrs(arr, i=0,newArr=[]){
     
    for(let i =0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
           newArr = newArr.concat(concatNestedArrs(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;

}
   
// console.log(concatNestedArrs([1,[3,4,[1,2]],10]));

//-------------------ex6---------------------

function shiftArr(arr, n) { 
    if (n===0) {
        return arr;
    }
  
    if(n>0){
        arr.push(arr.shift());
        return shiftArr(arr, n-1)

    }
     else if(n<0){  
        arr.unshift(arr.pop()); 
        return shiftArr(arr,n+1)
    }
 }
 
//  console.log(shiftArr([1, 2, 3, 4, 5,8,9],3));
//  console.log(shiftArr([1, 2, 3, 4, 5,8,9],-2));

//-------------------ex7---------------------

function sumDigits(num){
    let sum = 0;
    if (typeof num === 'number') {
        num = num.toString()
    }
  
    let arrNums = String(num).split("").map((num)=>{
        return Number(num)
     })
     for(let i = 0; i<arrNums.length;i++){
            sum += arrNums[i]
     }
     let arrSum = String(sum).split("").map((sum)=>{
        return Number(sum)
     })
     for(let ii = 0; ii<arrSum.length;ii++){
        if(arrSum.length === 1){
            return sum;
        }else{
            return sumDigits(arrNums.shift())
        }
    }
}


// console.log(sumDigits(9999));
// console.log(sumDigits(14));


//-------------------ex8---------------------

function cloneObject(obj, clone = {}) {
    for(let i in obj) {
        if(typeof(obj[i])==="object" && obj[i] !== undefined)
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}

// console.log(cloneObject(obj = {
//     name:'Ann',
//     age:15,
// }))


//-------------------ex9---------------------

const debounce = (func, timer)=>{
    let timeOut;

    return ()=>{
        clearTimeout(timeOut);
        timeOut = setTimeout(func, timer);
    }
}

// const input = document.querySelector('input');
// const log  = ()=> console.log(input.value);
// input.addEventListener('keyup',debounce(log,500));

//-------------------ex10---------------------

const throttle = (func, timer)=>{
    let throttling = false;

    return (...args)=>{
        if(throttling){
            return;
        }
        throttling = true;
        setTimeout(()=> (throttling = false),timer);
        return func.apply(this, args)
    }
}

// const log  = (e)=> console.log(e.clientX);
// addEventListener('mousemove',throttle(log,1000));