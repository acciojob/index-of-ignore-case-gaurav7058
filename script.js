function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let str=s1.toLoweCae();
	let subStr=s2.toLowerCase();
	let result=str.indexOf(subStr);
		return result;	
	
	
		
}
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
