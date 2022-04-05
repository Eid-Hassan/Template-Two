// Select Landing Page Element
let landingPage = document.querySelector(".landing");

// Get Array of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

setInterval(() => {
    //Get Random Number
    let randomNumber = Math.floor( Math.random() * imgsArray.length );

    // Change Background Image Url
    landingPage.style.backgroundImage = 'url("../img/' + imgsArray[randomNumber] + '")';
}, 10000 );


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



let tabs = document.querySelectorAll( ".tabs li" );
let tabsArray = Array.from( tabs );
let divs = document.querySelectorAll( ".content > div" );
let divsArray = Array.from( divs );

tabsArray.forEach( ( ele ) => {
    ele.addEventListener( "click", function ( e ){
        tabsArray.forEach( ( ele ) =>{
            ele.classList.remove( "active" );
        } );
        e.currentTarget.classList.add( "active" );
        divsArray.forEach( ( div ) =>{
            div.style.display = 'none';
        } );
        document.querySelector( e.currentTarget.dataset.cont ).style.display = "flex";
    } );
})