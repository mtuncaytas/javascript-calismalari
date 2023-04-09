let toplam =0 ;

for(let i = 4; i <= 99; i++ ){
    if( i % 3 === 0 && i % 5 === 0 ){
        toplam+=i;
    }   
}

console.log(toplam);