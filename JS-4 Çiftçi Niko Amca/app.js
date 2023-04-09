let hayvanlar = [
    {
        hayvan : "inek",
        ayakSayisi :4,     
    }, 
    {
        hayvan : "Koyun",
        ayakSayisi :4,     
    }, 
    {
        hayvan : "domuz",
        ayakSayisi :4,      
    }, 
    {
        hayvan : "tavuk",
        ayakSayisi :2,      
    }, 
]
    
    let helalAyakSayisi = 0; 
    for (let i = 0; i < hayvanlar.length; i++) {
        if (hayvanlar[i].hayvan !== "domuz") {
          helalAyakSayisi += hayvanlar[i].ayakSayisi;
        }
    }
    console.log(helalAyakSayisi);   