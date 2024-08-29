programa {
  funcao inicio() {
    real r,t,opcao
    escreva("Que conversão deseja fazer?\n Digite 1 para: de Celsius para Fahreinheit\n Digite 2 para: de Fahrenheit para Celsuius\n Digite 3 para: de Celsius para Kelvin\n Digite 4 para: de Kelvin para Celsius\n Digite 5 para: de Fahrenheit para Kelvin\n Digite 6 para: de Kelvin para Fahreinheit\n")
    leia(opcao)
    escolha(opcao){
    caso 1:
      escreva("Digite a temperatura em Celsius\n")
      leia(t)
      r=(t*1.8)+32
      escreva("O resultado da conversão é:"+math.arredondar(r,2)+"°")
    pare
    caso 2:
      escreva("Digite a temperatura em Fahrenheit\n")
      leia(t)
      r=(t-32)*(5/9)
      escreva("O resultado da conversão é:"+math.arredondar(r,2)+"°")
    pare
    caso 3:
      escreva("Digite a temperatura em Celsius\n")
      leia(t)
      r=t+273.15
      escreva("O resultado da conversão é:"+math.arredondar(r,2)+"°")
    pare
    caso 4:
      escreva("Digite a temperatura em Kelvin\n")
      leia(t)
      r=t-273.15
      escreva("O resultado da conversão é:"+math.arredondar(r,2)+"°")
    pare
    caso 5:
      escreva("Digite a temperatura em Fahrenheit\n")
      leia(t)
      r= (t- 32) * (5/9) + 273.15
      escreva("O resultado da conversão é:"+math.arredondar(r,2)+"°")
    pare
    caso 6:
      escreva("Digite a temperatura em Kelvin\n")
      leia(t)
      r=(t- 273.15) * (9/5) + 32
      escreva("O resultado da conversão é:"+math.arredondar(r,2)+"°")
    pare
    }
    se(opcao>6){
      escreva("Opção invalida saindo do sistema")
    }senao se(opcao==0){
      escreva("Opção invalida saindo do sistema")
    }
  }
}