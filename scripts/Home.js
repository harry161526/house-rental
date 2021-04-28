$(document).ready(function() {
    var breakpoint = 768 ;
    
   
    $(window).scroll(function() {
        if(this.scrollY > 30)
        {
            $('.navbar-local').addClass("sticky");
        }
        else
        {
            $('.navbar-local').removeClass("sticky")
        }
    });

})