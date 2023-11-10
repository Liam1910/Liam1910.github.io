const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const name_su = document.getElementById('name-su');
const email_su = document.getElementById('email-su');
const passwd_su = document.getElementById('passwd-su');
const email_si = document.getElementById('email-si');
const passwd_si = document.getElementById('passwd-si');

function sign_up() {
    const file_contents = `email:${email_su.value};passwd:${passwd_su.value};name:${name_su.value};\n`;
    
}

function sign_in() {
    alert("SIGNIN");
}