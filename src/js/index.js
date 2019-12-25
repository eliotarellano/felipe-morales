$( document ).ready(function() {

    var scrollFunction = function() {
        var test = document.getElementById('test');
        var footer = document.getElementById('page-footer');
        var y = window.scrollY;
        if (y >= 100) {
            test.classList.remove('hide');
            test.classList.add("fade-in");
        }

    };
      
    window.addEventListener("scroll", scrollFunction);
});