const url = document.querySelector(".url");
const generateBtn = document.querySelector(".generate");
const display = document.querySelector(".display-URL");
generateBtn.addEventListener("click", function() {
    const websiteURL = url.value.trim();
    var pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    if (websiteURL === '' || !pattern.test(websiteURL)) {
        alert('Please enter a valid URL to continue.');
        websiteURL = '';
    }
    else {
        const encodedURL = encodeURIComponent(websiteURL);
        const qrImageURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedURL}&size=200x200`;
        const qrImage = document.createElement('img');
        const downloadBtn = document.createElement('button');
        downloadBtn.classList.add('downloadBtn');
        downloadBtn.textContent = 'Download';
        qrImage.classList.add('qr-image');
        qrImage.src = qrImageURL;
        display.innerHTML = '';
        display.appendChild(qrImage);
        display.appendChild(downloadBtn);
            downloadBtn.addEventListener("click", function() {
            const link = document.createElement('a');
            link.href = qrImageURL;
            link.click();
            link.download = 'qr-code.png';
            });
    }
});
