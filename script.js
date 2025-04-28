function abrirModal(){
    const modal = document.getElementById('janelaModal')
    modal.classList.add('abrir')
    

    modal.addEventListener('click',(e) =>{
        if(e.target.id == 'fechar' || e.target.id == 'janelaModal'){
            modal.classList.remove('abrir')
        }
    })
}

window.addEventListener("scroll", function() {
    const elemento = document.querySelector(".boxCardAssista");
    const alturaPagina = window.innerHeight;
    const posicaoElemento = elemento.getBoundingClientRect().top;
  
    if (posicaoElemento < alturaPagina) {
      elemento.style.opacity = 1;
    }else {
        elemento.style.opacity = 0; }
  });

  document.querySelector(".btnGenero").addEventListener("click", function() {
    const dropdown = document.querySelector(".menuGenero");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  function voltarPaginaInicial() {
    window.location.href = 'index.html';
  }