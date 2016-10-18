var $gallery = document.querySelector("#gallery");
var $picture = $gallery.querySelector("img");
var $prev = document.querySelector("#prev");
var $next = document.querySelector("#next");
var index = 0;
var maxIndex = 5;

$prev.addEventListener('click', onPrev);
$next.addEventListener('click', onNext);

function onPrev() {
    index = index - 1;
    if (index < 0) {
        index = maxIndex;
    }
    moveGalleryToIndex(index);
}

function onNext() {
    index = index + 1;
    if (index > maxIndex) {
        index = 0;
    }
    moveGalleryToIndex(index);
}

function moveGalleryToIndex(idx) {
    $gallery.style.left = 400 * idx + 'px';
}
