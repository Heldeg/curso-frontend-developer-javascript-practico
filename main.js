const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const menuHamIcon = document.querySelector('.menu')
const menuShopCartIcon = document.querySelector('.navbar-shopping-cart')
const menuShopCart = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShopCartIcon.addEventListener('click', toggleShopCarMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isShopCarMenuClosed = menuShopCart.classList.contains('inactive');

    if (isMobileMenuClosed && !isShopCarMenuClosed) {
        toggleShopCarMenu();
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleShopCarMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isShopCarMenuClosed = menuShopCart.classList.contains('inactive');

    if (!isMobileMenuClosed && isShopCarMenuClosed) {
        toggleMobileMenu();
    }

    menuShopCart.classList.toggle('inactive');


}