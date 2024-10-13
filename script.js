document.getElementById('loadImagesBtn').addEventListener('click', loadImages);

function loadImages() {
  const gallery = document.getElementById('gallery');

  fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => response.json())
    .then(data => {

      data.forEach(cat => {
        const img = document.createElement('img');
        img.src = cat.url; 
        gallery.appendChild(img);
      });
    })
    .catch(error => console.error('Ошибка при загрузке изображений:', error));
}

document.getElementById('removeImagesBtn').addEventListener('click', removeImages);

function removeImages() {
  document.getElementById('gallery').innerHTML = ''
}

