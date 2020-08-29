const editButton = document.querySelector('.button__edit');
const closeButton = document.querySelector('.modal__close-button');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputName = document.querySelector('.modal__form-input_type_name');
  const inputAboutMe = document.querySelector('.modal__form-input_type_about-me');

  const profileName = document.querySelector('.profile__heading');
  const profileAboutMe = document.querySelector('.profile__text');

  profileName.textContent = inputName.value;
  profileAboutMe.textContent - inputAboutMe.value;

  toggleModal();
})

function toggleModal() {
  modal.classList.toggle('modal_is-open');
}

editButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click', () => {
  
  document.querySelector('.modal__form-input_type_name').value = "";
  
  document.querySelector('.modal__form-input_type_about-me').value = "";
  
})


  
