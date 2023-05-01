/*
 * Curium Account Creation System
 * 01.05.2023 | Beta | Unstable
 * some code inspired at:
 * https://github.com/Beat-YT/backend/blob/master/public/js/signup.js
 */

function start(){
    $("#errorClass").hide();
}

$(document).ready(function () {
  const form = $("#createAccountForm");
  form.on("submit", (error) => {
    error.preventDefault();
    $.ajax({
      type: "POST",
      url: "/api/accountSystem/signup",
      data: {
        user: $("#ingameUsername").val(),
        email: $("#email").val(),
        password: $("#password").val(),
      },
      success: (data) => {
        document.location.href = "/accountCreated";
      },
      error: (data) => {
        switch (JSON.parse(data.responseText).errorCode) {
          case "dev.account_system.signup.invailed_fields":
            $("notice").text("Hey, please enter vailed informations.");
        }
      },
    });
  });
});
