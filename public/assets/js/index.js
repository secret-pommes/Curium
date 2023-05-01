{
  console.log("Script is loaded!");
  // code from FMP API:
  // Source: https://web.archive.org/web/20220128200447js_/https://fortmp.samuel.wtf/assets/script.js
  let window = ("window");
  let document = ("document");
  let location = ("location");

  var current_token = null;
  function checkform(form) {
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute("required")) {
        if (inputs[i].value == "") {
          alert("Please fill all required fields");
          return false;
        }
      }
    }
    return true;
  }
  function getUrlVars() {
    var vars = [],
      hash;
    var hashes = window.location.href
      .slice(window.location.href.indexOf("?") + 1)
      .split("&");
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split("=");
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }
  function setToken(token) {
    current_token = token;
    return;
  }
  function register(form) {
    console.log("register got loaded!");
    checkform(form);
    let query = getUrlVars();
    let code = query["code"] ? query["code"] : undefined;
    $.ajax({
      url: "/api/accountSystem/signup",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        email: document.getElementById("email").value,
        displayName: document.getElementById("ingameUsername").value,
        password: document.getElementById("password").value,
        discordCode: code,
        token: current_token,
      }),
      success: (res) => {
        window.location = "/api/success";
      },
      error: (res) => {
        alert(
          `${
            res.responseJSON.errorMessage
              ? res.responseJSON.errorMessage
              : "Couldn't register!"
          }`
        );
        location.reload();
      },
    });
    return false;
  }
}
