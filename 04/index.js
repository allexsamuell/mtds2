const numeros = [0, 122, 4, 6, 7, 8, 44]

const verificaco=numeros.every(function(procurar){
  return procurar%2===0
})
if(verificaco){
console.log( `array válido`)
}else{
  
    console.log(`array inválido`)
}