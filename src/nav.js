const nav = (content) => {
    const header = document.createElement('div');    
    const title = document.createElement('h1');
    const list = document.createElement('ul');
    const navButtons = ["Home", "Menu", "Contact"];

    //header elements
    header.classList.add('header');
    title.innerText = 'Mi Ranchito Taqueria';
    title.setAttribute('id', 'title');
    header.appendChild(title);

    list.setAttribute('type', 'none');
    list.setAttribute('class', 'nav-pages');

    navButtons.forEach(button => {
        const newlistElement = document.createElement('li')
        const newNavElement = document.createElement('a');
        newNavElement.setAttribute('id', button.toLowerCase());
        newNavElement.innerText = button;
        newlistElement.appendChild(newNavElement);
        list.appendChild(newlistElement);
    });

    header.appendChild(list);
    content.prepend(header);
}

export default nav;