// ---------- ABOUT US ----------

const aboutBtn = document.getElementById("abt");
const descBox = document.getElementById("description");
const arrow = document.getElementById("arrow");

aboutBtn.addEventListener("click", () => {

    descBox.classList.toggle("show");

    if (descBox.classList.contains("show")) {
        arrow.textContent = "▲";
    } else {
        arrow.textContent = "▼";
    }

});

// ---------- IMAGE PREVIEW ----------

const img1 = document.getElementById("img1");

// Placeholder images
const imageMap = {

    moonBtn: "images/moonblood.png",

    starsBtn: "images/Leo.png",

    archievesBtn: "images/Star2.png",

    eventsBtn: "images/Vicfalls.png"

};

// Default image
const defaultImage = imageMap.moonBtn;

// Change image while hovering
Object.keys(imageMap).forEach(id => {

    const button = document.getElementById(id);

    button.addEventListener("mouseenter", () => {

        img1.src = imageMap[id];

    });

    button.addEventListener("mouseleave", () => {

        img1.src = defaultImage;

    });

});

// ---------- FAQ POPUPS ----------

const arrows = document.querySelectorAll(".faq-arrow");

arrows.forEach(arrow => {

    arrow.addEventListener("click", (e) => {

        const popup = document.getElementById(arrow.dataset.popup);

        // Position the popup beside the clicked question
        popup.style.left = (e.pageX + 20) + "px";
        popup.style.top = (e.pageY - 20) + "px";

        popup.style.display = "block";

    });

});

// Close buttons

document.querySelectorAll(".close-btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.closest(".faq-popup").style.display="none";

    });

});

// ---------- DRAGGABLE POPUPS ----------

document.querySelectorAll(".faq-popup").forEach(popup=>{

    const header=popup.querySelector(".popup-header");

    let offsetX=0;
    let offsetY=0;
    let dragging=false;

    header.addEventListener("mousedown",(e)=>{

        dragging=true;

        offsetX=e.clientX-popup.offsetLeft;
        offsetY=e.clientY-popup.offsetTop;

    });

    document.addEventListener("mousemove",(e)=>{

        if(!dragging) return;

        popup.style.left=(e.clientX-offsetX)+"px";
        popup.style.top=(e.clientY-offsetY)+"px";

    });

    document.addEventListener("mouseup",()=>{

        dragging=false;

    });

});
