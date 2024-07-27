
const form = document.getElementById('form-add-item');
const newItemInput = document.getElementById('new-item');
const itemListElement = document.getElementById('item-list');
const alertMessage = document.getElementById('alert');
const iconCloseAlert = document.querySelector('.alert-close');

form.onsubmit = (event) => {
    event.preventDefault();
    if (!newItemInput.value) {
        return;
    }
    itemListElement.append(addItemToList(newItemInput.value));
    newItemInput.value = '';
}

/**
 * create a li element from a item name
 * @param {string} itemName 
 * @returns li element
 */
function addItemToList(itemName) {
    const spanItemName = document.createElement('span');
    spanItemName.textContent = itemName;
    const imgTrashBin = document.createElement('img');
    imgTrashBin.setAttribute('src', './assets/icons/trash-bin.png');
    imgTrashBin.addEventListener('click', () => removeItemFromList(event.target));
    const li = document.createElement('li');
    li.append(spanItemName);
    li.append(imgTrashBin);
    return li;
}

/**
 * remove the item from parent element
 * @param {element} event 
 */
function removeItemFromList(event) {
    alertMessage.style.display = 'flex';
    event.parentNode.remove();
}

iconCloseAlert.addEventListener('click', () => {
    alertMessage.style.display = 'none';
})