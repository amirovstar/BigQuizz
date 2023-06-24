async function getRandomImages(keyword) {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=${keyword}&count=10&client_id=NWLteXACs92KDRediJNNJtqdHTwLpKQQsBBe81iomw8`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
  function displayImages(images) {
    const imageContainer = document.getElementById("imageContainer");
  
    imageContainer.innerHTML = "";
  
    images.forEach((image) => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
  
      const imgElement = document.createElement("img");
      imgElement.className = "img-fluid";
      imgElement.src = image.urls.small;
  
      col.appendChild(imgElement);
      imageContainer.appendChild(col);
    });
  }
  
  async function handleSearch() {
    const searchInput = document.getElementById("searchInput");
    const keyword = searchInput.value;
  
    const images = await getRandomImages(keyword);
  
    displayImages(images);
  }
  
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", handleSearch);

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { 
      handleSearch();
    }
  });
  