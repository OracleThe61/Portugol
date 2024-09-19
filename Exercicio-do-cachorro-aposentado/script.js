function calcularIdade(){
    let idade = document.getElementById("idadeDog").value
    let idadeFinal = idade * 7
    if (idadeFinal >=65){
        document.getElementById("idadeRes").innerHTML="A idade do seu cachorrinho é: "+idadeFinal+", já pode se aposentar"
    }else {
        document.getElementById("idadeRes").innerHTML="A idade do seu cachorrinho é: "+idadeFinal+", ainda tá bem novinho"
    }
}