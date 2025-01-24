import "./style.css"
const country = JSON.parse(localStorage.getItem("country"));
const countryName = document.getElementById("countryName");
const countryFlagImg = document.getElementById("countryFlagImg");
const countryFlagInfo = document.getElementById("countryFlagInfo");
countryName.innerHTML = country?.name?.common;
countryFlagImg.src = country?.flags?.png;
countryFlagInfo.textContent = country?.flags?.alt;
