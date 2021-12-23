const throttle = require('lodash.throttle');
const formREf = document.querySelector('.feedback-form');
const emailREf = formREf.querySelector('input');
const textREf = formREf.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
// ------------------------------------------------
returnSevedMessage();
// ------------------------------------------------
function saveInputData(e) {
  let feedbackFormState = {};
  feedbackFormState[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormState));
}
formREf.addEventListener('input', throttle(saveInputData, 500));
// ------------------------------------------------
formREf.addEventListener('submit', function (e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
});
// ------------------------------------------------
function returnSevedMessage() {
  let parstLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parstLocalStorage) {
    parstLocalStorage.email ? (emailREf.value = parstLocalStorage.email) : (emailREf.value = ' ');
    parstLocalStorage.message ? (textREf.value = parstLocalStorage.message) : (textREf.value = ' ');
  }
}
