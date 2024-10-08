let convidados=[];

function add(){
    let nome=document.getElementById("inserir").value;
    let existe = false;
    for(let item of convidados){
        if (item.toLowerCase()==nome.toLowerCase()){
        existe = true;
        break;
        }
    }
    if(existe == false){
        convidados.push(nome.toUpperCase());
        document.getElementById("lista").innerHTML=convidados;
    }else{
        alert("Esse nome já está na lista")
    }
}
function remove(){
    let nome=document.getElementById("inserir").value;
    let posicao = -1;
    for (let item of convidados){
        if (item.toLowerCase()==nome.toLowerCase()){
            posicao=convidados.indexOf(item);
            break;
        }

    }
    if (posicao==-1){
        alert("A pessoa chamada: "+nome+" não se encontra na lista")
    } else {
        convidados.splice(posicao,1);
        document.getElementById("lista").innerHTML=convidados;
        
    }
}
function edit(){
    let nome = document.getElementById("inserir").value
    for (let pos = 0; pos < convidados.length; pos++) {
        if (convidados[pos].toLowerCase()==nome.toLowerCase()) {
        convidados[pos]=prompt("digite a nova forma do nome que você quer editar").toUpperCase()
            break;
        }
        
    }
    document.getElementById("lista").innerHTML=convidados;
}

