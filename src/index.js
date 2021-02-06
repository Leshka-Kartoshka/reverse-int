module.exports = function reverse (n) {
    if(n < 0){
      n = -n
    }
    number = n;
    var stringifyed = n.toString();
    var length = stringifyed.length;
    var reversed = 0;
    for(var i = 0; i < length; i++){
      var buffer = number%10;
      number = Math.floor(number / 10);
      reversed = reversed * 10 + buffer;
    }
    return reversed;
}
