let num = 2;
function getNumber(num) {
    if (num>0){
        return "Positive";
    }else if (num<0){
        return "Negative";
    }else {
        return "Zero";
    }    
}
console.log(getNumber(num));
