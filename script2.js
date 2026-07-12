const passwordbox = document.getElementById('password-generator');
const button = document.getElementById('generate-btn');

button.addEventListener('click', generatepassword);
function generatepassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password+=charset[randomIndex];

    }
    passwordbox.textContent = password;
}