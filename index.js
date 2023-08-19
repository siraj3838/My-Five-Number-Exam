// total cost

let total = 0;
function toTouch(target){
    const priceTag = target.childNodes[1].childNodes[13].childNodes[0].innerText;
    const price = parseFloat(priceTag);
    total = total + price;
    const searchPrice = document.getElementById('total-price-output');
    searchPrice.innerText = total;
}

// first section item name send to order
function toTouch2(target2){
    const itemName = target2.childNodes[1].childNodes[11].innerText;
    const h3 = document.createElement('h3');
    h3.innerText = itemName;
    const receiveProperty = document.getElementById('send-first-item-name');
    receiveProperty.appendChild(h3);
}
// second section item name send to order
function toTouch3(target3){
    const itemName = target3.childNodes[1].childNodes[11].innerText;
    const h3 = document.createElement('h3');
    h3.innerText = itemName;
    const receiveProperty = document.getElementById('send-second-item-name');
    receiveProperty.appendChild(h3);
}
// third section item name send to order
function toTouch4(target4){
    const itemName = target4.childNodes[1].childNodes[11].innerText;
    const h3 = document.createElement('h3');
    h3.innerText = itemName;
    const receiveProperty = document.getElementById('send-third-item-name');
    receiveProperty.appendChild(h3);
}