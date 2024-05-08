function clickOnOverlay(evt) {
  if (evt.target.classList.contains("popup_is-opened")) {
    closePopup(evt.target.closest(".popup"));
  }
}

function keyHandler(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_is-opened");
    closePopup(activePopup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_is-opened");

  popup.addEventListener("mousedown", clickOnOverlay);
  document.addEventListener("keydown", keyHandler);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");

  popup.removeEventListener("mousedown", clickOnOverlay);
  document.removeEventListener("keydown", keyHandler);
}

export { openPopup, closePopup};
