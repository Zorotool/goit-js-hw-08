import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
let formData = {};
const refs = {
    form: document.querySelector('form'),
    emailInput: document.querySelector ('input'),
    textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateTextArea()

function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
};

function onFormSubmit(event) {
    event.preventDefault();

    const formElement = event.currentTarget.elements;
    const email = formElement.email.value;
    const message = formElement.message.value;
    const Data = {
        email,
        message,
    }
    console.log(Data);
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
    formData = {};
}

function populateTextArea() {
    const textData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(textData);

        if (parsedData && parsedData.email) {
            refs.form.email.value = parsedData.email;
        };
        if (parsedData && parsedData.message) {
            refs.form.message.value = parsedData.message;
        }
}

// const savedData = localStorage.getItem("feedback-form-state");
// const parsedData = JSON.parse(savedData);

// if (parsedData) {
//     form.email.value = parsedData.emailValue;
//     form.message.value = parsedData.messageValue;
// }

// import throttle from "lodash.throttle";

// const form = document.querySelector('form');
// form.addEventListener('submit', handSubmit);
// form.addEventListener('input', handlInput);

// function handlInput(event) {
//     const formElement = event.currentTarget.elements;
//     const emailValue = formElement.email.value;
//     const messageValue = formElement.message.value;
//     const formData = {
//         emailValue,
//         messageValue,
//     }
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// }

// function handSubmit(event) {
//     event.preventDefault();
//     const formElement = event.currentTarget.elements;
//     const emailValue = formElement.email.value;
//     const messageValue = formElement.message.value;
//     const formData = {
//         emailValue,
//         messageValue,
//     }
//     console.log(formData);
//     event.currentTarget.reset();
//     localStorage.removeItem("feedback-form-state");
// }

// const savedData = localStorage.getItem("feedback-form-state");
// const parsedData = JSON.parse(savedData);

// if (parsedData) {
//     form.email.value = parsedData.emailValue;
//     form.message.value = parsedData.messageValue;
// }


// function onFormSubmit(event) {
//     event.preventDefault();
//     formData[event.target.name] = event.target.value;
//     console.log(formData);
//     localStorage.removeItem(STORAGE_KEY);
//     event.currentTarget.reset();
    
// };
