function classToggle() {
  const navItems = document.querySelectorAll(".navbar__items");
  navItems.forEach((navItem) => navItem.classList.toggle("navbar__ToggleShow"));
}

const navbarLink = document.querySelector(".navbar__Link-toggle");
navbarLink.addEventListener("click", classToggle);



function copyToClipboard() {
  const walletAddress = document.querySelector(".bullet-address");

  if (walletAddress) {
    const textarea = document.createElement("textarea");
    textarea.value = walletAddress.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textarea.value);

    document.body.removeChild(textarea);


    var snackBar = document.getElementById("snackbar");
    snackBar.className = "show";
    setTimeout(function () {
      snackBar.className = snackBar.className.replace("show", "");
    }, 3000);
  } else {
    console.error("Span element not found.");
  }
}

const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      // console.log(content.style.maxHeight);
    }
  };
});