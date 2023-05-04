// v2.2.1
console.log("Account-System-V2 is loaded!");

var account_displayName;
var account_email;
var account_password;

account_displayName = document.getElementById("ingameUsername").value;
account_email = document.getElementById("email").value;
account_password = document.getElementById("password").value;


function createAccount() {
  if (typeof account_displayName !== "undefined") {
    window.alert(
      "ERROR: Please enter all information that is needed to register."
    );
  };
  if (typeof account_email !== "undefined") {
    window.alert(
      "ERROR: Please enter all information that is needed to register."
    );
  };
  if (typeof account_password !== "undefined") {
    window.alert(
      "ERROR: Please enter all information that is needed to register."
    );
  };
  if (account_displayName && account_email && account_password) {
    $.ajax({
      type: "POST",
      url: "/api/accountSystem/createNewAccount",
      data: {
        displayName: account_displayName,
        email: account_email,
        password: account_password,
      },
      success: (res) => {
        window.location.href("/accountCreated");
      },
      error: (res) => {
        alert(
          `${
            res.responseJSON.errorMessage
              ? res.responseJSON.errorMessage
              : "ERROR: Please make sure to enter all information that is needed to register!"
          }`
        );
        location.reload();
      },
    });
  };
};
