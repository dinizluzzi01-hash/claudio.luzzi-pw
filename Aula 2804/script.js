var media = parseInt(prompt("Digite sua média: "))
var nome = prompt("Digite seu nome:")
console.log(typeof nome);
console.log(typeof media);
if(media > 7){
    console.log("Aprovado")
} 
else if (media > 5 && (media <=7)){
    console.log("Recuperação")
}
else if(isNaN(media)){
 console.log("Isso não é um número")   
}
else{
    console.log("Reprovado")
   
}    
    
 