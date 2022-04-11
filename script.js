var cards= ['kot.jpg','kot4.jpg','kot2.jpg','kot5.jpg','kot.jpg','kot3.jpg','kot6.jpg','kot3.jpg','kot6.jpg','kot2.jpg','kot4.jpg','kot5.jpg'];
var oneVisible = false;
var nrKarty;

function odkryj(nr){
var obraz= "url("+cards[nr]+")";


document.getElementById('c'+ nr).style.backgroundImage=obraz;

if(oneVisible==false){
    //pierwsza karta

    oneVisible=true;
    nrKarty=nr;
}
else{
    //druga karta
    if(cards[nrKarty]==cards[nr]){
        alert("PARA!");

    }
    else{
        alert("PUDŁO!");
    }
}
}
