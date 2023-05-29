const phone = document.getElementById("phone-number")
const password = document.getElementById("password")

document.querySelector(".loginBtn").addEventListener('click',(e) => {
  e.preventDefault();
        const newValue = {
          id:Date.now(),
          phonenumber: phone.value,
          password: password.value,
        }
        phone.value ='';
        password.value ='';

  fetch("http://192.46.209.63:81/api/auth/login-with-phone", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newValue),
  })
  .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)))
    .then((response) => console.log(newValue));
 })