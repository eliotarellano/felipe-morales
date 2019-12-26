$( document ).ready(function() {

    var scrollFunction = function() {
        var content = document.getElementById('page-content');
        var footer = document.getElementById('page-footer');
        var y = window.scrollY;
        if (y >= 100) {
            content.classList.remove('hide');
            content.classList.add("fade-in");
            setTimeout(
                function(){
                    footer.classList.remove('hide');
                    footer.classList.add('fade-in');
                }, 400);
        }

    };
      
    window.addEventListener("scroll", scrollFunction);
});