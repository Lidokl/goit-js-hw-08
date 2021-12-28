import throttle from 'lodash.throttle';

                        //  2 варіант

// const feedbackForm = document.querySelector(".feedback-form");
// const STORAGE_KEY = 'feedback-form-state';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onTextareaInput, 500));

// //   populateTextarea();


// //  * - Останавливаем поведение по умолчанию
// //  * - Убираем сообщение из хранилища
// //  * - Очищаем форму

// function onFormSubmit(evt) {
//   evt.preventDefault();

//   console.log('Отправляем форму');

//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// /*
//  * - Получаем значение поля
//  * - Сохраняем его в хранилище
//  * - Можно добавить throttle
//  */
// function onTextareaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// /*
//  * - Получаем значение из хранилища
//  * - Если там что-то было, обновляем DOM
//  */
// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//       console.log(savedMessage);
//      refs.textarea.value = savedMessage;
//   }
// }

// // Домой
// // сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   console.log(e.target.name);
//    console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });



const feedbackForm = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// Получение значений полей и сохранение их в хранилище
// Добавление слушателя на форму и обновление хранилища не чаще, чем раз в 500 миллисекунд
const onFormInput = () => {
    const formData = new FormData(feedbackForm);
    let userForm = {};
    formData.forEach((value, name) => userForm[name] = value.trim());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userForm));
};

feedbackForm.addEventListener("input", throttle(onFormInput, 500));


// Получение данных из локального хранилище при перезагрузке страницы
const onPopulateForm = () => {
    if (localStorage.getItem(STORAGE_KEY)) {
        Object.entries(JSON.parse(localStorage.getItem(STORAGE_KEY))).forEach(([name, value]) => feedbackForm.elements[name].value = value); // `${name}: ${value}`; `${name}: value`; `${name} = value`
    }
};

onPopulateForm();

/*
Сабмит формы:
- Останавливаем поведение по умолчанию
- Очищаем интерфейс(форму от значений)
- Убираем отправленные данные из локального хранилища
*/
const onFormSubmit = event => {
    event.preventDefault();
    if (feedbackForm.elements.email.value && feedbackForm.elements.message.value !== "") {
        console.log('Отправляем форму с данными: ', JSON.parse(localStorage.getItem(STORAGE_KEY)));
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    };
};
  
feedbackForm.addEventListener("submit", onFormSubmit);




                            // 3 варіант

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// let formData = {};

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   input: document.querySelector('.feedback-form input'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);

// refs.form.addEventListener('input', throttle(onFormInput, 500));

// populateFormData();

// function onFormInput(event) {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(event) {
//   event.preventDefault();

//   const submitData = localStorage.getItem(STORAGE_KEY);
//   const parsedSubmitData = JSON.parse(submitData);
//   if (parsedSubmitData) {
//     console.log(parsedSubmitData);
//   }

//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function populateFormData() {
//   const saveData = localStorage.getItem(STORAGE_KEY);
//   const parsedSaveData = JSON.parse(saveData);

//   if (parsedSaveData) {
//     refs.input.value = parsedSaveData.email;
//     refs.textarea.value = parsedSaveData.message;
//   }
// }