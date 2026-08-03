/*==========================================================
TYPING EFFECT
==========================================================*/

const words = [

    "Full Stack Developer",
    "Data Science Enthusiast",
    "Machine Learning Explorer",
    "Software Engineer"

];


let index = 0;
let charIndex = 0;
let deleting = false;


const typingElement = document.getElementById("typing");


function typeEffect(){

    if(!typingElement) return;


    const currentWord = words[index];


    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0,charIndex++);


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typingElement.textContent =
        currentWord.substring(0,charIndex--);


        if(charIndex < 0){

            deleting=false;

            index++;

            if(index >= words.length){

                index=0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}


typeEffect();