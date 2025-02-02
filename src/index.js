document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById("dog-image-container");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const images = data.message;
        images.forEach(url => {
          const imgElement = document.createElement("img");
          imgElement.src = url;
          imgElement.alt = "Random Dog";
          dogImageContainer.appendChild(imgElement);
        });
      })
      .catch(error => console.error("Error fetching dog images:", error));
  
    // Fetch and display dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsContainer = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
  
        // Function to update breed list based on selected letter
        const updateBreedList = (letter) => {
          dogBreedsContainer.innerHTML = '';
          const filteredBreeds = breeds.filter(breed => breed.startsWith(letter));
          filteredBreeds.forEach(breed => {
            const li = document.createElement("li");
            li.textContent = breed;
            li.addEventListener("click", () => {
              li.style.color = "blue"; // Change color on click
            });
            dogBreedsContainer.appendChild(li);
          });
        };
  
        // Initialize with all breeds
        updateBreedList('a');
  
        // Update breed list when dropdown selection changes
        breedDropdown.addEventListener("change", (e) => {
          updateBreedList(e.target.value);
        });
      })
      .catch(error => console.error("Error fetching dog breeds:", error));
  });
  