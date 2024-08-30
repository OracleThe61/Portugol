programa {
  funcao inicio() {
    inteiro idade
    escreva("Quantos anos você tem?\n")
    leia(idade)
    se(idade>=18){
      escreva("Você é adulto")
    }senao{
      se(idade>=12){
        escreva("Você é adolescente")
      }senao{
        escreva("Você é uma CREONÇA")
      }
    }
  }
}
