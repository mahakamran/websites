function togle(){
    let temp = document.getElementById("password1");
    if (temp.type === "password") {
      temp.type = "text";
  }
  else {
      temp.type = "password";
  }
  }