const fuleragem = document.getElementById('fuleragem')
console.log(fuleragem)

fuleragem.addEventListener('click', TesteTestado)
console.log(event)

function TesteTestado() {
    document.body.innerHTML += `
    <div class="teste"> Parabens Otario vc é otario</div>
`
}