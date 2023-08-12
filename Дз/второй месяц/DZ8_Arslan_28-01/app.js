
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const users = [
    new User("Arslan", "2004"),

];

const loginButton = document.querySelector(".button_login");

loginButton.addEventListener("click", loginUser);

function loginUser() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    
    const foundUser = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (foundUser) {
        alert(`Добро пожаловать, ${foundUser.username}!`);
    } else {
        alert("Неуспешная авторизация. Проверьте логин и пароль.");
    }

    


}


