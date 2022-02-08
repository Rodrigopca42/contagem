function contar(){
var ini = document.querySelector('#txtn1')
var fim = document.querySelector('#txtn2')
var passo = document.querySelector('#txtn3')
var res = document.querySelector('#res')

if (ini.value.length == 0 || fim.value.length == 0 ||passo.value.length == 0 ){
    res.innerHTML = `Impossível contar!`
  
    // window.alert(`[ERRO] Faltam dados!`)
} else{
    res.innerHTML = `Contando: <br>`
    var ini = Number(ini.value)
    var fim = Number(fim.value)
    var passo = Number(passo.value)
    
    if(passo <= 0){
        window.alert('Passo inválido! Considerando INTERVALO = 1')
        passo = 1
    }
    if(ini < fim){
        for(let c = ini; c <= fim; c += passo){
            res.innerHTML += ` ${c} \u{1F916}	`
        }
    }else{
        for(let c = ini; c >= fim; c -= passo){
            res.innerHTML += ` ${c} \u{1F47B} `
        }
    }
    res.innerHTML +=  `\u{1F44A}`
}
}