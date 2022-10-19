const scriptURL =
  "https://script.google.com/macros/s/AKfycbwlewHjaAOh8hL6Njz8OxxFB3dK8P4023XwNd_axQ2bpg61i5ipns1mGmmo5FwYG8e0Eg/exec";
const form = document.forms["submit-to-google-sheet"];

const btnSend = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

const nameValue = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //ketika send diklik, tampilkan tombol loading, hilangkan tombol send
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");

  //mengirim data ke form spreadsheet
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //ketika berhasil, tampilkan tombol send, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");

      //tampilkan alert ketika berhasil
      myAlert.classList.toggle("d-none");
      //reset formnya
      form.reset();

      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
