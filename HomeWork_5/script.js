const data = JSON.parse(dataJSON);
const contentEl = document.getElementById('product-list');


data.forEach(elem => {
    const liEl = document.createElement('li');
    liEl.style.border = '2px solid gray';
    liEl.style.backgroundColor = '#F7D7B0';
    liEl.style.width = '300px';

    const imageEl = document.createElement('img');
    imageEl.classList.add('content__image');
    imageEl.src = elem.image;
    imageEl.style.width = '100px';

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
