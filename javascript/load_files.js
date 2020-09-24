function preload() {
    for(i = 0 ; i < imagesNames.length ; i++) {
        imgsToPreload[i].src = `imgs_compressed/${imagesNames[i]}-min.jpg`;
    }
}

function usePreloadedImages() {
    for(i = 0 ; i < imagesNames.length ; i++) {
        document.getElementById(imagesNames[i]).src = `imgs_compressed/${imagesNames[i]}-min.jpg`;
    }
    
}

// https://www.htmlgoodies.com/tutorials/web_graphics/article.php/3480001/So-You-Want-To-Pre-Load-Huh.htm