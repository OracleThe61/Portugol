function calcularIMC(){
    alert("Vamos Calcular!")
    let peso = document.getElementById("inpPeso").value
    console.log(peso);
    let altura = document.getElementById("inpAlt").value
    console.log(altura);
    let imc = peso / (altura*altura)
    // let imc = peso / (altura*altura)
    // document.getElementById("inpRes").value = "o seu IMC é: "+imc
    document.getElementById("pRes").innerHTML = "o seu IMC é: "+imc.toFixed(2)
}
function calcularIdade(){
    let idade = document.getElementById("idadeCao").value
    let idadeFinal = idade * 7
    if (idadeFinal >=65){
        document.getElementById("idadeRes").innerHTML="A idade do seu cachorrinho é: "+idadeFinal+", já pode se aposentar"
    }else {
        document.getElementById("idadeRes").innerHTML="A idade do seu cachorrinho é: "+idadeFinal+", ainda tá bem novinho"
    }
}