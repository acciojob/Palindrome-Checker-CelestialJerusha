// complete the given function

function palindrome(str){
	let s = "";
	for(let i=0;i<str.length;i++){
		if(str.charAt(i) >='a' && str.charAt(i) <='z'){
			s += str.charAt(i);
		}
		else if(str.charAt(i) >='A' && str.charAt(i) <='Z'){
			s += str.charAt(i).toLowerCase();
		}
		else if(str.charAt(i) == ' '){
			i++;
		}
	}
	for(let i=0;i<s.length/2;i++){
		if(s.charAt(i) !== s.charAt(s.length-i-1)){
			return false;
		}
	}
	return true;

}
module.exports = palindrome
