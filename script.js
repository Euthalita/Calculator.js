let tela = document.getElementById('tela')
        
function tele(num){
    tela.innerHTML += num
}

function limpar(){
     tela.innerHTML = " "
}

function back(){
    if (tela.textContent){
        let telaresul = document.getElementById('tela').innerHTML
        tela.innerHTML =telaresul.substring(0, telaresul.length -1)
    }
}

function resultado(){
    if (tela.textContent != 'Erro'){
        document.getElementById('tela').innerHTML = eval(tela.innerHTML)
    }if (tela.textContent == 'Infinity') {
        tela.innerHTML = '0'
    }
}