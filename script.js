function validation() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var mail = document.getElementById("email");
  var text = document.getElementById("text");
  var submit = document.getElementById("button");
  var card = document.getElementById("card");
  var sucessCard = document.getElementById("wrapper");
  var submitted = false;

  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (!email.match(pattern)) {
      mail.classList.add("error");
      text.classList.remove("hidden");

      submitted = false;
    } else {
      card.classList.add("hidden");
      sucessCard.classList.remove("hidden");
    }
  });
  if (email.match("")) {
    mail.classList.remove("error");
    text.classList.add("hidden");
  }
}
var span = document.getElementById("email-msg");

function ch() {
  span.textContent = email.value;
}
