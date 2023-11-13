var pictureDatabase = {
    'desktop': getDesktopImages(),
    'cellphone': getCellphoneImages(),
    'laptop': getLaptopImages(),
    'headphone': getHeadphoneImages(),
};

function getDesktopImages() {
    return [
        { url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-silver-cto-hero-202310?wid=1254&hei=1132&fmt=jpeg&qlt=90&.v=1697301251973', alt: 'iMac', title: 'iMac'},
        { url: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/inspiron-desktops/24-5420/media-gallery/gray/desktop-aio-inspiron-24-5420-gray-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=546&qlt=100,1&resMode=sharp2&size=546,402&chrss=full', alt: 'Dell'},
        { url: 'https://cdn.cs.1worldsync.com/dd/ba/ddba7002-15c6-4ddc-9b4d-f99542922fb7.jpg', alt: 'Acer'},
        { url: 'https://5.imimg.com/data5/GR/DL/MY-14914674/hp-desktop-computer-intel-i3-2f8gb-2f1tb-500x500.jpg', alt: 'HP'},
    ];
}
function getCellphoneImages() {
    return [
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iyEPXjfXqYZMtd53oHvLe9LQiHrPSROw7w&usqp=CAU', alt: 'iPhone'},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7rxQ-EMz5dGXOPlKgiCvHQSwDIa9JcrlgA&usqp=CAU', alt: 'LG'},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBd2VkEeagxyHR_esHjWIGk53xfmzUp9J5Nw&usqp=CAU', alt: 'Samsung'},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwxK9t9XYpyCTioU1ONad0iO8lTw3myb-ow&usqp=CAU', alt: 'Blackberry'},
    ];
}
function getLaptopImages() {
    return [
        { url: '', alt: 'Macbook'},
        { url: '', alt: 'Lenovo'},
        { url: '', alt: 'Asus'},
        { url: '', alt: 'Microsoft'},
    ];
}
function getHeadphoneImages() {
    return [
        { url: '', alt: 'Beats'},
        { url: '', alt: 'Bose'},
        { url: '', alt: 'Sony'},
        { url: '', alt: 'Marshall'},
    ];
}
function searchImages() {
    const searchInput = document.getElementById('search-input').value;
    const outputContainer = document.getElementById('output');
    let images;
    if (searchInput.toLowerCase() == 'desktop') {
        images = getDesktopImages();
    } else if (searchInput.toLowerCase() == 'cellphone') {
        images = getCellphoneImages();
    } else if (searchInput.toLowerCase() == 'laptop') {
        images = getLaptopImages();
    } else if (searchInput.toLowerCase() == 'headphone') {
        images = getHeadphoneImages();
    } else {
        alert('Category not found');
        return;
    }
    displayImages(images);
}

function displayImages(images) {
    const outputContainer = document.getElementById('output');
    outputContainer.innerHTML = ''; 

    images.forEach(image => {
        const imgs = document.createElement('img');
        imgs.src = image.url;
        imgs.alt = image.alt;
        outputContainer.appendChild(imgs);
    });
}
function showAnswer(questionId) {
    var answers = {
        'question1': 'A: You can enter keywords in the search bar to find pictures.',
        'question2': 'A: You can use the navigation buttons provided on top of the page.',
        'question3': 'A: No, detailed descriptions are not provided, as we do not sell the displayed items .',
        'question4': 'A: No, the download feature is not available. You can view and enjoy the pictures online though.'
    };

    var answer = answers[questionId];
    alert(answer);
}
