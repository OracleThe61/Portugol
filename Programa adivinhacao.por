programa {
  funcao inicio() {
    inteiro n1,n2
    escreva("Diga para mim dois numeros e eu direi qual � o maior.\n diga o primeiro n�mero\n")
    leia(n1)
    escreva("Agora diga o segundo n�mero\n")
    leia(n2)
    escreva("�timo, agora tentarei adivinhar!\n")
    se(n1>n2){
      escreva("O primeiro � maior que o segundo!")
    }senao se(n2>n1){
      escreva("O segundo � maior que o primeiro!")
    }senao se(n1==n2){
      escreva("Os dois s�o iguais")
    }
  }
}
