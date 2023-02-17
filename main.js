const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const menuHamIcon = document.querySelector('.menu')
const menuShopCartIcon = document.querySelector('.navbar-shopping-cart')
const menuShopCart = document.querySelector('.product-detail');
const productDetail = document.querySelector('.product-detail-item');
const cardsContainer = document.querySelector('.cards-container');
const closeProductDetailIcon = document.querySelector('.product-detail-item-close');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShopCartIcon.addEventListener('click', toggleShopCarMenu);
closeProductDetailIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    const isShopCarMenuClosed = menuShopCart.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isShopCarMenuClosed) {
        menuShopCart.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        closeProductDetail();
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShopCarMenuClosed = menuShopCart.classList.contains('inactive');
    closeProductDetail();
    if (!isShopCarMenuClosed) {
        menuShopCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleShopCarMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        closeProductDetail();
    }

    menuShopCart.classList.toggle('inactive');


}

function openProductDetailAside() {
    desktopMenu.classList.add('inactive');
    menuShopCart.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    productDetail.classList.remove('inactive');

}

function closeProductDetail() {
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'PC',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderProducts(array) {

    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);