// incorrect attempt
var countSheep = function (num){
    let array = []
    for (let i = 1; i <= num ; i++){
      array.push(i)
    }
    return array.join(" sheep...")
  } 

//   correct
const countSheep = function(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
      result += String(i) + ' sheep...';
    }
    return result;
  }