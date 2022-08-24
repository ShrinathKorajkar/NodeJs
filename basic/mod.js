console.log("this is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => sum += element)
    return sum;
}

module.exports = average;

module.exports = {
    avg : average
};