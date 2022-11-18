/* SUBMENU */
const menu = document.getElementById('item');
const submenu = document.getElementById('subitem');
const subitems = document.querySelectorAll('.navbar__menu--subitems');
subitems.forEach(items => {
    items.addEventListener('click', () => {
    menu.classList.remove('active');
    submenu.classList.remove('show');
    });
});
menu.addEventListener('click', () =>{
    menu.classList.toggle('active');
    submenu.classList.toggle('show');
});

/* ONSCROLL NAVBAR */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    if(currentY >= 500){
        navbar.style.backgroundColor = 'rgb(142, 130, 100)';
    }else{
        navbar.style.backgroundColor = 'transparent'
    }
});

/* CARRITO */
const btn = document.getElementById('cart');
const cart = document.getElementById('carrito');
const body = document.getElementById('home');
const body2 = body.innerHTML;
let Text = `
<nav class="navbar flex">
        <span class="navbar__logo">
            <a href="index.html">Poliburgers.</a>
        </span>
        <ul class="navbar__menu flex">
            <li class="navbar__menu--items">
                <a href="#home" class="item">Home</a>
            </li>
            <li class="navbar__menu--items" id="item">
                <a class="item">Menu</a>
            </li>
            <ul class="navbar__submenu" id="subitem">
                <li class="navbar__menu--subitems">
                    <a href="#carne">Carne</a>
                </li>
                <li class="navbar__menu--subitems">
                    <a href="#pollo">Pollo</a>
                </li>
                <li class="navbar__menu--subitems">
                    <a href="#ensalada">Ensalada</a>
                </li>
            </ul>
            <li class="navbar__menu--items" id="cart">
                <a href="#" class="item">Cart</a>
            </li>
            <li class="navbar__menu--items">
                <a href="#" class="item">Contact</a>
            </li>
            <li class="navbar__menu--items">
                <a href="#" class="item">Work For Us</a>
            </li>
        </ul>
    </nav>
<div class="cart" id="carrito">
<div class="cart__container">
    <div class="cart__content">
        <h1 class="cart__title">Cart</h1>
        <div class="cart__items"></div>
        <div class="cart__result">
            <h3>Total: 67584</h3>
        </div>
        <div class="cart__close">
            <button class="button">Close</button>
        </div>
    </div>
</div>
</div> `

btn.addEventListener('click', () => {
    if(body.className){
        body.innerHTML = body2;
        console.log('hola');
    }else{
        body.innerHTML = Text;
        console.log('hola');
    }
        body.classList.toggle('carrito');
})
