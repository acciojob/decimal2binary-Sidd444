function decimalToBinary(num) {
  //Write you code here
  if(num==0) return 0;
  let ans="";
  while(num>0){
	 ans=(num%2)+ans;
	 num=Math.floor(num/2);
  }
	return ans;
}

window.decimalToBinary = decimalToBinary;
