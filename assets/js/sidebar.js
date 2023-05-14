function moveElement() {
    var element = document.getElementById("myElement");
    var style = window.getComputedStyle(element);
    var marginLeft = parseInt(style.getPropertyValue("margin-left"), 10);
    var position = marginLeft;
    console.log(position);
    var isMoved = false;
    if (position == 0) {
        isMoved = true;
    } 
    var id = 0;
    console.log(isMoved);
    function on() {
        if (!isMoved && position == 0) {
            clearInterval(id);
            isMoved = true;
        } else {
            position += 2;
            element.style.marginLeft = position + 'px';
        }
    }
    function off() {
        if (isMoved && position == -120) {
            clearInterval(id);
            isMoved = false;
        } else {
            position -= 2;
            element.style.marginLeft = position + 'px';
        }
    }
    if (!isMoved) {
        id = setInterval(on, 1);
    } else {
        id = setInterval(off, 1);
    }
 }