programa {
  funcao inicio() {
    inteiro idade
    escreva("Quantos anos voc� tem?\n")
    leia(idade)
    se(idade>=18){
      escreva("Voc� � adulto")
    }senao{
      se(idade>=12){
        escreva("Voc� � adolescente")
      }senao{
        escreva("Voc� � uma CREON�A")
      }
    }
  }
}
