
const homePage = (content) => {
    const welcomeContainer = document.createElement('div');
    const welcomeText = document.createElement('h2');
    const infoText = document.createElement('p');

    //welcome elements
    welcomeContainer.setAttribute('class', 'welcome');
    welcomeText.innerText = 'Welcome to Mi Ranchito!';
    infoText.innerText = 'Family Owned, family operated, and authentic family recipes from Mi Ranchito to you!';
    welcomeContainer.appendChild(welcomeText);
    welcomeContainer.appendChild(infoText);
    content.appendChild(welcomeContainer);
}

export default homePage;