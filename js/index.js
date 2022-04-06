// Select Landing Page Element
let landingPage = document.querySelector(".landing");

// Get Array of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

setInterval(() => {
    //Get Random Number
    let randomNumber = Math.floor( Math.random() * imgsArray.length );

    // Change Background Image Url
    landingPage.style.backgroundImage = 'url("../img/' + imgsArray[randomNumber] + '")';
}, 3000);




let span = document.querySelector( ".up" );

window.onscroll = function () {
    // console.log( this.scrollY );
    this.scrollY >= 1000 ? span.classList.add( "show" ) : span.classList.remove( "show" );
}

span.onclick = function ()
{
    window.scrollTo( {
        top: 0,
        behavior: "smooth",
    } );
}



let tabs = document.querySelectorAll( ".tabs li" ),
    divs = Array.from( document.querySelectorAll( ".content > div" ) ),
    All = document.querySelectorAll( ".all" );

tabs.forEach( ( li ) => {
    li.addEventListener( "click", function removeActive() {
        tabs.forEach( ( li ) => {
            li.classList.remove( "active" );
            this.classList.add( "active" );
        } );
    } );
    li.addEventListener( "click", function manageDivs() {
        divs.forEach( ( div ) => {
            div.style.display = "none";
        } );
            document.querySelectorAll( this.dataset.cont ).forEach( ( el ) => {
            el.style.display = "flex";
        } );
    } );
});