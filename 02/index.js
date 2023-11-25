const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

let verificar=palavras.some(function(novo){
  return novo.length>=6
})
if(verificar){
  console.log(`existe palavra inválida`)
}else{
  console.log(`array validado`)
}