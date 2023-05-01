console.log("Account-System-V2 is loaded!");

function createAccount() {
  $.ajax({
    type: "POST",
    url: "/api/accountSystem/createNewAccount",
    data: {
      displayName: document.getElementById("ingameUsername").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      //displayName: "dev.fallback.accountIds",
      //email: "dev.fallback.accountIds",
      //password: "dev.fallback.accountIds",
    },
    success: (data) => {
      document.location.href("/createdAccount");
    },
  });
  // add fallback and errors prevention
}
