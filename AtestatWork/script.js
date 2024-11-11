const data = JSON.parse(dataProducts);
const contentEl = document.getElementById('product-list');


data.forEach(elem => {
    const liEl = document.createElement('li');
    liEl.classList.add('li');
    liEl.style.border = '2px solid gray';
    liEl.style.backgroundColor = '#F7D7B0';
    liEl.style.width = '800px';

    const imageEl = document.createElement('img');
    imageEl.classList.add('content__image');
    imageEl.src = elem.image;

    const h5El = document.createElement('h5');
    h5El.classList.add('content__title');
    h5El.textContent = elem.title;
    h5El.style.fontSize = '20px';
    h5El.style.color = 'blue';

    const pEl = document.createElement('p');
    pEl.classList.add('content__desc');
    pEl.textContent = elem.description;
    pEl.style.fontSize = '14px';

    const priceEl = document.createElement('p');
    priceEl.classList.add('content__price');
    priceEl.textContent = ` ${elem.price} USD `;
    priceEl.style.fontSize = '20px';
    priceEl.style.color = 'red';

    const buttonEl = document.createElement('button');
    buttonEl.classList.add('content__button');
    buttonEl.textContent = 'Add to Cart'
    buttonEl.style.color = 'yellow';
    buttonEl.style.backgroundColor = 'green';

    liEl.append(imageEl, h5El, pEl, priceEl, buttonEl);
    contentEl.append(liEl);
});

//const liToCartEl = document.querySelector('li');
const cartEl = document.getElementById('cart-list')

const delPosCart = document.createElement('button');
delPosCart.classList.add('delete');
delPosCart.textContent = 'X';
delPosCart.setAttribute('title', 'Удалить из корзины');
delPosCart.style.color = 'white';
delPosCart.style.backgroundColor = 'grey';
delPosCart.style.position = 'absolute';
delPosCart.style.padding = '10px';
delPosCart.style.marginLeft = '1460px';

let total = 0;


contentEl.addEventListener('click', function(e) {
    const liCart = e.target.parentElement;

    liCart.style.width = '1500px';
    let delBtn = delPosCart.cloneNode(true);
    liCart.append(delBtn);

    const imgCart = liCart.querySelector('.content__image');
    imgCart.style.width = '165px';
    imgCart.style.position = 'absolute';
    imgCart.style.marginLeft = '-1200px';

    const priceCurr = liCart.querySelector('.content__price');
    console.log(priceCurr.textContent.split('USD')[0]);
    total += +priceCurr.textContent.split('USD')[0];
    console.log(total);
    totalEl.textContent = `Total Price: ${total} USD`;


    cartEl.append(liCart);
    const btnEl = cartEl.querySelector('.content__button');
    btnEl.remove();

    const delCard = document.querySelector('.delete');
    console.log(delCard);

    delCard.addEventListener('click', function (e) {
        const delLi = e.target.parentElement;
        const priceCurr = liCart.querySelector('.content__price');
        delLi.remove();
        total = +priceCurr.textContent.split('USD')[0];
        totalEl.textContent = `Total Price: ${total} USD`;
        
    });

});

const totalCard = document.createElement('li');
totalCard.classList.add('total-div', 'li');
const totalEl = document.createElement('p');
totalEl.classList.add('total-price');
totalEl.textContent = `Total Price: ${total} USD`;
totalCard.style.border = '2px solid gray';
totalCard.style.backgroundColor = '#F7D7B0';
totalCard.style.width = '1500px';
totalCard.appendChild(totalEl);
cartEl.after(totalCard);







