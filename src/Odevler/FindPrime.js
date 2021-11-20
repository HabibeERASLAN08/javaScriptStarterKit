//istenilen kadar sayı parametre gönderebilen bir fonksiyonla sayıların asal olup olmadığı
function findPrime(... numbers) {
    
    for (let i =0 ; i< numbers.length; i++) {
       let isPrime=true
       if(numbers[i]<=1){
           console.log(numbers[i]+" Asal sayı değil")
           continue
       }
       for(let j=2;j<=numbers[i]/2;j++){
           if(numbers[i]%j==0){
               console.log(numbers[i]+" Asal sayı değil.")
               isPrime=false
               break
           }
       }
       if(isPrime){
           console.log(numbers[i]+" Asal sayı")
       } 
    }   
}

findPrime(1,150,80,93,13,-17)
