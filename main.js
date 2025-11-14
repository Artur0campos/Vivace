let nameInput = document.getElementById('input-name')
let emailInput = document.getElementById('input-email')
let numInput = document.getElementById('input-numero')

let btn = document.getElementById('inscricao-btn')
const msg = document.getElementById('mensagem')

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


btn.addEventListener('click',function(event){
    const name = nameInput.value;
    const email = emailInput.value;
    const num = numInput.value;
    if(validateName(name) && validateEmail(email) && validateTel(num)){
        msg.innerText = "Inscrição feita com sucesso"
        localStorage.setItem("Name", name) 
        localStorage.setItem("email", email) 
        localStorage.setItem("Tel", num) 
        event.preventDefault();
        
    }else {
        msg.innerText = "";
    }
})