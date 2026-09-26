// ================================
// MENYU
// ================================

const nav = document.getElementById("nav");

const menuBtn =
    document.getElementById("menuBtn");


menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show");

});


// Menyudan tanlanganda yopiladi

document
    .querySelectorAll("nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("show");

            }
        );

    });


// ================================
// RASMLAR
// ================================

const modal =
    document.getElementById("modal");

const modalImg =
    document.getElementById("modalImg");

const caption =
    document.getElementById("caption");

const photos =
    [...document.querySelectorAll(".photo")];


// Hozirgi rasm

let current = 0;


// ================================
// RASMNI OCHISH
// ================================

function showPhoto(index) {

    current =
        (index + photos.length)
        % photos.length;


    const image =
        photos[current]
        .querySelector("img");


    const title =
        photos[current]
        .querySelector("span");


    modalImg.src =
        image.src;


    caption.textContent =
        title.textContent;


    modal.classList.add("open");


    document.body.style.overflow =
        "hidden";

}


// ================================
// MODALNI YOPISH
// ================================

function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow =
        "";

}


// ================================
// RASM USTIGA BOSISH
// ================================

photos.forEach(
    (photo, index) => {

        photo.addEventListener(
            "click",
            () => {

                showPhoto(index);

            }
        );

    }
);


// ================================
// CLOSE
// ================================

document
    .getElementById("close")
    .addEventListener(
        "click",
        closeModal
    );


// ================================
// OLDINGI RASM
// ================================

document
    .getElementById("prev")
    .addEventListener(
        "click",
        () => {

            showPhoto(current - 1);

        }
    );


// ================================
// KEYINGI RASM
// ================================

document
    .getElementById("next")
    .addEventListener(
        "click",
        () => {

            showPhoto(current + 1);

        }
    );


// ================================
// MODAL TASHQARISIGA BOSISH
// ================================

modal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


// ================================
// KLAVIATURA
// ================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !modal.classList.contains("open")
        ) {
            return;
        }


        // ESC

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }


        // Chapga

        if (
            event.key === "ArrowLeft"
        ) {

            showPhoto(current - 1);

        }


        // O'ngga

        if (
            event.key === "ArrowRight"
        ) {

            showPhoto(current + 1);

        }

    }
);


// ================================
// YIL
// ================================

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();