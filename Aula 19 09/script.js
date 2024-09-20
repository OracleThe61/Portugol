function ex1008(){
let codigonario=document.getElementById("codigofun").value
let horas=document.getElementById("horasTrabalhadas").value
let salarios=document.getElementById("salario").value
let salarioFinal=0
salarioFinal=salarios*horas
alert("Funcionário N°: "+codigonario+". Seu salário é: "+salarioFinal.toFixed(2))

}
function ex1009(){
let nomenario=document.getElementById("nomefun").value
let salario=document.getElementById("salario2").value
let comissao=document.getElementById("comissao").value
let salarioFinal=0

salarioFinal=salario+(comissao*0.15)

alert(nomenario+"O seu salário será: R$:"+salarioFinal.toFixed(2))
}

function ex1016(){

    let distancia=Number(prompt("Diga a distancia que os carros percorrerão: "))
    let carroX=0
    let carroY=0
    let tempo=0
    while(carroY-carroX<distancia){
        carroX+=1
        carroY+=1.5
        tempo++
    }
    alert("Vai levar "+tempo+" minutos.")
}
function ex1038(){
    let numeroproduto=document.getElementById("produto").value
    let quantidade=document.getElementById("quantidade").value
    let valor, precoTotal
    if(numeroproduto=1) {
                valor=4.00
    }else if(numeroproduto=2){
                valor=4.50
    }else if(numeroproduto=3){    
                valor=5.00
    }else if(numeroproduto=4){
                valor=2.00
    }else if(numeroproduto=5){
                valor=1.50
    }else{
        alert("Pedido não encontrado")
    }

    precoTotal=valor*quantidade

    alert("O valor da compra é: R$:"+precoTotal.toFixed(2))
}