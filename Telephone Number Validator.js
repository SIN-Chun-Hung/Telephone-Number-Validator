function telephoneCheck(str) {
  let checkRegex = /([\s-]*[0-9][0-9][0-9][\s-]*[0-9][0-9][0-9][\s-]*[0-9][0-9][0-9][0-9])|([\s]*[(]+[0-9][0-9][0-9][)]+[\s]*[0-9][0-9][0-9][\s-]*[0-9][0-9][0-9][0-9])|([1][\s-]*[0-9][0-9][0-9][\s-]*[0-9][0-9][0-9][\s-]*[0-9][0-9][0-9][0-9])|([1][\s]*[(]+[0-9][0-9][0-9][)]+[\s]*[0-9][0-9][0-9][\s-]*[0-9][0-9][0-9][0-9])/;

  let checkedStr = str.match(checkRegex);

  if (checkedStr == null) {
    return false;
  } else if (checkedStr[0] == str) {
    console.log(checkedStr[0]);
    return true; 
  } else {
    return false;
  }
}

console.log(telephoneCheck("11 555-555-5555"));