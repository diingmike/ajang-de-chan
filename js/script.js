/*

Theme: Ajang De Chan;
Author: Michael Chan;
Date of Creation: Thurs, October 15, 2026;

*/

// script for header stripe on scroll

const siteHeader = document.getElementById("site-header");

function onScroll ()
{
    const stripe = document.querySelector(".header-stripe");

    if (window.scrollY > 80)
    {
        siteHeader.classList.add("scrolled");
        stripe.classList.add("stripe-hidden");
        siteHeader.style.top = "0";
    }
    else
    {
        siteHeader.classList.remove("scrolled");
        stripe.classList.remove("stripe-hidden");
        siteHeader.style.top = "";
    }
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll(); // run once on load

// script for footer year and back-to-top button

const footerYear = document.getElementById("footer-year");
const backToTop = document.getElementById("back-to-top");

footerYear.textContent = new Date().getFullYear();

function toggleBackToTop ()
{
    backToTop.classList.toggle("visible", window.scrollY > 400);
}

backToTop.addEventListener("click", function ()
{
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();