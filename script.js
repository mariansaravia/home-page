function bg2Changer (){
    if(this.scrollY > this.innerHeight / 2) {
        document.body.classList.add("bg2-active");
    } 
    else{
        document.body.classList.remove("bg2-active");   
    }
}
window.addEventListener("scroll",bg2Changer);

function bg3Changer (){
    if(this.scrollY > this.innerHeight *1.8) {
        document.body.classList.add("bg3-active");
    } 
    else{
        document.body.classList.remove("bg3-active");   
    }
}
window.addEventListener("scroll",bg3Changer);

function bg4Changer (){
    if(this.scrollY > this.innerHeight *3) {
        document.body.classList.add("bg4-active");
    } 
    else{
        document.body.classList.remove("bg4-active");   
    }
}
window.addEventListener("scroll",bg4Changer);

function bg5Changer (){
    if(this.scrollY > this.innerHeight *4.3) {
        document.body.classList.add("bg5-active");
    } 
    else{
        document.body.classList.remove("bg5-active");   
    }
}
window.addEventListener("scroll",bg5Changer);

const page1 = document.querySelector('.page1');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();
tl.fromTo(page1, 1.2, { height: "0%" }, { height: "50%", ease: Power2.easeInOut })
.fromTo(page1, 1.2, {width:"100%"}, {width:"95%", ease: Power2.easeInOut})
.fromTo(headline, 1.2, { opacity: 0}, {opacity:1});