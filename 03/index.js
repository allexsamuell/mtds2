const palavras = ["arroz", "feijão", "carne", "macarrão","cerveja"]


const proibida=palavras.some(function(achei){
   return achei="cerveja"||"vodka"
})
if(proibida){
  console.log( `revise sua lista, joão. possui bebida com venda proibida!`)
}else{
  console.log( `tudo certo, vamos as compras!`)
  
}