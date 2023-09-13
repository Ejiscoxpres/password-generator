const keys = {
    
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  };
  const getKey = [
    
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
    
  ];
  
  function createPassword() {
    
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const upper = document.getElementById("upperCase").checked;
    const symbol = document.getElementById("symbol").checked;
    if (upper + lower + number + symbol === 0) {
      alert("Please check atleast one box!");
      return;
    }
    const passwordBox = document.getElementById("passwordBox");
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    passwordBox.innerHTML = password;
  }
  function copyPassword() {
    const textarea = document.createElement("textarea");
    const password = document.getElementById("passwordBox").innerText;
    if (!password) { return; }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
  }

  /**this is nav bar session 
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

  function onclick() {
    alert("you clicked navigation button");
  }*/