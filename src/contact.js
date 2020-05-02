const contactPage = (content) => {
    const contactContainer = document.createElement('div');
    const contactMessageContainer = document.createElement('div');
    const contactSquaresContainer = document.createElement('div');
    const headerMessage = document.createElement('h2');
    const messages = [
        'Get in touch with us by phone, email, or even through our social media pages', 
        'We hope to see you soon and we are always ready to serve you here at Mi Ranchito Taqueria!'
    ];
    const contactObject = {
        'Call us!': ['(916) 505 - 7373'],
        'Here\'s our address': [
            '5911 King Rd Ste D Loomis, CA 95650',
            'Monday-Saturday: 9am - 10pm'
        ],
        'Send us an email!': ['MiRanchito@business.com'],
        'Follow us!': [
            'fab fa-facebook-square',
            'fab fa-instagram-square',
            'fab fa-twitter-square',
            'fab fa-linkedin'
        ]
    };
    const contactObjectKeys = Object.keys(contactObject);

    contactContainer.setAttribute('class', 'contact-container fade');
    //create and append contact page message element
    contactMessageContainer.setAttribute('class', 'contact-message');
    headerMessage.setAttribute('class', 'head');
    headerMessage.innerText = 'We want to hear from you!';
    contactMessageContainer.appendChild(headerMessage);
    messages.forEach(message => {
        const newMessageElement = document.createElement('p');
        newMessageElement.innerText = message;
        contactMessageContainer.appendChild(newMessageElement);
    });
    contactContainer.appendChild(contactMessageContainer);

    //create and append contact information grid squares
    contactSquaresContainer.setAttribute('class', 'contacts');
    contactObjectKeys.forEach(key => {
        const newContactSquare = document.createElement('div');
        const newContactSquareTitle = document.createElement('h2');

        newContactSquare.setAttribute('class', 'info');
        newContactSquareTitle.innerText = key;
        newContactSquare.appendChild(newContactSquareTitle);
        
        if(key === 'Follow us!') {
            const socialIconContainer = document.createElement('div');
            socialIconContainer.setAttribute('class', 'icons');

            contactObject[key].forEach(item => {
                const newSocialIcon = document.createElement('i');
                newSocialIcon.setAttribute('class', item);
                newSocialIcon.setAttribute('id', 'symbol');
                socialIconContainer.appendChild(newSocialIcon);
            });
            newContactSquare.appendChild(socialIconContainer);
        } else {
            contactObject[key].forEach(item => {
                const newContactInfo = document.createElement('span');
                newContactInfo.innerText = item;
                newContactSquare.appendChild(newContactInfo);

            });
        }

        contactSquaresContainer.appendChild(newContactSquare);
    });
    contactContainer.appendChild(contactSquaresContainer);

    content.appendChild(contactContainer);

}

export default contactPage;