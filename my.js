function test()
{
    let number =+ document.getElementById('number').value;
    a=number%10;
    b=number%12;
    var m,n = "";
    switch(a)
    {
        case 1 :
            m="Canh"; 
            break;
        case 2 :
             m='Tân'; 
             break;
        case 3 :
              m='Nhâm'; 
              break;
        case 4 :
              m='Quý'; 
              break;
        case 5 :
             m='Giáp'; 
             break;
        case 6 :
             m='Ất' ;
             break;
        case 7 :
              m='Bính'; 
              break;
        case 8:
            m='Đinh'; 
            break; 
        case 9 :
            m='Mậu'; 
            break;
        case 10 :
            m='Kỉ'; 
             break;                    
    } 
    switch(b)
    {
        case 1 :
            n="Thân"; 
            break;
        case 2 :
            n="Dậu"; 
             break;
        case 3 :
            n="Tuất"; 
              break;
        case 4 :
            n="Hợi"; 
              break;
        case 5 :
            n="Tý"; 
             break;
        case 6 :
            n="Sửu"; ;
             break;
        case 7 :
            n="Dần"; 
              break;
        case 8:
            n="Mẹo";    
            break; 
        case 9 :
            n="Thìn"; 
            break;
        case 10 :
            n="Tỵ"; 
             break;        
        case 11 :
            n="Ngọ"; 
            break;       
        case 12 :
            n="Mùi";  
            break;                
    }     
    alert("Đây là năm "+m+" "+n)
}