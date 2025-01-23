const burgerContainer = document.getElementById('burger-container');
const menu = document.getElementById('menu');

const svgOpen = `
    <svg width="24" height="24" viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_174_49)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M54 72C50.6863 72 48 74.6863 48 78C48 81.3137 50.6863 84 54 84H234C237.313 84 240 81.3137 240 78C240 74.6863 237.313 72 234 72H54ZM234 150H54C50.6863 150 48 147.313 48 144C48 140.687 50.6863 138 54 138H234C237.313 138 240 140.687 240 144C240 147.313 237.313 150 234 150ZM48 210C48 206.687 50.6863 204 54 204H234C237.313 204 240 206.687 240 210C240 213.313 237.313 216 234 216H54C50.6863 216 48 213.313 48 210Z" fill="black"/>
        </g>
        <defs>
            <clipPath id="clip0_174_49">
                <rect width="288" height="288" fill="black"/>
            </clipPath>
        </defs>
    </svg>
`;


const svgClose = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8534 19.1463L12.7068 11.9997L19.8534 4.85319C20.0406 4.65946 20.0406 4.35227 19.8534 4.15848C19.6616 3.95988 19.345 3.95438 19.1464 4.14622L11.9999 11.2928L4.85339 4.14628C4.65967 3.95914 4.35248 3.95914 4.15869 4.14628C3.96008 4.33811 3.95459 4.65464 4.14642 4.85325L11.2929 11.9997L4.14642 19.1462C4.05267 19.24 4 19.3671 4 19.4997C3.99994 19.7758 4.22382 19.9997 4.49994 19.9997C4.63257 19.9999 4.75977 19.9471 4.85339 19.8532L11.9999 12.7067L19.1464 19.8532C19.2401 19.9472 19.3673 19.9999 19.4999 19.9997C19.6324 19.9997 19.7595 19.9471 19.8533 19.8534C20.0486 19.6581 20.0486 19.3415 19.8534 19.1463Z" fill="black"/>
    </svg>
`;

// Création dynamique du bouton burger
const burgerButton = document.createElement('button');
burgerButton.innerHTML = svgOpen;

burgerContainer.appendChild(burgerButton);

burgerButton.addEventListener('click', () => {
    menu.classList.toggle('hidden'); 

 
    if (menu.classList.contains('hidden')) {
        burgerButton.innerHTML = svgOpen; 
    } else {
        burgerButton.innerHTML = svgClose;  
    }
});
