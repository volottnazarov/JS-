const products = JSON.parse(dataProducts);

const itemWrapEl = document.querySelector('.cards__wrapper');

products.forEach(element => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('cards__item');

    const imageEl = document.createElement('div');
    imageEl.classList.add('item-img');
    imageEl.style.backgroundImage = element.image;

    const descEl = document.createElement('div');
    descEl.classList.add('item-description');

    const h4El = document.createElement('h4');
    h4El.classList.add('item-title');
    h4El.textContent = element.title;
    descEl.append(h4El);

    const pEl = document.createElement('p');
    pEl.classList.add('item-text');
    pEl.textContent = element.description;
    descEl.append(pEl);

    const priceEl = document.createElement('p');
    priceEl.classList.add('item-price');
    priceEl.textContent = `$${element.price}`;
    descEl.append(priceEl);

    const hoverEl = document.createElement('div');
    hoverEl.classList.add('item-img__hover');
    imageEl.append(hoverEl);

    const buttonEl = document.createElement('button');
    buttonEl.classList.add('item-img__hover-btn');
    buttonEl.textContent = 'Add to Cart';
    hoverEl.append(buttonEl);

    
    itemEl.append(imageEl, descEl);
    itemWrapEl.append(itemEl);
});


