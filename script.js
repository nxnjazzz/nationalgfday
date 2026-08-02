// ----------------------
// Typewriter Title
// ----------------------

const titleText = "Happy National Girlfriend Day ❤️";
const title = document.getElementById("title");

let i = 0;

function typeWriter() {

    if (i < titleText.length) {
        title.innerHTML += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }

}

// ----------------------
// Envelope
// ----------------------

function openEnvelope() {

    const envelope = document.querySelector(".envelope");

    envelope.classList.add("open");

    setTimeout(() => {

        document.getElementById("intro").style.display = "none";

        document.getElementById("mainContent").style.display = "block";

        typeWriter();

        // Automatically play music after opening
        music.play().catch(() => {});

        record.classList.remove("paused");
        record.classList.add("spin");

    }, 1400);

}

// ----------------------
// Music Player
// ----------------------

const music = document.getElementById("music");
const record = document.getElementById("record");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic(){

    if(music.paused){

        music.play();

        record.classList.remove("paused");
        record.classList.add("spin");

        musicBtn.innerHTML = "⏸ Pause Music";

    }else{

        music.pause();

        record.classList.remove("spin");
        record.classList.add("paused");

        musicBtn.innerHTML = "▶ Play Music";

    }

}

// ----------------------
// Love Letter
// ----------------------

function showLetter(){

    document.getElementById("letterPopup").style.display="flex";

}

function closeLetter(){

    document.getElementById("letterPopup").style.display="none";

}

// Close when clicking outside

window.onclick=function(e){

    const popup=document.getElementById("letterPopup");

    if(e.target===popup){

        popup.style.display="none";

    }

}

// ----------------------
// Floating Hearts
// ----------------------

function makeHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    const emojis=["💖","💕","💗","💓","🌸","✨"];

    heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.animationDuration=(5+Math.random()*6)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(makeHeart,450);

// ----------------------
// Click Heart Explosion
// ----------------------

document.addEventListener("click",(e)=>{

    if(e.target.closest(".envelope")) return;

    for(let i=0;i<15;i++){

        const h=document.createElement("div");

        h.innerHTML="💖";

        h.style.position="fixed";

        h.style.left=e.clientX+"px";

        h.style.top=e.clientY+"px";

        h.style.pointerEvents="none";

        h.style.fontSize=(18+Math.random()*18)+"px";

        h.style.transition="all 1s ease";

        h.style.zIndex="9999";

        document.body.appendChild(h);

        const x=(Math.random()-0.5)*220;
        const y=(Math.random()-0.5)*220;

        requestAnimationFrame(()=>{

            h.style.transform=`translate(${x}px,${y}px) scale(1.8)`;

            h.style.opacity="0";

        });

        setTimeout(()=>{

            h.remove();

        },1000);

    }

});

// ----------------------
// Sparkles
// ----------------------

for(let i=0;i<70;i++){

    const star=document.createElement("div");

    star.style.position="fixed";
    star.style.width="3px";
    star.style.height="3px";
    star.style.borderRadius="50%";
    star.style.background="white";
    star.style.boxShadow="0 0 10px hotpink";
    star.style.opacity=Math.random();

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animation=`twinkle ${2+Math.random()*4}s infinite`;

    document.body.appendChild(star);

}

// ----------------------
// Twinkle Animation
// ----------------------

const style=document.createElement("style");

style.innerHTML=`

@keyframes twinkle{

0%,100%{
opacity:.2;
}

50%{
opacity:1;
}

}

`;

document.head.appendChild(style);