// Get the body element from the document
const BODY = document.querySelector('body');

// Function to create an element with a given tag, id, and parent element
const createElements = (element, elementSelector, parentElement) => {
  const ELEMENT = document.createElement(element);
  ELEMENT.id = elementSelector;
  ELEMENT.classList.add(elementSelector);
  parentElement.appendChild(ELEMENT);
};

// Create the header and add it to the body
createElements('header', 'page-header', BODY);
const HEADER = document.querySelector('#page-header');

// Create the logo image and add it to the header
createElements('img', 'logo', HEADER);
const LOGO = document.querySelector('#logo');
LOGO.src = '../assets/logo-light.svg';
LOGO.setAttribute('alt', 'logo página tribixel');

// Create heading
createElements('h1', 'title', HEADER);
const TITLE = document.querySelector('#title');
TITLE.innerText = 'Arte com pixels';
TITLE.style.color = 'transparent';

// Create a section container to social media buttons
createElements('section', 'social-container', HEADER);
const SOCIAL_CONTAINER = document.querySelector('#social-container');

// Create an anchor for Linkedin button
createElements('a', 'linkedin-link', SOCIAL_CONTAINER);
const LINKEDIN_LINK = document.querySelector('#linkedin-link');
LINKEDIN_LINK.setAttribute('href', 'https://www.linkedin.com/in/markoclimako/');
LINKEDIN_LINK.setAttribute('target', '_blank');

// Create Linkedin button
createElements('img', 'linkedin', LINKEDIN_LINK);
const LINKEDIN_BTN = document.querySelector('#linkedin');
LINKEDIN_BTN.src = '../assets/icons/light/linkedin.svg';
LINKEDIN_BTN.setAttribute('alt', 'Ícone Linkedin');

// Create an anchor for GitHub button
createElements('a', 'github-link', SOCIAL_CONTAINER);
const GITHUB_LINK = document.querySelector('#github-link');
GITHUB_LINK.setAttribute('href', 'https://github.com/markoclimakodev');
GITHUB_LINK.setAttribute('target', '_blank');

// Create Github button
createElements('img', 'github', GITHUB_LINK);
const GITHUB_BTN = document.querySelector('#github');
GITHUB_BTN.src = '../assets/icons/light/github.svg';
GITHUB_BTN.setAttribute('alt', 'Ícone Github');
