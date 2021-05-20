const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("show-menu")
});

document.querySelector("#qtde").addEventListener('change', atualizaPreco)
document.querySelector("#js").addEventListener('change', atualizaPreco)
document.querySelector("#layout-sim").addEventListener('change', atualizaPreco)
document.querySelector("#layout-nao").addEventListener('change', atualizaPreco)
document.querySelector("#prazo").addEventListener('change', () =>  {
  const prazo = document.querySelector("#prazo").value
  if(prazo == 1) {
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
  } else {
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
  }
  
  atualizaPreco()
})

function atualizaPreco() {
  const qtde = document.querySelector("#qtde").value;
  const temJS = document.querySelector("#js").checked;
  const incluiLayout = document.querySelector("#layout-sim").checked
  const prazo = document.querySelector("#prazo").value;

  let preco = qtde * 100;
  if(temJS) preco *= 1.1;
  if(incluiLayout) preco += 500;
  let taxaUrgencia = 1 - prazo*0.1;
  preco *= 1 + taxaUrgencia;

  document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`

}
