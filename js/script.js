function toggleMenu(){
    var _menu = document.getElementById("dropdownnav");
    var _navicon = document.getElementById("navicon");
    if (_menu.classList.contains("dropdownnavopen")){
     _menu.classList.remove("dropdownnavopen");
    _menu.classList.add("dropdownnavclose");
    _navicon.src="img/hamburger.png";
    } else{
        
        _menu.classList.add("dropdownnavopen");
        _menu.classList.remove("dropdownnavclose");
        _navicon.src="img/hamburgerx.png";
    }
}