
// for(let i=1; i>100; i++){
    
// }


let raqamlar=[65,32,54,12,36,58,9,2,324,58,92];
let juft=[];
let toq=[];
for(let i=0; i<raqamlar.length; i++){
    if(raqamlar[i]%2==0){
        juft.push(raqamlar[i]);
    }else{
        toq.push(raqamlar[i]);
    }
}
console.log(raqamlar, "Hamma raqamlar");
console.log(juft, "Juft sondagi raqamlar");
console.log(toq, "Toq sonndagi raqamlar");



