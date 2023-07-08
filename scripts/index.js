let myName = localStorage.getItem('name') || 'null';
let greeting = document.querySelector('.greet');
let userInput = document.querySelector('.name');


function updateInfo() {
        if (myName === 'null') {
                userInput.addEventListener("keydown", (e) => {
                        if (e.key === 'Enter') {
                                localStorage.setItem('name', userInput.value)
                                userInput.remove();
                        }
                });
        }
        else {
                userInput.remove();
        }
}

updateInfo();

setInterval(() => {
        let myName = localStorage.getItem('name') || 'null';
        
        if (myName === 'null') {
                greeting.innerHTML = ' ';
        }
        else {
                greeting.innerHTML = `${myName}`;
        }
}, 1000);

let settings = document.querySelector('.js-click');
let changeName = document.getElementById("change-name");

settings.addEventListener("click", () => {
        changeName.classList.remove('hide');
        setTimeout(() => {
                changeName.classList.add('hide');
        }, 10000);
        changeName.addEventListener("click", () => {
                localStorage.removeItem('name');
                changeName.classList.add('hide');
                window.location.reload();
        });
});