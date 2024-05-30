let array = [1,2,3,4,5,6,7,8,9,1,2,3];
console.log(array.filter((item, index) => index === array.indexOf(item)));
