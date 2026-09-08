function sum(...values)
{
    let sum= 0;
    for(let i in values)
    {
        sum += values[i];
    }
    console.log(sum);
}
let arr1 = [10,20,30,40,50];
sum(...arr1);


function result(...values) {
    let result;
    let sum = 0;
    let count = 0;
    for (let n of values) {
        sum = sum + values[n];

        count = count + 1;
    }
    result = sum / count;
    console.log(result, "%");
}
let arr = [1, 2, 3, 4, 5];
result(...arr);