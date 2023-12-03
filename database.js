var pictureDatabase = {
    'desktop': getDesktopImages(),
    'cellphone': getCellphoneImages(),
    'laptop': getLaptopImages(),
    'headphone': getHeadphoneImages(),
    'console': getConsoleImages(),
    'accessories': getSmartAccImages(),
};

function getDesktopImages() {
    return [
        { url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-silver-cto-hero-202310?wid=1254&hei=1132&fmt=jpeg&qlt=90&.v=1697301251973', alt: 'iMac', title: 'iMac'},
        { url: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/inspiron-desktops/24-5420/media-gallery/gray/desktop-aio-inspiron-24-5420-gray-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=546&qlt=100,1&resMode=sharp2&size=546,402&chrss=full', alt: 'Dell'},
        { url: 'https://cdn.cs.1worldsync.com/dd/ba/ddba7002-15c6-4ddc-9b4d-f99542922fb7.jpg', alt: 'Acer'},
        { url: 'https://5.imimg.com/data5/GR/DL/MY-14914674/hp-desktop-computer-intel-i3-2f8gb-2f1tb-500x500.jpg', alt: 'HP'},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVEKvkiXjusVmB70CfCfoA2LElKVAJBeqjg&usqp=CAU', alt: 'Desktop'},
    ];
}
function getCellphoneImages() {
    return [
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iyEPXjfXqYZMtd53oHvLe9LQiHrPSROw7w&usqp=CAU', alt: 'iPhone'},
        { url: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/onpleus_nord_n20_se_2.jpg', alt: 'One Plus'},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBd2VkEeagxyHR_esHjWIGk53xfmzUp9J5Nw&usqp=CAU', alt: 'Samsung'},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqSFaQTnqMCOQYPEPwCWNj-9SQb75cS8fQg&usqp=CAU', alt: 'Google Pixel'},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHzi6uOeFReJow_NpmWd6FuYLAB6lZb1UHw&usqp=CAU', alt: 'Collage of phones'},
    ];
}
function getLaptopImages() {
    return [
        { url: 'https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_14_2023_M2_Pro/AKA8518.jpg', alt: "Macbook Pro 14" },
        { url: 'https://p2-ofp.static.pub/fes/cms/2023/04/13/y3w9ybzvmwvw9j5ewxjb4a9oaaouul048865.png', alt: "Lenovo IdeaPad Pro" },
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbU4mw7Ox1DJJR11krc0m9FVVurge9FBEsXBH50KSE03fQtj2jQ4ZenQ3XjOpWwYRf2k&usqp=CAU', alt: 'Asus' },
        { url: 'https://www.pcworld.com/wp-content/uploads/2023/05/dell-xps-15-2023-2.jpg?quality=50&strip=all&w=1024', alt: "Dell XPS 15" },
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1HVkwJjP6HfdiV2E3N8T2wHrC4qX4ywxfA&usqp=CAU', alt: "Collage of laptops" },
    ];
}

function getHeadphoneImages() {
    return [
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0FK4HMihBaF0fRX0NzdMDPIHtFk6W1SIAjAmGTfs67Jfhlm9LVUq2kBvahoVO5jEw88&usqp=CAU', alt: "Beats"},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69aDXmO4cwp505nOfSgfo6GZMKci1z3T1h61yeIvorbTHqZphLJvTP57JIG7kQmsh1hQ&usqp=CAU', alt: " Apple Airpods Max"},
        { url: 'https://furnituregalaxy.ca/wp-content/uploads/2020/11/WHRF400_1_A.jpg', alt: "Sony Wireless Home Headphones"},
        { url: 'https://ca.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw3b9796ab/450BT_black_angle_01-1606x1606px.png?sw=537&sfrm=png', alt: "JBL Headphones"},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp5LdjBjj1jV5r5wWbrXa1GUXt8OPNWSX6fQ&usqp=CAU', alt: "Man wearing headphones"},
        
    ];
}

function getConsoleImages() {
    return [
        { url: 'https://blog.playstation.com/tachyon/2023/10/cd56722db7b991b3d7a33f1bafd55f80d0ac553d.png?resize=1088%2C612&crop_strategy=smart', alt: "PS5"},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ll7vGTfpjf_x1VsBfwAfl82pr31f3y5V5lNIWVx22Ux-M_ctnm7B-G2RJPx1-TRjLNc&usqp=CAU', alt:"Nintendo Switch"},
        { url: 'https://cdn.mos.cms.futurecdn.net/eH7muHj6y4RyJ5QYkGX8oT-1200-80.jpg', alt: "Xbox Series X"},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCKN2l0ChaPD9G6UeD_6fdmfsA1deGjLSNA&usqp=CAU', alt:" Wii U"},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsLKGEnDbYpGezpGg8kCuf8GBA8yw4jTDkw&usqp=CAU', alt:" Xbox one and PS4"},
    ];
}

function getSmartAccImages() {
    return [
        { url: 'https://media.wired.com/photos/6511aab1189c419c40374c92/16:9/w_2400,h_1350,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg', alt: "Apple Watch"},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FQWpHi_oe4X9N-mszHSbMrIn3EB4cDZVTyeY9moVpeIGRwdIz8ZxLccGdqAf21Gbg1Y&usqp=CAU', alt:"Google Home"},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS92yMImJlWb87UMx5pF3WBVt9OFYfmG5_NQ&usqp=CAU', alt: "Apple TV"},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJkekUn_Cv291ELcBN2PLxgDAa6FCt5a7EQ&usqp=CAU', alt:" AirTag"},
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8J23CckvX-CFZ4hhEWG8rue1qA-Txjvh-eJFNUw86WxwslrsX48kdu2NreulJZPLkaRg&usqp=CAU', alt:" Yale Smart Lock"},
    ];
}


function searchImages() {
    var searchInput = document.getElementById('search-input').value;
    var outputContainer = document.getElementById('output');
    var keywords = searchInput.toLowerCase().split(' '); 
    var images = [];

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
            case 'console':
                images = images.concat(getConsoleImages());
                break;
            case 'smartaccessory':
                  images = images.concat(getSmartAccImages());
                  break; 
            default:
        }
    });

    if (images.length === 0) {
        alert('No matching categories found');
        return;
    }
    displayImages(images);
} 


function displayImages(images) {
    var outputContainer = document.getElementById('output');
    outputContainer.innerHTML = ''; 

    images.forEach(image => {
        var imgs = document.createElement('img');
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
        'question7': 'A: If you cannot find the specific image you are looking for, Hang on tight as we add new images related to our categories onto our site daily.',
        'question8': 'A: No, the searches are based on a category basis.'
    };

    var answer = answers[questionId];
    alert(answer);
}

function getAllImages() { // Spread Operator
    return [
        ...getDesktopImages(),
        ...getCellphoneImages(),
        ...getLaptopImages(),
        ...getHeadphoneImages(),
        ...getConsoleImages(),
        ...getSmartAccImages(),
    ];
}
function displayAllImages() {
    var allImages = getAllImages();
    displayImages(allImages);
}
