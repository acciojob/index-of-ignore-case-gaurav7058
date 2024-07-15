function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let result=s1.indexOf("s2");
	if (result) {
		return result;	
	}
	return -1
	
	
}




Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
