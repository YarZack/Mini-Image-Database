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
        { url: 'https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_14_2023_M2_Pro/AKA8518.jpg', alt: "Macbook Pro 14" },
        { url: 'https://p2-ofp.static.pub/fes/cms/2023/04/13/y3w9ybzvmwvw9j5ewxjb4a9oaaouul048865.png', alt: "Lenovo IdeaPad Pro" },
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbU4mw7Ox1DJJR11krc0m9FVVurge9FBEsXBH50KSE03fQtj2jQ4ZenQ3XjOpWwYRf2k&usqp=CAU', alt: 'Asus' },
        { url: 'https://www.pcworld.com/wp-content/uploads/2023/05/dell-xps-15-2023-2.jpg?quality=50&strip=all&w=1024', alt: "Dell XPS 15" },
    ];
}

function getHeadphoneImages() {
    return [
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0FK4HMihBaF0fRX0NzdMDPIHtFk6W1SIAjAmGTfs67Jfhlm9LVUq2kBvahoVO5jEw88&usqp=CAU', alt: 'Beats'},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69aDXmO4cwp505nOfSgfo6GZMKci1z3T1h61yeIvorbTHqZphLJvTP57JIG7kQmsh1hQ&usqp=CAU', alt: " Apple Airpods Max"},
        { url: 'https://furnituregalaxy.ca/wp-content/uploads/2020/11/WHRF400_1_A.jpg', alt: "Sony Wireless Home Headphones"},
        { url: 'https://ca.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw3b9796ab/450BT_black_angle_01-1606x1606px.png?sw=537&sfrm=png', alt: "JBL Headphones"},
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
//I propose to improve the search function like this
/*function searchImages() {
    const searchInput = document.getElementById('search-input').value;
    const outputContainer = document.getElementById('output');
    const keywords = searchInput.toLowerCase().split(' '); // Split input into keywords
    let images = [];

    keywords.forEach(keyword => {
        switch (keyword) {
            case 'desktop':
                images = images.concat(getDesktopImages());
                break;
            case 'cellphone':
                images = images.concat(getCellphoneImages());
                break;
            case 'laptop':
                images = images.concat(getLaptopImages());
                break;
            case 'headphone':
                images = images.concat(getHeadphoneImages());
                break;
            default:
        }
    });

    if (images.length === 0) {
        alert('No matching categories found');
        return;
    }

    displayImages(images);
} */ 


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
        'question3': 'A: No, detailed descriptions are not provided, as we do not sell the displayed items.',
        'question4': 'A: No, the download feature is not available. You can view and enjoy the pictures online though.',
        'question5': 'A: At the moment, we do not provide any external links for our images, but the images shown in our database are based on the highest selling products in the market, so you can find them easily on Google.',
        'question6': 'A: No, this database only provides images related to electronics.',
        'question7': 'A: If you cannot find the specific image you are looking for, hang on tight as we add new images related to our categories onto our site daily.',
        'question8': 'A: No, the searches are based on a category basis.'
    };

    var answer = answers[questionId];
    alert(answer);
}

function getAllImages() {
    return [
        ...getDesktopImages(),
        ...getCellphoneImages(),
        ...getLaptopImages(),
        ...getHeadphoneImages(),
    ];
}
function displayAllImages() {
    var allImages = getAllImages();
    displayImages(allImages);
}
    document.addEventListener('DOMContentLoaded', function () {
    displayAllImages();
});