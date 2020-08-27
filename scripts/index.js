const editButton = document.querySelector('.button__edit');
const closeButton = document.querySelector('.modal__close-button');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');
const page = document.querySelector('.page');


function toggleModal() {
  //page.classList.toggle('shadow');
  modal.classList.toggle('modal_is-open');
}

editButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click', () => {
  
  document.querySelector('.modal__form-input_type_name').value = "";
  
  document.querySelector('.modal__form-input_type_about-me').value = "";
  
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputName = document.querySelector('.modal__form-input_type_name');
  const inputAboutMe = document.querySelector('.modal__form-input_type_about-me');

  const profileName = document.querySelector('.profile__heading-text_type_name');
  const profileAboutMe = document.querySelector('.profile__text_type_name');

  profileName.textContent = inputName.value;
  profileAboutMe.textContent - inputAboutMe.value;

  toggleModal();
})  
  