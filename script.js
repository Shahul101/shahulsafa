/* =========================================
   OPEN INVITATION
========================================= */

const openButton =
    document.getElementById("openInvitation");

const openingScreen =
    document.getElementById("opening-screen");

openButton.addEventListener("click", function () {

    openingScreen.classList.add("hide");

});


/* =========================================
   WEDDING COUNTDOWN
========================================= */

/*
   Change this date/time according to
   your actual wedding date.
*/

const weddingDate =
    new Date("November 22, 2026 10:00:00").getTime();


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


/* =========================================
   INVITATION LINK
========================================= */

/*
   Example:

   fazilshifana.pages.dev/?invite=reception
*/

const params =
    new URLSearchParams(
        window.location.search
    );

const invitation =
    params.get("invite");


if (invitation === "reception") {

    console.log(
        "Reception invitation opened"
    );

}


if (invitation === "nikah") {

    console.log(
        "Nikah invitation opened"
    );

}
