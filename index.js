let homePts = document.getElementById("home-pts");
let homeCount = 0;
let guestPts = document.getElementById("guest-pts");
let guestCount = 0;

function addOneGuest() {
  guestCount = guestCount + 1;
  guestPts.innerText = guestCount;
}
function addTwoGuest() {
  guestCount = guestCount + 2;
  guestPts.innerText = guestCount;
}
function addThreeGuest() {
  guestCount = guestCount + 3;
  guestPts.innerText = guestCount;
}
function addOneHome() {
  homeCount = homeCount + 1;
  homePts.innerText = homeCount;
}
function addTwoHome() {
  homeCount = homeCount + 2;
  homePts.innerText = homeCount;
}
function addThreeHome() {
  homeCount = homeCount + 3;
  homePts.innerText = homeCount;
}
function resetGuestPts() {
  guestCount = 0;
  guestPts.innerText = guestCount;
}
function resetHometPts() {
  homeCount = 0;
  homePts.innerText = homeCount;
}
