function deUmAN(){
    let n=Number(prompt("Insira seu número"))
    let start=1
    while(start<=n){
        alert(start)
        start++
    }
}
function somar(){
    let n1=Number(prompt("Insira o número inicial!"))
    let nTotal=0
    while (n1!=0){
        nTotal+=n1
        n1=Number(prompt("Insira o número inicial!"))

    }
    alert(nTotal)
}
function media(){
    let media=0
    let numCad=1
    let qtdNum=Number(prompt("Insira a quantidade de numeros da média"))
    for(numCad; numCad <=qtdNum; numCad++){
        let numero=Number(prompt("Insira o número"))
        media+=numero
    }
    media/=qtdNum
    alert("A média é: "+media)

}
function fatorial(){
    let n=Number(prompt("Insira o número para a fatoração"))
    let res = n
    let fatorial= res -1
    for(let i=fatorial ; i>=1 ;i--){
        res*=i
        
    }
    alert("O resultado é: "+res)

}
function tabuada(){
    let n=Number(prompt("Insira um número!"))
    for(let multiplicador=0; multiplicador<=10;multiplicador++ ){
        res=n*multiplicador
        alert(res)
        
    }
}
function pares(){
    let n=Number(prompt("Digite um número"))
    for(let seq=0; seq<=n; seq++){
        if (seq %2==0){
            alert(seq)
        }
    }
}
function passos(){
    let numCad=Number(prompt("Defina o número"))
    let passos=Number(prompt("Defina de quanto em quanto vai andar"))
    // let n=1
    // while (n<=numCad){
    //     alert (n)
    //     n+=passos
    // }
    for(let n=1; n<=numCad; n+=passos){
        alert(n)
    }
}
function impares(){
    let n=Number(prompt("Digite um número"))
    for(let seq=0; seq<=n; seq++){
        if (seq %2!=0){
            alert(seq)
        }
    }
}
function multiplo(){
    let n=Number(prompt("Digite o multiplo"))
    let n2=Number(prompt("Digite o multiplicador"))
    if(n%n2==0){
        alert("SIM, dá para dividir "+n+" por "+n2+".")
    }else{
        alert("NÃO,não dá para dividir "+n+" por "+n2+".")
    }
}
function primos(){
let n=Number(prompt("Digite um número"))
let divisores=0
for(let ant=1; ant<=n; ant++){
    if (n%ant==0){
        divisores++
    }
}
if(divisores==2){
    alert("Sim, é primo")
}else{
    alert("Não, não é primo")
}

}