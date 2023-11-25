const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];
  
  const Programado=pessoas.filter(function(prog){
    return prog.profissao==="Programador" && prog.idade>20
  })
  const jornal=pessoas.filter(function(jona){
    return jona.profissao==="Jornalista"&&jona.idade>30
  })
  
  console.log(Programado)
  console.log(jornal)