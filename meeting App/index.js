// /finding the element
const form = document.querySelector("form");

const name = document.querySelector("div #name");
const number = document.querySelector("div #number");
const date = document.querySelector("div #date");
const timeslot = document.querySelector("div #timeslot");





form.addEventListener('submit', formHandler);

function formHandler(e) {
    e.preventDefault();
    // console.log(name.value);
    // console.log(number.value);
    // console.log(date.value);
    // console.log(timeslot.value);

    //object
    const userInfo = {
        // form: form.value,
        name: name.value,
        number: number.value,
        date: date.value,
        timeslot: timeslot.value
    }


    console.log(userInfo);

    name.value = "";
    number.value = "";
    date.value = "";
    timeslot.value = "";

    window.localStorage.setItem("user data", JSON.stringify(userInfo));
}