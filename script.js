// Loading Screen
window.addEventListener("load", () => {
    const loading = document.getElementById("loading");

    setTimeout(() => {
        loading.style.opacity = "0";
        loading.style.visibility = "hidden";
    }, 1500);
});


// Typing Effect
const words = [
    "Frontend Developer",
    "UI Designer",
    "Future Pro Player"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){
        typing.textContent = currentWord.substring(0,charIndex++);
    }else{
        typing.textContent = currentWord.substring(0,charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if(!deleting && charIndex === currentWord.length + 1){
        deleting = true;
        speed = 1500;
    }

    if(deleting && charIndex === 0){
        deleting = false;
        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }
    }

    setTimeout(typeEffect,speed);
}

typeEffect();


// Scroll Reveal
const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});


// Navbar Blur
window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background="rgba(0,0,0,.75)";
    }else{
        header.style.background="rgba(0,0,0,.25)";
    }

});


// Smooth Button Animation
document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


// Fade Animation
const style=document.createElement("style");

style.innerHTML=`

.hidden{
opacity:0;
transform:translateY(60px);
transition:1s;
}

.show{
opacity:1;
transform:translateY(0);
}

`;

document.head.appendChild(style);