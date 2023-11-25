const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];
  
  
  const procurar=nomes.filter(function(achei){
    
    return achei.slice(0,1).toLowerCase()==="a"
    
    
  })
  console.log(procurar)