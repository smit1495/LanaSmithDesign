function init(){
    
   
    var biobutton = document.getElementById('biobutton');
    
    var biobio = document.getElementById('biobio');
    
    var profilecard = document.getElementById('profilecard');
    
    
    
    biobutton.addEventListener('click', function(e){
        
       if (biobio.classList.contains('animatearrow')){
           biobio.classList.remove('animatearrow');
           biobio.classList.add('animatearrowreverse');
           profilecard.classList.remove('animateprofilecard');
           profilecard.classList.add('animateprofilecardreverse');
              
        } else {
            biobio.classList.remove('animatearrowreverse');
            biobio.classList.add('animatearrow');
            profilecard.classList.remove('animateprofilecardreverse');
           profilecard.classList.add('animateprofilecard');
            
        }
    });
}