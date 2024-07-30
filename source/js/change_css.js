function change_css() {
    var elements = document.getElementsByClassName("container");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.zIndex === '1001')
            elements[i].style.zIndex = '100';
        else
            elements[i].style.zIndex = '1001';
    }
}