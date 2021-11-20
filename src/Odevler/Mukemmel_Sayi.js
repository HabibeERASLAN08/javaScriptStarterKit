//1000'e kadarki tüm mükemmel sayıları listeleyen program
function perfectNumbers() {
    let number=1
    console.log("------1-1000 Arası Mükemmel Sayı Listesi-----")
    for(let number=1;number<=1000;number++){
        let total=0;
        for(let i=1;i<number;i++){
            if(number%i==0)
            total+=i
        }
        if(total==number)
        
        console.log(number);
    }    
}
perfectNumbers()

//1000'e kadarki tüm asal sayıları listeleyen program
console.log("------1-1000 Arası Asal Sayı Listesi-----")
function primeNumbers() {
    for(let i=2;i<1000;i++){
        let isPrime=true
        for(let j=2;j<i;j++){
            if(i%j==0)
            isPrime=false
        }
        if(isPrime)
         console.log(i)
    }
}
primeNumbers()
