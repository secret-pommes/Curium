console.log("Account-System-V2 is loaded!");

function createAccount() {
  $.ajax({
    type: "POST",
    url: "/api/accountSystem/createNewAccount",
    data: {
      displayName: document.getElementById("ingameUsername").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    },
    success: (res) => {
      window.location("/accountCreated");
    },
  });
}
