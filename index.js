// first section item name send to order
function toTouch2(target2) {
    const itemName = target2.childNodes[1].childNodes[11].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    li.style.listStyle = 'number';
    const receiveProperty = document.getElementById('send-first-item-name');
    receiveProperty.appendChild(li);
};
// second section item name send to order
function toTouch3(target3) {
    const itemName = target3.childNodes[1].childNodes[11].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    li.style.listStyle = 'number';
    const receiveProperty = document.getElementById('send-second-item-name');
    receiveProperty.appendChild(li);
};
// third section item name send to order
function toTouch4(target4) {
    const itemName = target4.childNodes[1].childNodes[11].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    li.style.listStyle = 'number';
    const receiveProperty = document.getElementById('send-third-item-name');
    receiveProperty.appendChild(li);
};

// total cost for item

let total = 0;
function toTouch(target) {
    const priceTag = target.childNodes[1].childNodes[13].childNodes[0].innerText;
    let price = parseFloat(priceTag);
    total = total + price;
    const searchPrice = document.getElementById('total-price-output');
    searchPrice.innerText = total.toFixed(2);
    const purchaseBtn = document.getElementById('purchase-btn');
    const applyBtn = document.getElementById('apply-button');
    if (total > 0) {
        purchaseBtn.removeAttribute('disabled');
    } else {
        purchaseBtn.setAttribute('disabled', 'disabled');
    }

    if (total >= 200) {
        applyBtn.removeAttribute('disabled');
    } else {
        applyBtn.setAttribute('disabled', 'disabled');
    }
};

// discount and after total pay

document.getElementById('apply-button').addEventListener('click', function () {
    const couponValue = document.getElementById('coupon-input-value');
    const discount = document.getElementById('total-discount-output');
    const searchPrice = document.getElementById('total-price-output');
    const afterDiscountPrice = document.getElementById('discount-after-total');
    let total = parseFloat(searchPrice.innerText);

    if (couponValue.value === 'SELL200') {
        // discount amount
        const discount20 = total * 0.2;
        discount.innerText = discount20.toFixed(2);
        // after discount total
        const totalAfter = total - discount20;
        searchPrice.innerText = total.toFixed(2);
        afterDiscountPrice.innerText = totalAfter.toFixed(2);
    } else {
        discount.innerText = '0.00';
        afterDiscountPrice.innerText = total.toFixed(2);
    }
});

// make purchase button click
document.getElementById('go-home').addEventListener('click', function () {
    window.location.href = "index.html";
});