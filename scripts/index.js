const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".modal__close-button");
const modal = document.querySelector(".modal");
const form = document.querySelector(".modal__form");
const inputName = form.querySelector(".modal__form-input_type_name");
const inputAboutMe = form.querySelector(".modal__form-input_type_about-me");
const profileName = document.querySelector(".profile__heading");
const profileAboutMe = document.querySelector(".profile__text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileAboutMe.textContent = inputAboutMe.value;
  // = is
  // == is equal
  // === is exactly equal
  toggleModal();
});

function toggleModal() {
  modal.classList.toggle("modal_is-open"); // add, remove, toggle
}

editButton.addEventListener("click", toggleModal);

closeButton.addEventListener("click", toggleModal);

/*closeButton.addEventListener('click', () => {
  
  inputName.value = "";
  
   inputAboutMe.value = "";
  
})*/
