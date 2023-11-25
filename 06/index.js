const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const dividindo=cidades.filter(function(maiores){
  return maiores.length<=8
})
console.log(dividindo)