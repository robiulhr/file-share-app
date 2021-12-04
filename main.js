let dropZone = document.querySelector('.drop-zone')
let fileImagecontainer = document.querySelector('.file-image-container')
let fileInput = document.querySelector('#file-input')
let browseBtn = document.querySelector(".browse-button")
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    fileImagecontainer.classList.add('draged')

})

dropZone.addEventListener('dragleave', () => {
    fileImagecontainer.classList.remove('draged')
})


dropZone.addEventListener('drop', (e) => {
    e.preventDefault()
    fileImagecontainer.classList.remove('draged')
    fileInput.files = e.dataTransfer.files
})

browseBtn.addEventListener('click', () => {
    fileInput.click()
})