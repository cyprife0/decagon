 const array1 = [,,,'fizz',,'buzz',,7,,'fizz',,,,,,'fizzBuzz',,,,,,,,,,'buzz'];
// fizzBuzz
function fizzBuzz(a) {
    console.log(array1[a]);
}
fizzBuzz(3)
fizzBuzz(9)
fizzBuzz(5)
fizzBuzz(15)
fizzBuzz(25)
fizzBuzz(7);






    // SUMMNIX TEXT
    function sumMix(arr){
    var stringArray = arr;
    var numberArray=[];
    length = stringArray.length;
    for (var i = 0; i < length; i++)
        numberArray.push(parseInt(stringArray[i]));  
        const initialValue = 0;
        const sumWithInitial = numberArray.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );
      
        console.log(sumWithInitial);
    

    }
    sumMix([9, 3, '7', '3'])
    sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])
    sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])
    sumMix([1, '5', 6, 7])
    sumMix([10, 60, '80', 10])
    sumMix(['1', 2, 3, '9', 10])
    sumMix(['5', 6, '7'])



    //  FILTER LIST TEST
// console.log(['a',"b",6,6].filter(true))
function filterList(numbers){
const over18 = numbers.filter(myFunction);
console.log(over18);
function myFunction(data) {
  return  typeof(data)==="number";
  
}
}
filterList([1,2,'a','b']);
filterList([1,'a','b',0,15])
filterList([1,2,'aasf','1','123',123])
filterList(['wk', 4, 5, 6, 'yl', 'to' ])
filterList([3, "Pop", 8, 9, 7,"learn" ])
filterList(["t", 9])
filterList(["t", '9'])



const calculateGrade = function (arr){
    let sum = 0;
for (var i=0;i<arr.length;i++) {
    sum+=arr[i];
}
        var score = sum/arr.length;
        if(score >= 40 && score <=49  || score < 39 ){
            return "F";
        }
        if(score >= 50 && score <=59){
            return "E";
        }
        if(score >= 60 && score <=69){
            return "D";
        }
        if(score >= 70 && score <=79){
            return "C";
        }
        if(score >= 80 && score <=89){
            return "B";
        }
        if(score >= 90 && score <=99){
            return "A";
        }
    
}

console.log(calculateGrade([19, 5, 42, 2, 77]));
console.log(calculateGrade([59, 80, 40, 2, 77]));
console.log(calculateGrade([89, 50, 40, 90, 77]));
console.log(calculateGrade([59, 75, 82, 77]));
console.log(calculateGrade([80, 80, 80]));
console.log(calculateGrade([90, 90, 97]));
