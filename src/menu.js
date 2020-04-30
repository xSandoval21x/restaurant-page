const menuPage = (content) => {
    const menuContainer = document.createElement('div');
    const menuList = document.createElement('ul');
    const menuItemsObject = {
        Tacos: [
            'Chicken, 2.00',
            'Carne Asada, 2.50',
            'Al Pastor, 2.50',
            'Veggie, 2.00'
        ],
        Burritos: [
            'Chicken, 8.00',
            'Carne Asada, 8.50',
            'Al Pastor, 2.50',
            'Veggie, 2.00'
        ],
        Enchiladas: [
            'Chicken, 12.00',
            'Beef, 12.00',
            'Cheese, 10.00'
        ],
        Quesadillas: [
            'Cheese, 2.00',
            'Chicken, 3.00',
            'Beef, 3.00',
            'Carne Asada, 3.00'
        ]
    }
    const menuItemsArray = Object.keys(menuItemsObject);

    menuItemsArray.forEach(item => {
        const newMenuItem = document.createElement('h2');
        newMenuItem.innerText = item;
        menuList.appendChild(newMenuItem);
        menuItemsObject[item].forEach(choice => {
            const newMenuItemListElement = document.createElement('li');
            const newMenuItemChoice = document.createElement('span');
            const newMenuItemPrice = document.createElement('span');

            newMenuItemListElement.setAttribute('class', 'menu-item');
            newMenuItemChoice.innerText = choice.split(',')[0];
            newMenuItemPrice.innerText = choice.split(',')[1];

            newMenuItemListElement.appendChild(newMenuItemChoice);
            newMenuItemListElement.appendChild(newMenuItemPrice);
            menuList.appendChild(newMenuItemListElement);
        });
    });

    menuList.setAttribute('type', 'none');
    menuList.setAttribute('class', 'menu');
    menuContainer.setAttribute('class', 'menu-container');
    menuContainer.appendChild(menuList);
    content.appendChild(menuContainer);
}

export default menuPage;