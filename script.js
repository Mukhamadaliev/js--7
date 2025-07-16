document.querySelector(".btn-black").addEventListener("click", () => {
  document.body.classList.add("dark-mode");
});

document.querySelector(".btn-white").addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
});

let savedName = "ibrohim";
let savedNumber = "12345";
let savedPassword = "1234";

// * Form elements
let nameInput = document.querySelector(".name");
let numberInput = document.querySelector(".number");
let passwordInput = document.querySelector(".password");
let startBtn = document.querySelector(".start_btn");
let loginContainer = document.getElementById("login-container");
let mainContent = document.getElementById("main-content");

// ^ Modal 1: Password 
let modal1 = document.getElementById("myModal");
let openModalBtn = document.getElementById("openModal");
let closeModal1Btn = modal1.querySelector(".closeBtn");

openModalBtn.addEventListener("click", () => {
  modal1.style.display = "flex";
});

closeModal1Btn.addEventListener("click", () => {
  modal1.style.display = "none";
});

// & Modal 2: Login
let modal2 = document.getElementById("modalEnter");
let closeModal2Btn = modal2.querySelector(".closeBtn");

closeModal2Btn.addEventListener("click", () => {
  modal2.style.display = "none";
});

// ~ Kirish modal
let kirishModal = document.getElementById("kirishModal");
let kirishBtn = document.getElementById("kirishBtn");
let closeKirishModal = document.getElementById("closeKirishModal");

kirishBtn.addEventListener("click", () => {
  kirishModal.style.display = "flex";
});

closeKirishModal.addEventListener("click", () => {
  kirishModal.style.display = "none";
});

// ! Enter button click 
startBtn.addEventListener("click", () => {
  let name = nameInput.value.trim();
  let number = numberInput.value.trim();
  let password = passwordInput.value.trim();

  if (!name || !number || !password) {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }

  if (name === savedName && number === savedNumber && password === savedPassword) {
    loginContainer.style.display = "none";
    mainContent.style.display = "flex";
  } else {
    alert("Ma'lumot noto'g'ri!");
  }
});

// ?  Modal 1: Password change form
modal1.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let inputs = modal1.querySelectorAll("input");
  let newName = inputs[0].value.trim();
  let newNumber = inputs[1].value.trim();
  let newPassword = inputs[2].value.trim();

  if (!newName || !newNumber || !newPassword) {
    alert("Hamma maydonlarni to'ldiring!");
    return;
  }

  savedName = newName;
  savedNumber = newNumber;
  savedPassword = newPassword;

  alert("Ma'lumotlar o'zgartirildi!");
  modal1.style.display = "none";
});

// ? Modal 2: Login form
modal2.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Saytga muvaffaqiyatli kirdingiz!");
  modal2.style.display = "none";
});

// ? Close modals when clicking outside
window.addEventListener("click", function (e) {
  if (e.target === modal1) modal1.style.display = "none";
  if (e.target === modal2) modal2.style.display = "none";
  if (e.target === kirishModal) kirishModal.style.display = "none";
});