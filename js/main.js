/*==========================================================
VIVEK SAI KATURI PORTFOLIO
MAIN JAVASCRIPT
==========================================================*/


/*========================
LOADER
=========================*/

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        setTimeout(()=>{

            loader.classList.add("hide");

        },800);

    }

});



/*========================
NAVBAR SCROLL EFFECT
=========================*/

const header=document.querySelector("header");


window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header?.classList.add("scrolled");

    }

    else{

        header?.classList.remove("scrolled");

    }

});



/*========================
MOBILE MENU
=========================*/

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");


menuBtn?.addEventListener("click",()=>{

    navLinks.classList.toggle("show");

});



/*========================
ACTIVE NAV LINK
=========================*/

const links=document.querySelectorAll(".nav-links a");


links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});



/*========================
SCROLL REVEAL
=========================*/

const revealElements=document.querySelectorAll(
    ".project-card, .stack-grid div, .achievement-card, .cta"
);


const revealObserver=new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});


},
{
    threshold:0.15
});


revealElements.forEach(element=>{

    element.classList.add("reveal");

    revealObserver.observe(element);

});



/*========================
CUSTOM CURSOR
=========================*/

const cursor=document.querySelector(".cursor");


if(cursor){

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});


document.querySelectorAll("a,button").forEach(item=>{


item.addEventListener("mouseenter",()=>{

    cursor.classList.add("cursor-grow");

});


item.addEventListener("mouseleave",()=>{

    cursor.classList.remove("cursor-grow");

});


});


}