document.getElementById("x").innerHTML
function convertToTitleCase(str) {
    if (!str) {
        return ""
    }
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  
  console.log(convertToTitleCase('welcome to my article'));
  console.log(convertToTitleCase('THE avengers'));