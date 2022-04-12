var cards= ['kot.jpg','kot4.jpg','kot2.jpg','kot5.jpg','kot.jpg','kot3.jpg','kot6.jpg','kot3.jpg','kot6.jpg','kot2.jpg','kot4.jpg','kot5.jpg'];
var oneVisible = false;
var nrKarty;
var licznik =0;
var blokada=false;
var koniec = 6;

document.onselectstart = function(){return false;};


function odkryj(nr){
    var opacityValue=$("#c"+ nr).css('opacity');
    if(opacityValue!= 0 && blokada==false){
        blokada=true;
        var obraz= "url("+cards[nr]+")";

        //document.getElementById('c'+ nr).style.backgroundImage=obraz;
        $("#c" + nr).css("background-image", obraz );
        
        if(oneVisible==false){
            //pierwsza karta
        
            oneVisible=true;
            nrKarty=nr;
            blokada=false;
        }
        else{
            //druga karta
        if(cards[nrKarty]==cards[nr]){
            //alert("PARA!");
            setTimeout(function(){para(nr, nrKarty)}, 200)
        
        }
        else{
            //alert("PUDŁO!");
            setTimeout(function(){pudlo(nr, nrKarty)}, 1000)
        }
            oneVisible=false;
            licznik++;
        
            $(".score").html("LICZNIK KLIKNIĘĆ: "+ licznik)
        }
        
    }

}

function para(nr1, nr2){
    if(nr1!= nr2){
        $("#c"+ nr1).css('opacity','0');
        $("#c"+ nr2).css('opacity','0');
        koniec--;
        if(koniec==0){
            $("#board").html("<h1> WYGRAŁEŚ W: <br>" + licznik + " ruchach <br></h1> <h2> OTO SŁODKI KOTEK DLA CIEBIE! </h2>");
            $("#board").css("background", 'url(slodkikotek.jpg)', 'no-repeat');
            $("#board").css("background-size", '600px');
        }
    }
    else{
        $("#c"+nr1).css('background-image', 'url(karta.jpg)');
    }
    blokada=false;
}

function pudlo(nr1,nr2){
    $("#c"+nr1).css('background-image', 'url(karta.jpg)')
    $("#c"+nr2).css('background-image', 'url(karta.jpg)')
    blokada=false;
}
