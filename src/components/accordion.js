function textDown({currentTarget}) {
    currentTarget.nextElementSibling.classList.toggle('about__panel_active');
    currentTarget.querySelector('.about__point-icon').classList.toggle('about__point-icon_rotate');
    currentTarget.classList.toggle('about__button_active');
}

export {textDown};