
const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]


const novo=frutas.map(function(frutas,i){
  return `${i} — ${frutas.slice(0,1).toUpperCase()+frutas.slice(1).toLowerCase()}`
})
console.log(novo)