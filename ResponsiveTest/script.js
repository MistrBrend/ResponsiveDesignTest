window.onscroll = function() {scrollFunction();}

// scroll function
function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {   
        document.getElementById("nav").style.padding = "0.6rem 0";
        document.getElementById("nav").style.transition = "0.5s";
        document.getElementById("logoTekst").style.fontSize = "2.2rem";
        document.getElementById("logoTekstSpan1").style.fontSize = "2.5rem";
        document.getElementById("logoTekstSpan2").style.fontSize = "2.5rem";
    } else {
        document.getElementById("nav").style.padding = "1.2rem 0";
        document.getElementById("logoTekst").style.fontSize = "2.5rem";
        document.getElementById("logoTekstSpan1").style.fontSize = "2.8rem";
        document.getElementById("logoTekstSpan2").style.fontSize = "2.8rem";
    }
}