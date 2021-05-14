$(document).ready(function () {
    console.log('clicked....')
    const next = document.getElementById("next");
    next.addEventListener('click',() => {
        console.log('entered listener...')
        var currentItem = $('.active');
        var nextItem = currentItem.next();
        if(nextItem.length)
        {
            currentItem.removeClass('active');
            nextItem.addClass('active');
        }
    })
  
})