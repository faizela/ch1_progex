
function askString(){
   const str1 = prompt('Enter first word')
   const str2 = prompt('Enter second word')
   return [str1, str2]
}

const [str1, str2] = askString()




function isAnagram(str1, str2) {
  return str1.length == str2.length
}

console.log(isAnagram(str1, str2))