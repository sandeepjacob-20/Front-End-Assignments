var num: number = 1024;
const numArray: number[] = [];
while(num!=0){
    let a = num - Math.trunc(num / 10) * 10;
    // console.log(a)
    numArray.push(a);
    num = Math.trunc(num / 10);
    // console.log(num)
}
console.log(numArray);

