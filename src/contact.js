const contactPage = (content) => {
    const contactContainer = document.createElement('div');
    contactContainer.innerText = "Contact Info";
    contactContainer.style.color = 'white';
    content.appendChild(contactContainer);

}

export default contactPage;