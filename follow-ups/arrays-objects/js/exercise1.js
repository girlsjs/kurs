let randomBackgrounds = [
  'https://lh3.googleusercontent.com/K3UdS0t311DpKIiq614Ix6cRanFYxueEFaLF3T0bPQLGcJtqzw5ps3ClI85nK7jB4ElbKBs8xg=s640-h400-e365',
  'http://img10.deviantart.net/e1d6/i/2012/202/f/4/random_background_by_doublevtovka22-d583c4i.png',
  'https://previews.123rf.com/images/pixelsaway/pixelsaway1209/pixelsaway120900048/15523481-random-background-of-blue-and-green-glass-mosaic-tiles-with-a-single-red-square-Stock-Photo.jpg',
  'http://www.jqueryscript.net/images/jQuery-Plugin-For-Random-Background-Image-randomBackground.jpg',
  'https://previews.123rf.com/images/vorakorn/vorakorn1208/vorakorn120800022/14847139-violet-pink-lotus-in-yellow-core-various-size-random-order-in-background-Stock-Photo.jpg',
  'http://www.zingerbug.com/Backgrounds/background_images/colorful_paper_clips.jpg',
  'https://previews.123rf.com/images/unkas/unkas1302/unkas130200045/17677946-Stick-of-computer-random-access-memory-RAM-background-Stock-Photo.jpg',
  'https://ak5.picdn.net/shutterstock/videos/21160903/thumb/1.jpg',
  'http://slayd.arxiv.uz/uploads/download/posts/2016-03/1458209113_slayd7.jpg',
  'https://cdn.shutterstock.com/shutterstock/videos/13905128/thumb/1.jpg?i10c=img.resize(height:72)',
]

function renderBook(options) {
  let shelfElement = document.querySelector('.shelf')
  let random = Math.floor(Math.random() * randomBackgrounds.length)
  let cover = options.url || randomBackgrounds[random]

  let html = `<a class="book"
      href=""
      style="background-image: url('${cover}')">
    <div class="title">${options.title}</div>
    <div class="author">${options.author}</div>
    <div class="year">${options.year}</div>
  </a>`

  shelfElement.innerHTML = shelfElement.innerHTML + html
}
