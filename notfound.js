
const validPaths = [
    "/homepage/homepage.html",
    "/contact/contact.html",
    "/about/about.html",
    "/signup/signup.html",
    "/wishlist/wishlist.html",
    "/cart/cart.html",
    "/account/account.html",
    "/login/login.html",
    "/checkout/checkout.html"
];

const currentPath = window.location.pathname;


if (!validPaths.includes(currentPath)) {

    window.location.href = "/notfound/notfound.html"; 
}
