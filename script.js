// ^ white va black
document.querySelector(".btn-black").onclick = () => {
  document.body.classList.add("dark-mode");
};
document.querySelector(".btn-white").onclick = () => {
  document.body.classList.remove("dark-mode");
};

//? Modal 1 (Login va Parol)
let modal1 = document.getElementById("myModal");
let openModalBtn = document.getElementById("openModal");
let closeModal1Btn = modal1.querySelector(".closeBtn");

openModalBtn.onclick = () => {
  modal1.style.display = "flex";
};
closeModal1Btn.onclick = () => {
  modal1.style.display = "none";
};
window.onclick = (e) => {
  if (e.target === modal1) modal1.style.display = "none";
};

// ? Modal 2 (Kirish)
let modal2 = document.getElementById("modalEnter");
let openModal2Btn = document.querySelector(".open-modal-enter");
let closeModal2Btn = modal2.querySelector(".closeBtn");

openModal2Btn.onclick = () => {
  modal2.style.display = "flex";
};
closeModal2Btn.onclick = () => {
  modal2.style.display = "none";
};
window.onclick = (e) => {
  if (e.target === modal2) modal2.style.display = "none";
};

//? Kirish modal form
modal2.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Kirish muvaffaqiyatli!");
  modal2.style.display = "none";
});

// Email 
document.getElementById("mainForm").addEventListener("submit", function (e) {
  let email = document.getElementById("emailInput").value.trim().toLowerCase();
  let errorMessage = document.getElementById("errorMessage");
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    e.preventDefault();
    errorMessage.textContent = "Iltimos, to'g'ri email kiriting: example@gmail.com";
  } else {
    errorMessage.textContent = "";
  }
});
