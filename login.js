let nameLogin = document.getElementById('input-name-login')
let emailLogin = document.getElementById('input-email-login')
let numLogin = document.getElementById('input-numero-login')
let confirmar = document.getElementById('login-btn')

function inscricao(){
    window.location.href = "registro.html"
}

function quemSomos(){
    window.location.href = "index.html#quem-somos"
}

function aulas(){
    window.location.href = "index.html#aulas"
}

function planos(){
    window.location.href = "index.html#planos"
}

function validateName(name){
    if(name.trim() === ""){
        window.alert("Digite um Nome")
        return false
    }
    else{
        return true
    }
}

function validateEmail(email){
    if(email.trim().length === 0){
        window.alert("Email vazio")
        return false
    }
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(regex.test(email.trim())){
        return true
    }
    window.alert("Email inválido");
    return false

}

function validateTel(telefone){
    if(telefone.trim().length === 0){
        window.alert("Número vazio")
        return false
    }
    const digitos = telefone.replace(/\D/g, '')
    const regex = /^\d{8,11}$/
    if(regex.test(digitos)){
        return true
    }
     window.alert("Número de telefone inválido (deve ter 8 a 11 dígitos)");
    return false;
}

confirmar.addEventListener('click', function(event){
    event.preventDefault()

    const nameDigitado = nameLogin.value;
    const emailDigitado = emailLogin.value;
    const numDigitado = numLogin.value;

    if (!validateName(nameDigitado) || !validateEmail(emailDigitado) || !validateTel(numDigitado)) {
       window.alert("Por favor Preencha os dados corretamente")
    }

    const nameSalvo = localStorage.getItem("Name");
    const emailSalvo = localStorage.getItem("email");
    const numSalvo = localStorage.getItem("Tel");
    
    if(nameDigitado === nameSalvo && emailDigitado === emailSalvo && numDigitado === numSalvo){
        window.alert("Acesso concluído!")
        window.location.href = "content.html"
    }

    else {
        window.alert("Escolha um dos planos e faça o cadastro")
    }
})
