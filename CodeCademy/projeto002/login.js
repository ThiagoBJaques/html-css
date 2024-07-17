const mensagem = document.getElementById('mensagem')
const param = new URLSearchParams(window.location.search)
const user = param.get('user')
const senha = param.get('senha')
if (user.toLocaleLowerCase() === 'codecademy' && senha === 'amoprogamar') {
    mensagem.innerHTML = 'Nós também amamos programar!'
} else if (user || senha) {
    mensagem.innerHTML = 'Adicione alguma validação do lado do cliente!'
} else {
    mensagem.innerHTML = 'Viva a validação do lado do cliente!'
}