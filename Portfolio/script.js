document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const messageStatus = document.getElementById("messageStatus");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    simulateEmailSend(name, email, message);
  });

  function simulateEmailSend(name, email, message) {
    messageStatus.innerHTML = "Message sent successfully!";
    messageStatus.style.color = "green";
    alert("ok");
    clearForm();
  }

  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
});
