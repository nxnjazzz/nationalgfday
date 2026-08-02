// ---------------------------
// Loading Screen
// ---------------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loading").style.display = "none";
            document.getElementById("intro").classList.remove("hidden");

        }, 800);

    }, 1800);

});

// ---------------------------
// Elements
// ---------------------------

const envelope = document.getElementById("envelope");
const intro = document.getElementById("intro");
const main = document.getElementById("mainPage");

const music = document.getElementById("music");
const record = document.getElementById("record");
const musicButton = document.getElementById("musicButton");

const overlay = document.getElementById("letterOverlay");
const typedLetter = document.getElementById("typedLetter");

// ---------------------------
// Envelope
// ---------------------------

function openEnvelope(){

    envelope.classList.add("open");

    setTimeout(() => {

        intro.style.display = "none";
        main.style.display = "block";

        typeTitle();

        music.play().catch(()=>{});

        record.classList.add("spin");

        musicButton.innerHTML = "⏸ Pause";

    },1600);

}

// ---------------------------
// Music
// ---------------------------

function toggleMusic(){

    if(music.paused){

        music.play();

        record.classList.add("spin");

        musicButton.innerHTML="⏸ Pause";

    }

    else{

        music.pause();

        record.classList.remove("spin");

        musicButton.innerHTML="▶ Play";

    }

}

// ---------------------------
// Animated Title
// ---------------------------

const titleText="Happy National Girlfriend Day ❤️";

let titleIndex=0;

function typeTitle(){

    const title=document.getElementById("title");

    title.innerHTML="";

    titleIndex=0;

    function type(){

        if(titleIndex<titleText.length){

            title.innerHTML+=titleText.charAt(titleIndex);

            titleIndex++;

            setTimeout(type,55);

        }

    }

    type();

}

// ---------------------------
// Love Letter
// ---------------------------

const message=`Happy National Girlfriend Day ❤️

Thank you for always making me smile.

Every memory with you is my favorite memory.

You make my days brighter, my heart happier, and my life so much better.

I hope this little website reminds you just how much I love you.

Forever yours. ❤️`;

function showLetter(){

    overlay.style.display="flex";

    typedLetter.innerHTML="";

    let i=0;

    function type(){

        if(i<message.length){

            typedLetter.innerHTML+=message.charAt(i);

            i++;

            setTimeout(type,28);

        }

    }

    type();

}

function closeLetter(){

    overlay.style.display="none";

}

overlay.addEventListener("click",(e)=>{

    if(e.target===overlay){

        closeLetter();

    }

});

// ---------------------------
// Floating Hearts
// ---------------------------

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    const icons=[
        "💖",
        "💕",
        "💗",
        "💓",
        "🌸",
        "✨"
    ];

    heart.innerHTML=
    icons[Math.floor(Math.random()*icons.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (18+Math.random()*20)+"px";

    heart.style.animationDuration=
    (5+Math.random()*5)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

// ---------------------------
// Click Heart Explosion
// ---------------------------

document.addEventListener("click",(e)=>{

    if(e.target.closest(".seal")) return;

    if(e.target.closest(".close")) return;

    for(let i=0;i<14;i++){

        const h=document.createElement("div");

        h.innerHTML="💖";

        h.style.position="fixed";
        h.style.left=e.clientX+"px";
        h.style.top=e.clientY+"px";
        h.style.fontSize=(16+Math.random()*14)+"px";
        h.style.pointerEvents="none";
        h.style.transition="1s";
        h.style.zIndex="999";

        document.body.appendChild(h);

        const x=(Math.random()-0.5)*180;
        const y=(Math.random()-0.5)*180;

        requestAnimationFrame(()=>{

            h.style.transform=`translate(${x}px,${y}px) scale(1.6)`;

            h.style.opacity="0";

        });

        setTimeout(()=>{

            h.remove();

        },1000);

    }

});

// ---------------------------
// Keyboard Shortcut
// ---------------------------

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeLetter();

    }

});
