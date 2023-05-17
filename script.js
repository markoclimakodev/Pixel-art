// Get the body element from the document
const BODY = document.querySelector('body');

// Const to static values
const ASSETS_PATH = '../assets';
const ICONS_PATH = `${ASSETS_PATH}/icons/light`;
const LOGO_PATH = `${ASSETS_PATH}/logo-light.svg`;

// Function to create an element with a given tag, id, and parent element
const createElementWithIdClass = (element, elementSelector, parentElement) => {
  const newElement = document.createElement(element);
  newElement.id = elementSelector;
  newElement.classList.add(elementSelector);
  parentElement.appendChild(newElement);
};

// Create the header and add it to the body
const createHeader = () => {
  createElementWithIdClass('header', 'page-header', BODY);
  const HEADER = document.querySelector('#page-header');
  
  createElementWithIdClass('img', 'logo', HEADER);
  const LOGO = document.querySelector('#logo');
  LOGO.src =  LOGO_PATH;
  LOGO.setAttribute('alt', 'logo página tribixel');

  createElementWithIdClass('h1', 'title', HEADER);
  const TITLE = document.querySelector('#title');
  TITLE.innerText = 'Arte com pixels';
  TITLE.style.color = 'transparent';

  createElementWithIdClass('section', 'social-container', HEADER);
  const SOCIAL_CONTAINER = document.querySelector('#social-container');

  createElementWithIdClass('a', 'linkedin-link', SOCIAL_CONTAINER);
  const LINKEDIN_LINK = document.querySelector('#linkedin-link');
  LINKEDIN_LINK.setAttribute('href', 'https://www.linkedin.com/in/markoclimako/');
  LINKEDIN_LINK.setAttribute('target', '_blank');

  createElementWithIdClass('img', 'linkedin', LINKEDIN_LINK);
  const LINKEDIN_BTN = document.querySelector('#linkedin');
  LINKEDIN_BTN.src = `${ICONS_PATH}/linkedin.svg`;
  LINKEDIN_BTN.setAttribute('alt', 'Ícone Linkedin');

  createElementWithIdClass('a', 'github-link', SOCIAL_CONTAINER);
  const GITHUB_LINK = document.querySelector('#github-link');
  GITHUB_LINK.setAttribute('href', 'https://github.com/markoclimakodev');
  GITHUB_LINK.setAttribute('target', '_blank');

  createElementWithIdClass('img', 'github', GITHUB_LINK);
  const GITHUB_BTN = document.querySelector('#github');
  GITHUB_BTN.src = `${ICONS_PATH}/github.svg`;
  GITHUB_BTN.setAttribute('alt', 'Ícone Github');
}

// Create the buttons container and add it to the body
createElementWithIdClass('section', 'buttons-container', BODY);
const BUTTONS_CONTAINER = document.querySelector('#buttons-container');

// Create the pixel frame container and add it to the body
createElementWithIdClass('section', 'pixel-frame-container', BODY);
const PIXEL_FRAME_CONTAINER = document.querySelector('#pixel-frame-container');

// Get the screen size to determine the size of the pixel frame container
let screensize = '';
const getScreenSize = () => window.screen.width;

getScreenSize();

// Function to create the pixels within the pixel frame container
const createPixels = (numberOfPixels) => {
  Array.from({ length: numberOfPixels }).forEach(() => {
  createElementWithIdClass('div', 'pixel', PIXEL_FRAME_CONTAINER);
  });
  };

const handleScreenSize = () => {
  const screensize = window.screen.width;

const screenSizeData = {
    1600: { numberOfPixels: 2088, width: '90rem', height: '36.26rem' },
    1280: { numberOfPixels: 1568, width: '70rem', height: '34.90rem' },
    1536: { numberOfPixels: 2048, width: '80rem', height: '39.90rem' },
    1440: { numberOfPixels: 2048, width: '80rem', height: '39.90rem' },
    1366: { numberOfPixels: 1792, width: '80rem', height: '34.90rem' },
    375: { numberOfPixels: 384, width: '20rem', height: '29.90rem' },
    360: { numberOfPixels: 368, width: '20rem', height: '28.7rem' },
    412: { numberOfPixels: 560, width: '20rem', height: '43.72rem' },
    default: { numberOfPixels: 2736, width: '90rem', height: '47.40rem' },
  };

  const { numberOfPixels, width, height } =
    screenSizeData[screensize] || screenSizeData.default;

  createPixels(numberOfPixels);
  PIXEL_FRAME_CONTAINER.style.width = width;
  PIXEL_FRAME_CONTAINER.style.height = height;
};

handleScreenSize();

// Create the color picker button and add it to the buttons container
createElementWithIdClass('input', 'color-picker', BUTTONS_CONTAINER);
const COLOR_PICKER = document.querySelector('#color-picker');
COLOR_PICKER.setAttribute('type', 'color');

// Create the paint bucket button and add it to the buttons container
createElementWithIdClass('img', 'paint-bucket', BUTTONS_CONTAINER);
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
createElementWithIdClass('img', 'eraser-pixel', BUTTONS_CONTAINER);
const ERASER_PIXEL = document.querySelector('#eraser-pixel');
ERASER_PIXEL.src = '../assets/icons/light/eraser.svg';
ERASER_PIXEL.setAttribute('alt', 'Ícone para apagar pixel');
ERASER_PIXEL.setAttribute('title', 'Apaga o pixel clicado');

// Create the clear board button and add it to the buttons container
createElementWithIdClass('img', 'clear-board', BUTTONS_CONTAINER);
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
PIXELS.forEach((pixel) => {
  pixel.style.backgroundColor = 'transparent';
});

// Save the drawing to local storage
const saveDrawingToLocalStorage = () => {
  const localStoragePixels = [];
  PIXELS.forEach((pixel) => {
    localStoragePixels.push(pixel.style.backgroundColor);
  });
  
  localStorage.setItem('paintedPixels', JSON.stringify(localStoragePixels));
};

// load drawing from localStorage when page reload or close the page
const loadDrawingFromLocalStorage = () => {
  const localStoragePixels = JSON.parse(localStorage.getItem('paintedPixels'));
  if (localStoragePixels) {
    localStoragePixels.forEach((color, pixelIndex) => {
      PIXELS[pixelIndex].style.backgroundColor = color;
    });
  }
};

loadDrawingFromLocalStorage();

// Paint a pixel with the selected color
const paint = ({target}) => {
  const currentColor = colorSelected;
  target.style.backgroundColor = currentColor;
  saveDrawingToLocalStorage();
};

// Add an event listener to each pixel to paint it
PIXELS.forEach(pixel => {
  pixel.addEventListener('click', paint);
});

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
  PIXELS.forEach((pixel) => {
    pixel.style.backgroundColor = 'transparent';
  });

  saveDrawingToLocalStorage();
};

// Add an event listener to the clear board button
CLEAR_BOARD_BTN.addEventListener('click', clearBoard);

// Erases a pixel by making its background color transparent again
const erasePixel = ({target}) => {
  const currentColor = target.style.backgroundColor;
  colorSelected = currentColor;
};

// Add an event listener to the eraser button
ERASER_PIXEL.addEventListener('click', erasePixel);
