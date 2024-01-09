function openMenu(){
    document.body.classList += " menu--open" /*If you have multiple classes and use classList, you need a space before the name because "document.body.classList" is a long string of classes*/

}

function closeMenu(){
    document.body.classList.remove('menu--open')
}