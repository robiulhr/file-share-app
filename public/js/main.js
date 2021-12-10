(() => {
    let dropZone = document.querySelector('.drop-zone')
    let fileImagecontainer = document.querySelector('.file-image-container')
    let fileInput = document.querySelector('#file-input')
    let browseBtn = document.querySelector(".browse-button")
    let progressbarcontainer = document.querySelector('.progress-bar-container')
    let progressBar = document.querySelector('.progress-bar')
    let uploadingText = document.querySelector('.progress-bar h3')
    let uploadPercent = document.querySelector('.progress-bar h2')
    let fileEndpointContainer = document.querySelector('.fileEndpoint-container')
    let fileEndpointdivinput = document.querySelector('.fileEndpoint-div input')
    let copyButton = document.querySelector('.copy-button')
    let alertPopup = document.querySelector('.alert-popup')
    // let emaildivcontainer = document.querySelector('.email-div-container')
    //---------------
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault()
        fileImagecontainer.classList.add('draged')

    })

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault()
        fileImagecontainer.classList.remove('draged')
    })


    dropZone.addEventListener('drop', (e) => {
        e.preventDefault()
        fileImagecontainer.classList.remove('draged')
        fileInput.files = e.dataTransfer.files
        //------------ counting files 
        if (fileInput.files.length === 1) {
            const file = fileInput.files[0];
            // uploading files
            uploadfileandProgress(file)
        }
    })

    browseBtn.addEventListener('click', () => {
        fileInput.click()

    })

    fileInput.addEventListener('change', (e) => {
        //------------ counting files 
        if (fileInput.files.length === 1) {
            const file = fileInput.files[0];
            // uploading files
            uploadfileandProgress(file)
        }

    })
    copyButton.addEventListener('click', (e) => {
        e.preventDefault()

        /* Select the text field */
        fileEndpointdivinput.select();
        fileEndpointdivinput.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(fileEndpointdivinput.value);

        /* Alert the copied text */
        AlertPopup('Copied')
    })
    //--------------uploading file and showing Progress
    function uploadfileandProgress(file) {
        const formData = new FormData();
        formData.append('formData', file);
        var request = new XMLHttpRequest();
        request.open('POST', 'https://robiul0122.herokuapp.com/', true);
        request.upload.onprogress = function (e) {
            console.log(e.loaded);
            console.log(e.total);
            //-----percentage
            let percentage = `${Math.floor((e.loaded / e.total) * 100)}%`
            //-----show the progress div and percentage text
            progressbarcontainer.style.display = 'block'
            uploadingText.style.display = 'block'
            progressBar.style.width = percentage
            uploadPercent.style.display = 'block'
            uploadPercent.textContent = percentage
            //------ show upload done
            if (percentage === '100%') {
                uploadingText.textContent = 'Upload Done'
                AlertPopup('Upload done')
                // emaildivcontainer.style.display = 'block'
            }
        };
        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.DONE) {
                fileEndpointContainer.style.display = 'block'
                let fileEndpoint = JSON.parse(request.responseText).fileEndpoint
                fileEndpointdivinput.value = fileEndpoint
            }
        }
        request.onerror = function (e) {
            console.log('Error');
            console.log(e);
        };
        request.send(formData);
    }
    // -------------------------
    let AlertPopup = (text) => {
        /* Alert the copied text */
        alertPopup.style.bottom = '-10rem'
        alertPopup.textContent = text
        setInterval(() => {
            alertPopup.style.bottom = '10rem'
        }, 1000);
    }
})()
