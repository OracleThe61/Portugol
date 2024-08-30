programa {
  funcao inicio() {
    inteiro n1,n2
    escreva("Diga para mim dois numeros e eu direi qual é o maior.\n diga o primeiro número\n")
    leia(n1)
    escreva("Agora diga o segundo número\n")
    leia(n2)
    escreva("Ótimo, agora tentarei adivinhar!\n")
    se(n1>n2){
      escreva("O primeiro é maior que o segundo!")
    }senao se(n2>n1){
      escreva("O segundo é maior que o primeiro!")
    }senao se(n1==n2){
      escreva("Os dois são iguais")
    }
  }
}
