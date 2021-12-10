let Copyimglink = document.querySelector('#Copy-img-link')
let lickText = document.querySelector('.download-div h2')
let alertPopup = document.querySelector('.alert-popup')
Copyimglink.addEventListener('click', () => {
    navigator.clipboard.writeText(lickText.textContent);
    AlertPopup('Copied')
})



let AlertPopup = (text) => {
    /* Alert the copied text */
    alertPopup.style.bottom = '-10rem'
    alertPopup.textContent = text
    setInterval(() => {
        alertPopup.style.bottom = '10rem'
    }, 1000);
}