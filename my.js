function test()
{
    let number =+ document.getElementById('number').value;
    a=number%10;
    b=number%12;
    var m,n = "";
    switch(a)
    {
        case 0 :
            m="Canh"; 
            break;
        case 1 :
             m='Tân'; 
             break;
        case 2 :
              m='Nhâm'; 
              break;
        case 3 :
              m='Quý'; 
              break;
        case 4 :
             m='Giáp'; 
             break;
        case 5 :
             m='Ất' ;
             break;
        case 6 :
              m='Bính'; 
              break;
        case 7:
            m='Đinh'; 
            break; 
        case 8 :
            m='Mậu'; 
            break;
        case 9 :
            m='Kỉ'; 
             break;                    
    } 
    switch(b)
    {
        case 0 :
            n="Thân"; 
            break;
        case 1 :
            n="Dậu"; 
             break;
        case 2 :
            n="Tuất"; 
              break;
        case 3 :
            n="Hợi"; 
              break;
        case 4:
            n="Tý"; 
             break;
        case 5:
            n="Sửu"; ;
             break;
        case 6 :
            n="Dần"; 
              break;
        case 7:
            n="Mẹo";    
            break; 
        case 8 :
            n="Thìn"; 
            break;
        case 9 :
            n="Tỵ"; 
             break;        
        case 10 :
            n="Ngọ"; 
            break;       
        case 11 :
            n="Mùi";  
            break;                
    }     
    alert("Đây là năm "+m+" "+n)
}