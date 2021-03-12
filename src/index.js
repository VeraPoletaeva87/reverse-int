module.exports = function reverse (n) {
    if (n === 0) {
        return n;
    }
    if (n<0) {
        n=n*-1;
    }
    let res='';
    const str = n.toString();
    let i=str.length;
   while (i > 0) {
      res=res+str[i-1];
      i--;
  }
  return res;
}
