FIXED%
/*const carousel1 = document.querySelector(".carousel1");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel1.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel1.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel1.addEventListener("mousedown", dragStart);
carousel1.addEventListener("mousemove",dragging);
carousel1.addEventListener("mouseup",dragStop);
*/