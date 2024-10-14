let suco = ""
let doce = ""
let caminho1 = ""
let caminho2 = ""
let resposta2 = ""
let resposta3 = ""



alert("Sua missão é simples, ir ao mercado e comprar laranja para um suco, se não tiver laranja, compre maça. Compre também, açucar, se não tiver, compre adoçante. ")


alert( "Você chega no mercado e vai para: ")
let resposta = prompt("Digite o lugar (OrtFruit) ou (Sessão do açucar)")

switch (resposta) {
	case "OrtFruit":
        alert("Você chega no setor OrtFruit!" );
        alert("Tem Laranjas?")
    
        caminho1 = prompt("Sim (Comprar Laranjas), Não (Comprar Maça)")
    
    if(caminho1 == "Sim") {
        alert("Você comprou Laranjas");
        suco = "Suco de Laranja"
    }
    
    else if(caminho1 == "Não") {
        alert("Você comprou maça")
        suco = "Suco de Maça"
    }
    
    else {
        alert("Sim ou não? Burrão!")
    }
        break
    
    case "Sessão do Açucar":
        alert("Você chega na Sessão do Açucar!" );
        alert("Tem Açucar?")
    
        caminho2 = prompt("Sim (Comprar Açucar), Não (Comprar Adoçante)")
    
    if(caminho2 == "Sim") {
        alert("Você comprou Açucar");
        doce = "Açucar"
    }
    
    else if(caminho2 == "Não") {
        alert("Você comprou Adoçante")
        doce = "Adoçante"
    }
    
    else {
        alert("Sim ou não? Burrão!")
    }
        break
    }
    
    alert("Você ja comprou tudo que precisa?")
        resposta2 = prompt("Terminou?")
    
    switch(resposta2) {
        case "Sim": 
        alert("Você vai pra casa");
        alert("Você fez um " + suco + " Adoçado com " + doce )
        break
    
    case "Não":
        alert( "O que falta comprar? ")
        resposta3 = prompt("Laranja ou Açucar?")
    
    if(resposat3 == "Laranja") {
        alert("Você chega no setor OrtFruit!" );
        alert("Tem Laranjas?")
    
        caminho1 = prompt("Sim (Comprar Laranjas), Não (Comprar Maça)")
    
    if(caminho1 == "Sim") {
        alert("Você comprou Laranjas");
        suco = "Suco de Laranja"
    }
    
    else if(caminho1 == "Não") {
        alert("Você comprou maça")
        suco = "Suco de Maça"
    }
    
    else {
        alert("Sim ou não? Burrão!")
    }
    
    if(resposat3 == "Açucar") {
        alert("Você chega na Sessão do Açucar!" );
        alert("Tem Açucar?")
    
        caminho2 = prompt("Sim (Comprar Açucar), Não (Comprar Adoçante)")
    
    if(caminho2 == "Sim") {
        alert("Você comprou Açucar");
        doce = "Açucar"
    }
    
    else if(caminho2 == "Não") {
        alert("Você comprou Adoçante")
        doce = "Adoçante"
    }
    
    else {
        alert("Sim ou não? Burrão!")
        break
    
      }
    }
  }
}
    
