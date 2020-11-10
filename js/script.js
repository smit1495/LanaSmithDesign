function myFunction(x) {
  x.classList.toggle("change");
    //document.getElementById("mySidenav").style.width = "100%";
    
    //x.classList.toggle("mnavcontainer");
    //document.getElementById("mySidenav").style.width = "0";
    
    if (document.getElementById("mySidenav").style.width == "100%"){
        document.getElementById("mySidenav").style.width = "0%"
    } else {
        document.getElementById("mySidenav").style.width = "100%"
    }
}


