// falsy = false, 0, "", NaN, Undefined, e Null
//truthy = todos os outros diferentes de falsy

if ("") {
  console.log("bom dia");
} else {
  console.log("boa noite");
}

if (!null) {
  console.log("falsy or false");
} else {
  console.log("truthy or true");
}

if (null) {
    console.log("falsy or false");
  } else {
    console.log("truthy or true");
  }