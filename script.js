var listaFilmesFavoritos = [];
var listaTrailersFilmesFavoritos = [];

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var trailerFilmeFavorito = document.getElementById('trailer');
  listaFilmesFavoritos.push(filmeFavorito);
  listaTrailersFilmesFavoritos.push(trailerFilmeFavorito);
      
  limpaCampos();
  recarregarFilmes();
}

function recarregarFilmes(){
  for(i=0; i < listaFilmesFavoritos.length ; i++){
    elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} "><img src=" ${listaFilmesFavoritos[i]} "></a>`;
    
  }
}

function limpaCampos(){
   document.getElementById('filme').value = '';
   document.getElementById('trailer').value = '';
}
