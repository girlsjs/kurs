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
    moveGalleryToIndex();
}

function onNext() {
    index = index + 1;
    if (index > maxIndex) {
        index = 0;
    }
    moveGalleryToIndex();
}

function moveGalleryToIndex() {
    $gallery.scrollLeft = 400 * index;
}
