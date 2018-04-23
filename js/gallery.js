let _imagegallery = document.getElementById('imagegallery');

const photos = [
    'pic01-', 
    'pic02-',
    'pic03-', 
    'pic04-',
    'pic05-', 
    'pic06-'
];

const images = {
    'photos':photos
}

let imagegallery = 'photos';

function buildGallery(images) {
    let html = '';
    
    for (let image of images){
        let alt = image.substring(0, image.lastIndexOf('-'));
        html += '<img alt="'+ alt +'" class="image" src="img/img-gallery/'+ image +'small.jpg">';
    }
    _imagegallery.innerHTML = html;
};

buildGallery(photos);

_imagegallery.addEventListener('click', function(e){
    if  (e.target.classList.contains('image')){
        let overlay = document.getElementById('overlay');
        let _modal = document.getElementById('modal');
        let img = e.target.getAttribute('src');
        let name = img.substring(0,img.lastIndexOf("-"));
        let alt = e.target.getAttribute('alt');
        
        _modal.innerHTML = '<img alt="' + alt + '" class="pic2" src="' + name + '-big.jpg">';
        overlay.classList.add('visible');
    }
});

let overlay = document.getElementById('overlay');

overlay.addEventListener('click', function(e){
    if(e.target.classList.contains('ex')){
        overlay.classList.remove('visible');
    }
});

document.addEventListener('keyup', function(e){
    if(e.which === 27){
        overlay.classList.remove('visible');
    }
});