function sumOfPositiveIntegers(numbers){
    let sum = 0;

    for (let i = 0; i< numbers.length; i++){
        if(numbers[i] > 0){
            sum += numbers[i];
        }
    }
    return sum;
}

const numbers = [1, 5, -2, 10, 7, 20, -8];
const result = sumOfPositiveIntegers(numbers);
console.log(result);