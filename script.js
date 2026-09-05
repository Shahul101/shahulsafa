/* =====================================================
   ENVELOPE OPENING
===================================================== */

const openButton =
    document.getElementById("openButton");

const envelopeScreen =
    document.getElementById("envelopeScreen");

const envelope =
    document.querySelector(".envelope");

const music =
    document.getElementById("weddingMusic");

const musicButton =
    document.getElementById("musicButton");


openButton.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(function () {

        envelopeScreen.classList.add("opened");

    }, 1200);

});


/* =====================================================
   MUSIC
===================================================== */

let musicPlaying = false;


musicButton.addEventListener("click", function () {

    if (musicPlaying) {

        music.pause();

        musicButton.innerHTML = "♫";

        musicPlaying = false;

    } else {

        music.play();

        musicButton.innerHTML = "❚❚";

        musicPlaying = true;

    }

});


/* =====================================================
   COUNTDOWN
===================================================== */

/*
    CHANGE THIS DATE IF REQUIRED
*/

const weddingDate =
    new Date(
        "November 22, 2026 10:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days")
            .innerText = "00";

        document.getElementById("hours")
            .innerText = "00";

        document.getElementById("minutes")
            .innerText = "00";

        document.getElementById("seconds")
            .innerText = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .innerText =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   INVITATION URL
===================================================== */

/*

Examples:

fazilshifana.pages.dev/?invite=reception

fazilshifana.pages.dev/?invite=nikah

*/

const params =
    new URLSearchParams(
        window.location.search
    );

const invitation =
    params.get("invite");


if (invitation === "reception") {

    console.log(
        "Reception invitation"
    );

}


if (invitation === "nikah") {

    console.log(
        "Nikah invitation"
    );

}
