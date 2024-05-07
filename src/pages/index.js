import "./index.css";
import { accordion, img, popup, popupEmailClose } from "../utils/constants";
import { textDown } from "../components/accordion";
import { closePopup, openPopup } from "../components/popup";

accordion.forEach((title) => {
  title.addEventListener("click", textDown);
});

img.addEventListener("click", () => {
  openPopup(popup);
});

popupEmailClose.addEventListener("click", () => {
  closePopup(popup);
});