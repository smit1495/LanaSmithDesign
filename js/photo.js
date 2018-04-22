

let _imagegallery = document.getElementById('imagegallery');

const _photos = [
    'pic01-', 
    'pic02-',
    'pic03-', 
    'pic04-',
    'pic05-', 
    'pic06-',
    'pic07-',
    'pic08-', 
    'pic09-',
    'pic10-', 
    'pic11-',
    'pic12-', 
    'pic13-',
    'pic14-', 
    'pic15-',
    'pic16-',
    'pic17-', 
    'pic18-',
    'pic19-', 
    'pic20-',
    'pic21-', 
    'pic22-',
    'pic23-', 
    'pic24-',
    'pic25-',
    'pic26-', 
    'pic27-',
    'pic28-', 
    'pic29-',
    'pic30-', 
    'pic31-',
    'pic32-', 
    'pic33-',
    'pic34-',
    'pic35-', 
    'pic36-',
    'pic37-', 
    'pic38-',
    'pic39-', 
    'pic40-',
    'pic41-',
    'pic42-', 
    'pic43-',
    'pic44-', 
    'pic45-',
    'pic46-', 
    'pic47-',
    'pic48-',
    'pic49-',
    'pic50-'
];

const images = {
    '_photos':_photos
}

let imagegallery = '_photos';

function buildGallery(images) {
    let html = '';
    
    for (let image of images){
        let alt = image.substring(0, image.lastIndexOf('-'));
        html += '<img alt="'+ alt +'" class="image" src="img/photo/'+ image +'small.jpg">';
    }
    _imagegallery.innerHTML = html;
};

buildGallery(_photos);

_imagegallery.addEventListener('click', function(e){
    if  (e.target.classList.contains('image')){
        let _overlay = document.getElementById('overlay');
        let _modal = document.getElementById('modal');
        let _img = e.target.getAttribute('src');
        let _name = _img.substring(0,_img.lastIndexOf("-"));
        let _alt = e.target.getAttribute('_alt');
        
        _modal.innerHTML = '<img alt="' + _alt + '" class="pic2" src="' + _name + '-big.jpg">';
        _overlay.classList.add('visible');
    }
});

let _overlay = document.getElementById('overlay');

_overlay.addEventListener('click', function(e){
    if(e.target.classList.contains('ex')){
        _overlay.classList.remove('visible');
    }
});

document.addEventListener('keyup', function(e){
    if(e.which === 27){
        _overlay.classList.remove('visible');
    }
});
