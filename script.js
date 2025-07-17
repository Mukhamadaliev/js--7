// ~ white va black rejimlarni almashtirish
document.querySelector(".btn-black").addEventListener("click", () => {
  document.body.classList.add("dark-mode");
});

document.querySelector(".btn-white").addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
});

// ? Saqlangan ma'lumotlar
let savedName = "ibrohim";
let savedNumber = "12345";
let savedPassword = "1234";

// Form elementlari
let nameInput = document.querySelector(".name");
let numberInput = document.querySelector(".number");
let passwordInput = document.querySelector(".password");
let startBtn = document.querySelector(".start_btn");
let loginContainer = document.getElementById("login-container");
let mainContent = document.getElementById("main-content");

// ! Modal elementlari
let loginModal = document.getElementById("loginModal");
let openModalBtn = document.getElementById("openModal");
let closeModalBtn = loginModal.querySelector(".closeBtn");

// ^ Modalni ochish
openModalBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
  // Formani to'ldirish
  let inputs = loginModal.querySelectorAll("input");
  inputs[0].value = savedName;
  inputs[1].value = savedNumber;
  inputs[2].value = savedPassword;
});

// ^ Modalni yopish
closeModalBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// & Kirish tugmasi bosilganda
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

// ! Login modal formasi
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let inputs = this.querySelectorAll("input");
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
  loginModal.style.display = "none";
});

// ! Modalni tashqariga bosganda yopish
window.addEventListener("click", function (e) {
  if (e.target === loginModal) loginModal.style.display = "none";
});

// ! Form va natija modallari
let modalEnter = document.getElementById("modalEnterComment");
let resultModal = document.getElementById("resultModal");
let kirishBtn = document.getElementById("kirishBtn");
let closeFormBtn = modalEnter.querySelector(".closeBtn");
let closeResultBtn = resultModal.querySelector(".closeBtn");

kirishBtn.addEventListener("click", () => {
  modalEnter.style.display = "block";
});

closeFormBtn.addEventListener("click", () => {
  modalEnter.style.display = "none";
});

closeResultBtn.addEventListener("click", () => {
  resultModal.style.display = "none";
});

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("resultName").textContent = document.getElementById("nameInput").value;
  document.getElementById("resultNumber").textContent = document.getElementById("numberInput").value;
  document.getElementById("resultComment").textContent = document.getElementById("commentInput").value;

  modalEnter.style.display = "none";
  resultModal.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target === modalEnter) modalEnter.style.display = "none";
  if (event.target === resultModal) resultModal.style.display = "none";
});