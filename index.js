

function toTouch(target){
    const itemName = target.childNodes[1].childNodes[11].innerText;
    const h3 = document.createElement('h3');
    h3.innerText = itemName;
    const receiveProperty = document.getElementById('send-first-item-name');
    receiveProperty.appendChild(h3)
}

function toTouch2(target2){
    const itemName = target2.childNodes[1].childNodes[11].innerText;
    const h3 = document.createElement('h3');
    h3.innerText = itemName;
    const receiveProperty = document.getElementById('send-second-item-name');
    receiveProperty.appendChild(h3)
}

function toTouch3(target3){
    const itemName = target3.childNodes[1].childNodes[11].innerText;
    const h3 = document.createElement('h3');
    h3.innerText = itemName;
    const receiveProperty = document.getElementById('send-third-item-name');
    receiveProperty.appendChild(h3)
}