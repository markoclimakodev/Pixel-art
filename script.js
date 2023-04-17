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

// Create the buttons container and add it to the body
createElements('section', 'buttons-container', BODY);
const BUTTONS_CONTAINER = document.querySelector('#buttons-container');

// Create the pixel frame container and add it to the body
createElements('section', 'pixel-frame-container', BODY);
const PIXEL_FRAME_CONTAINER = document.querySelector('#pixel-frame-container');

// Get the screen size to determine the size of the pixel frame container
let screensize = '';
const getScreenSize = () => {
  let width = window.screen.width;
  screensize = width;
  return screensize;
};

getScreenSize();

// Function to create the pixels within the pixel frame container
const createPixels = (numberOfPixels) => {
  for (let pixels = 0; pixels < numberOfPixels; pixels += 1) {
    createElements('div', 'pixel', PIXEL_FRAME_CONTAINER);
  }
};

const handleScreenSize = () => {
  if (screensize === 1600) {
    createPixels(2088);
    PIXEL_FRAME_CONTAINER.style.width = '90rem';
    PIXEL_FRAME_CONTAINER.style.height = '36.26rem';
    // BUTTONS_CONTAINER.style.width = '90rem';
    return;
  } else if (screensize === 1280) {
    createPixels(1568);
    PIXEL_FRAME_CONTAINER.style.width = '70rem';
    PIXEL_FRAME_CONTAINER.style.height = '34.90rem';
    // BUTTONS_CONTAINER.style.width = '70rem';
    return;
  }
  createPixels(2736);
  PIXEL_FRAME_CONTAINER.style.width = '90rem';
  PIXEL_FRAME_CONTAINER.style.height = '47.40rem';
  // BUTTONS_CONTAINER.style.width = '90rem';
};

handleScreenSize();

// Create the color picker button and add it to the buttons container
createElements('input', 'color-picker', BUTTONS_CONTAINER);
const COLOR_PICKER = document.querySelector('#color-picker');
COLOR_PICKER.setAttribute('type', 'color');

// Create the paint bucket button and add it to the buttons container
createElements('img', 'paint-bucket', BUTTONS_CONTAINER);
const PAINT_BUCKET = document.querySelector('#paint-bucket');
PAINT_BUCKET.src = './assets/icons/light/paint-bucket.svg';
PAINT_BUCKET.setAttribute(
  'alt',
  'Ícone para pintar todo o quadro de uma única cor'
);
PAINT_BUCKET.setAttribute(
  'title',
  'Preenche o fundo do quadro com a cor selecionada'
);

// Create the erase pixel button and add it to the buttons container
createElements('img', 'eraser-pixel', BUTTONS_CONTAINER);
const ERASER_PIXEL = document.querySelector('#eraser-pixel');
ERASER_PIXEL.src = '../assets/icons/light/eraser.svg';
ERASER_PIXEL.setAttribute('alt', 'Ícone para apagar pixel');
ERASER_PIXEL.setAttribute('title', 'Apaga o pixel clicado');

// Create the clear board button and add it to the buttons container

createElements('img', 'clear-board', BUTTONS_CONTAINER);
const CLEAR_BOARD_BTN = document.querySelector('#clear-board');
CLEAR_BOARD_BTN.src = '../assets/icons/light/clear-board.svg';
CLEAR_BOARD_BTN.setAttribute(
  'alt',
  'Ícone para apagar todo o quadro de pixels'
);
CLEAR_BOARD_BTN.setAttribute('title', 'Apaga todos os pixels');

// Get the color selected by the user
let colorSelected = COLOR_PICKER.value;

// Save the selected color to local storage
const saveColorToLocalStorage = () => {
  localStorage.setItem('colorSelected', JSON.stringify(colorSelected));
};

// Load the previously selected color from local storage when the page is reloaded
const loadColorToLocalStorage = () => {
  const localStorageColor = JSON.parse(localStorage.getItem('colorSelected'));
  COLOR_PICKER.value = localStorageColor;
  colorSelected = localStorageColor;
};

loadColorToLocalStorage();

// Select a color to paint
const selectColor = () => {
  colorSelected = COLOR_PICKER.value;
  saveColorToLocalStorage();
};

// Update the selected color when the user finishes using the color picker
COLOR_PICKER.addEventListener('mouseleave', selectColor);

// Get all of the pixels
const PIXELS = document.querySelectorAll('.pixel');

// Set the background color of each pixel to transparent
for (let pixelIndex = 0; pixelIndex < PIXELS.length; pixelIndex += 1) {
  PIXELS[pixelIndex].style.backgroundColor = 'transparent';
}

// Save the drawing to local storage
const saveDrawingToLocalStorage = () => {
  const localStoragePixels = [];
  for (let pixelIndex = 0; pixelIndex < PIXELS.length; pixelIndex += 1) {
    localStoragePixels.push(PIXELS[pixelIndex].style.backgroundColor);
    localStorage.setItem('paintedPixels', JSON.stringify(localStoragePixels));
  }
};

// load drawing from localStorage when page reload or close the page
const loadDrawingFromLocalStorage = () => {
  const localStoragePixels = JSON.parse(localStorage.getItem('paintedPixels'));
  if (localStoragePixels) {
    for (
      let pixelIndex = 0;
      pixelIndex < localStoragePixels.length;
      pixelIndex += 1
    ) {
      PIXELS[pixelIndex].style.backgroundColor = localStoragePixels[pixelIndex];
    }
  }
};

loadDrawingFromLocalStorage();

// Paint a pixel with the selected color
const paint = (event) => {
  const currentColor = colorSelected;
  event.target.style.backgroundColor = currentColor;
  saveDrawingToLocalStorage();
};

// Add an event listener to each pixel to paint it
for (let index = 0; index < PIXELS.length; index += 1) {
  PIXELS[index].addEventListener('click', paint);
}

// Save the background color of the board to local storage
const saveBoardBackgroundColorToLocalStorage = () => {
  const saveBoardBgColor = PIXEL_FRAME_CONTAINER.style.backgroundColor;
  localStorage.setItem('board-background', JSON.stringify(saveBoardBgColor));
};

// Load the previously saved background color of the board from local storage when the page is reloaded

const loadBoardBackgroundColor = () => {
  const savedBoardBgColor = JSON.parse(
    localStorage.getItem('board-background')
  );
  PIXEL_FRAME_CONTAINER.style.backgroundColor = savedBoardBgColor;
};

loadBoardBackgroundColor();

// Fill the entire canvas with the selected color
const paintAllBoard = () => {
  PIXEL_FRAME_CONTAINER.style.backgroundColor = colorSelected;
  saveBoardBackgroundColorToLocalStorage();
};

// Add a click event listener to the paint bucket button
PAINT_BUCKET.addEventListener('click', paintAllBoard);

// Clear all pixels on the board

const clearBoard = () => {
  for (let pixelIndex = 0; pixelIndex < PIXELS.length; pixelIndex += 1) {
    PIXELS[pixelIndex].style.backgroundColor = 'transparent';
  }
  saveDrawingToLocalStorage();
};

// Add an event listener to the clear board button
CLEAR_BOARD_BTN.addEventListener('click', clearBoard);

// Erases a pixel by making its background color transparent again
const erasePixel = (event) => {
  const currentColor = event.target.style.backgroundColor;
  colorSelected = currentColor;
};

// Add an event listener to the eraser button
ERASER_PIXEL.addEventListener('click', erasePixel);