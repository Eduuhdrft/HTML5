let idade = 18
/*
=== , estritamente igual
!== , estritamente diferente
>   , maior que
<   , menor que 
>=  , maior ou igual que
>=  , menor ou igual que
*/

if(idade < 18) { 
    console.log( "menor de idade")
}

else  if(idade >= 18 && idade < 70)  {
console.log("adulto")
}
else {
    console.log("idoso")

}

let nota = 49

if (nota >= 60) {
    console.log("Aprovado")
}
else if (nota >= 50 && nota <=59 ) {
    console.log ( "Recuperação")
}
else {
    console.log ( "Reprovado")
}

/*
&& = (E) retorna verdadeira (true) se todas as condições forem verdadeiras.
|| = (OU) Retorna verdadeira (true) se pelo menos uma condições for verdadeira.
*/

const temperatura = 20
let clima = "nublado"

if(temperatura > 30 && clima === "ensolarado") {
    console.log("Dia quente e ensolarado")
}
else if (temperatura > 30 || clima === "ensolarado"){
    console.log("O clima está quente OU ensolarado")
}
else {
    console.log ("ameno")
    
}
    





    



    

